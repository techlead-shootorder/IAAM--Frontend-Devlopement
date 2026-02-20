'use client';

import { useEffect, useState } from "react";

interface SecureCloudflareVideoProps {
  videoId: string;
}

export default function SecureCloudflareVideo({
  videoId,
}: SecureCloudflareVideoProps) {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchToken() {
      try {
        const res = await fetch("/api/stream-token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ videoId }),
        });

        if (!res.ok) {
          throw new Error("Failed to fetch video token");
        }

        const data = await res.json();
        setToken(data.token);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchToken();
  }, [videoId]);

  const subdomain = process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_CUSTOMER_SUBDOMAIN;

  if (loading)
    return (
      <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-600">Loading video...</span>
      </div>
    );

  if (error || !token)
    return (
      <div className="w-full aspect-video bg-red-50 rounded-lg flex items-center justify-center">
        <span className="text-red-600">
          {error || "Unable to load video"}
        </span>
      </div>
    );

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg relative min-h-[200px] touch-manipulation">
      <iframe
        src={`https://${subdomain}.cloudflarestream.com/${videoId}/iframe?token=${token}`}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; clipboard-write; web-share;"
        allowFullScreen
        className="w-full h-full border-0 absolute inset-0"
        loading="lazy"
      />
    </div>
  );
}

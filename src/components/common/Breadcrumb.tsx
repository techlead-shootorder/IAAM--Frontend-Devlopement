import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div style={{ position: "relative", width: "100%", background: "white", marginTop: "30px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px 24px", display: "flex", gap: "8px", fontSize: "15px", color: "#003399" }}>
        {items.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {item.href ? (
              <Link href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: "#111" }}>{item.label}</span>
            )}
            {i < items.length - 1 && <span style={{ color: "#999" }}>›</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

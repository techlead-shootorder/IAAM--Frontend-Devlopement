const API = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, '') || 'http://13.53.89.25:1337';

export async function getAssociationData() {
  const res = await fetch(`${API}/api/top-contents?populate=*`);
  const json = await res.json();
  return json.data?.[0] || null;
}


export async function getCouncilsData() {
  const res = await fetch(`${API}/api/top-contents?populate=*`);
  const json = await res.json();

  return json.data?.find((item: any) => item.slug === "iaam-councils") || null;
}


export async function getSocietiesData() {
  const res = await fetch(`${API}/api/top-contents?populate=*`,{ cache: "no-store" });
  const json = await res.json();
  return json.data?.find((item: any) => item.slug === "iaam-societies") || null;
}

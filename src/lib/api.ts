const API = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "") || "http://13.53.89.25:1337";

export async function getTopContentBySlug(slug: string) {
  const res = await fetch(`${API}/api/top-contents?filters[slug][$eq]=${slug}` +`&populate[HeroBanner][populate]=HeroBanner` +`&populate[Section][populate]=*`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const json = await res.json();
  return json.data?.[0] || null;
}


export async function getMainMenu() {
  const res = await fetch(
    `${API}/api/menu-sections?sort=OrderNo:asc&populate[Links][populate]=Sublinks&populate[LeftCard][populate]=Image`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    console.error('Main menu API failed')
    return []
  }

  const json = await res.json()
  return json.data || []
}

export async function getTopMenu() {
  const res = await fetch(
    `${API}/api/top-menus?populate=page`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    console.error('TopMenu API failed')
    return { left: [], right: [] }
  }

  const json = await res.json()

  const left = []
  const right = []

  for (const item of json.data) {
    const link = {
      label: item.page?.PageTitle,
      href: item.page?.slug ? `/${item.page.slug}` : '#',
    }

    if (item.Position === 'Left') left.push(link)
    if (item.Position === 'Right') right.push(link)
  }

  return { left, right }
}


export async function getHomeEventSection() {
  const res = await fetch(
    `${API}/api/home?populate[EventSection][populate][Eventinformation][populate]=Image`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    console.error('❌ Home EventSection API failed')
    return null
  }

  const json = await res.json()
  return json.data?.EventSection || null
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
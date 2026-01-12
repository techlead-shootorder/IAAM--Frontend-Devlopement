export interface JoinCard {
  id: number
  title: string
  description: string
  link: string | null
  variant: "primary" | "light"
}

export interface LeftCard {
  id: number
  title: string
  description: {
    type: string
    children: { type: string; text: string }[]
  }[]
  buttonText: string
  buttonLink: string
}

export interface JoinSectionData {
  title: string
  cards: JoinCard[]
  leftCard: LeftCard[]
}

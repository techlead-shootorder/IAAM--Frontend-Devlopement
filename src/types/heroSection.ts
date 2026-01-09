export interface HeroImage {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string | null;
      formats: {
        thumbnail: { url: string };
        small: { url: string };
        medium: { url: string };
        large: { url: string };
      };
    };
  } | null;
}

export interface HeroData {
  title: string;
  description: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  buttonText: string;
  buttonLink: string;
  image: HeroImage;
}
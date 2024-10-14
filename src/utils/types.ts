export interface AlumniProfileInfo {
    name: string;
    program: string;
    batch: string;
    image?: { url: string };
    slogan?: string;
    tags: string[];
    history: { year: string; position: string; company: string }[];
    slug: string;
  }

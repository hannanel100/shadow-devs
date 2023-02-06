// type for mentor users
export interface Mentor {
  image: string;
  name: string;
  bio?: string | null;
  location: string;
  rating: number;
  tags: string[];
}
//tags can be either frontend, backend or fullstack
export interface Tags {
  tag: "react" | "javascript" | "typescript" | "nodejs";
}

// type for mentor users
export interface Mentor {
  avatar: string;
  name: string;
  description: string;
  location: string;
  rating: number;
  tags: string[];
}
//tags can be either frontend, backend or fullstack
export interface Tags {
  tag: "react" | "javascript" | "typescript" | "nodejs";
}

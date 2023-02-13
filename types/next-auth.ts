import { RoleName, Tags } from "@prisma/client";
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      userId: string;
      email: string;
      name: string;
      image: string;
      bio: string;
      tags: Tags[];
      location: string;
      role: RoleName;
    };
  }
  interface User {
    userId: string;
    email: string;
    name: string;
    image: string;
    bio: string;
    tags: Tags[];
    location: string;
    role: RoleName;
  }
}

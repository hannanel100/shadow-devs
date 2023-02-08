import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

const prisma = new PrismaClient();
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_CLIENT_ID),
      clientSecret: String(process.env.GITHUB_CLIENT_SECRET),
    }),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  secret: String(process.env.NEXTAUTH_SECRET),
  debug: true,
  pages: {
    newUser: "/new-user",
  },
};

export default NextAuth(authOptions);

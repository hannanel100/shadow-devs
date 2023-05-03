import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import prisma from "../../../../lib/prismadb";

const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_CLIENT_ID),
      clientSecret: String(process.env.GITHUB_CLIENT_SECRET),
    }),
  ],
  session: {
    strategy: "database",
  },
  adapter: PrismaAdapter(prisma),
  secret: String(process.env.NEXTAUTH_SECRET),
  debug: true,
  pages: {
    newUser: "/new-user",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.role = user.role;
      return session;
    },
  },
  // A database is optional, but required to persist accounts in a database
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
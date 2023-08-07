import { prisma } from '../../../../lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import type {NextAuthOptions} from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        })
    ],
    callbacks: {
        async session({ session, user }) {
          session.user.id = user.id;
          return Promise.resolve(session);
        },
      }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
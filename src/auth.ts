import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub({
    clientId: process.env.AUTH_GITHUB_ID!,
    clientSecret: process.env.AUTH_GITHUB_SECRET!,
  }),
  Google({
    clientId: process.env.AUTH_GOOGLE_ID!,
    clientSecret: process.env.AUTH_GOOGLE_SECRET!,
  })],
  callbacks: {
    authorized: async ({ auth, request }) => {
      const { pathname } = request.nextUrl
    
      if (pathname.startsWith('/api/auth') || 
          pathname.startsWith('/auth')){
        return true
      }

      return !!auth
    },
  },
})
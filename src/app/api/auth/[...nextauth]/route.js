import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { pool } from "DB/Postgres";
import { CheckIfEmailExists } from "app/api/query/queries";
import bcrypt from "bcrypt";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req, res) {
        const userResult = await pool.query(CheckIfEmailExists, [
          credentials.email,
        ]);

        const user = userResult.rows[0];
        if (user) {
          const match = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (match) {
            return {
              Firstname: user.first_name,
              Lastname: user.last_name,
              Email: user.email_address,
              Phone: user.phone_number,
              Role: user.user_role,
              ProfileImg: user.profile_img,
              id: user.id,
            };
          } else {
            console.log("Invalid credentials");
            return null;
          }
        } else {
          console.log("User not found");
          return null;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/LogIn",
  },

  callbacks: {
    async session({ session, token }) {
      // Attach user information to the session object
      if (token) {
        session.user.Email = token.Email;
        session.user.Role = token.Role;
        session.user.Firstname = token.Firstname;
        session.user.Lastname = token.Lastname;
        session.user.ProfileImg = token.ProfileImg;
        session.user.id = token.id;
      }
      return session;
    },

    async jwt({ token, user }) {
      // Add user information to token when user is authenticated
      if (user) {
        token.Email = user.Email;
        token.Role = user.Role;
        token.Firstname = user.Firstname;
        token.Lastname = user.Lastname;
        token.ProfileImg = user.ProfileImg;
        token.id = user.id;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

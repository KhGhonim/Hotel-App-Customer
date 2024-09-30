import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { pool } from "DB/Postgres";
import { CheckIfEmailExists } from "app/api/query/queries";
import bcrypt from 'bcrypt'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req, res) {

        // Add logic here to look up the user from the credentials supplied
        const userResult = await pool.query(CheckIfEmailExists, [credentials.email]);

        const user = userResult.rows[0];


        if (user) {
          const match = await bcrypt.compare(credentials.password, user.password);

          if (match) {
            return user;
          } else {
            console.log("Invalid credentials");
            return null;
          }
        } else {
          console.log("User not found");
          return null;
        }


      }

    }),
  ],


  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/LogIn",
  },

}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


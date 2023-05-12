import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { getUser } from "../../../controller/userController";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      credentials: {},

      async authorize(credentials, _) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Missing username or password");
        }

        const user = await getUser(email);

        console.log(user.role);
        // const info = localStorage.setItem("User", user);

        if (
          !user ||
          !(await compare(password, user.password)) ||
          user.role === "admin"
        ) {
          throw new Error("Invalid username or password");
        }
        return user;
      },
    }),
    // console.log(authorize),
  ],

  session: { strategy: "jwt" },
};

export default NextAuth(authOptions);

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL+'/', //backend URL
  fetchOptions: {
    credentials: 'include'
  },
});

export const { signIn, signUp, useSession } = authClient;
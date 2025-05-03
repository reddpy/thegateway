"use client";

import AuthNavbar from "@/components/internal/navbar-auth";
import { AuthCard } from "@daveyplate/better-auth-ui";

export function AuthView({ pathname }: { pathname: string }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <AuthNavbar />
      <AuthCard pathname={pathname} />
    </main>
  );
}

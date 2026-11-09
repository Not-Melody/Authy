import { Suspense } from "react";
import { auth, signOut } from "@/auth";
import NavLink from "./nav-link";
import { Button } from "@mantine/core";
import { redirect } from "next/navigation";

async function HeaderContent() {
  const session = await auth();

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-2 items-center">
        <NavLink href="/" name="Home" />

        {session ? (
          <>
            <NavLink
              href="/dashboard"
              name="Dashboard"
              matchPattern="dashboard"
            />

            <form
              action={async () => {
                "use server";
                await signOut({ redirect: false });
                redirect("/");
              }}
            >
              <Button
                type="submit"
                variant="subtle"
                color="gray"
                size="compact-sm"
                className="text-brand-secondary hover:bg-gray-100 font-medium transition"
              >
                Logout
              </Button>
            </form>
          </>
        ) : (
          <NavLink href="/login" name="Login" />
        )}
      </div>

      <div className="flex items-center gap-2">
        <div
          className={`w-2 h-2 rounded-full ${
            session ? "bg-green-700" : "bg-red-700"
          }`}
        ></div>
        <span className="text-sm">
          {session ? "Authenticated" : "Not Authenticated"}
        </span>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header className="bg-white p-4 border-b border-gray-200 w-full">
      <div className="max-w-7xl mx-auto">
        <Suspense
          fallback={<div className="text-sm text-gray-400">Loading...</div>}
        >
          <HeaderContent />
        </Suspense>
      </div>
    </header>
  );
}

"use client";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
export default function AuthPanel({ session }: { session: Session | null }) {
  const pathName = usePathname();

  return (
    <div className="bg-white p-4 border-t border-gray-200 ">
      <div className="text-sm text-brand-secondary/70 space-y-1">
        <p>Current Path:{pathName}</p>
        <p>Auth Status: {session ? "Logged In" : "Logged Out"}</p>
      </div>
    </div>
  );
}

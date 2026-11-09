"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardLinkProps {
  href: string;
  name: string;
  matchPattern?: string;
  isExact?: boolean;
}

export default function DashboardLink({
  href,
  name,
  matchPattern,
  isExact,
}: DashboardLinkProps) {
  const pathname = usePathname();
  const isActive = isExact
    ? pathname === href
    : matchPattern
      ? pathname.includes(matchPattern)
      : pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-md px-4 py-2 w-full block transition ${
        isActive
          ? "bg-pink-500 text-white font-medium"
          : "text-brand-secondary/70 hover:bg-gray-100"
      }`}
    >
      {name}
    </Link>
  );
}

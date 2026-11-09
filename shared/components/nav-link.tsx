"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  name: string;
  matchPattern?: string;
  isExact?: boolean;
}

export default function NavLink({ href, name, matchPattern, isExact }: NavLinkProps) {
  const pathname = usePathname();
  
  const isActive = isExact 
    ? pathname === href 
    : (matchPattern ? pathname.includes(matchPattern) : pathname === href);

  return (
    <Link
      href={href}
      className={`rounded-md px-2 py-1 transition ${
        isActive
          ? "bg-brand-primary text-gray-900 font-medium" 
          : "text-brand-secondary hover:bg-gray-100"
      }`}
    >
      {name}
    </Link>
  );
}
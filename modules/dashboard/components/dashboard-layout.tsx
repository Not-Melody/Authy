import { Suspense } from "react";
import { auth } from "@/auth";
import AuthPanel from "@/shared/components/auth-panel";
import DashboardLink from "@/shared/components/dashboard-link";

async function SidebarContent() {
  const session = await auth();

  return (
    <div className="flex flex-col h-full">
      <nav className="p-4 space-y-2 flex-1">
        <DashboardLink href="/dashboard" name="Overview" isExact={true} />

        <DashboardLink
          href="/dashboard/profile"
          name="Profile"
          matchPattern="/dashboard/profile"
        />
        <DashboardLink
          href="/dashboard/settings"
          name="Settings"
          matchPattern="/dashboard/settings"
        />
      </nav>

      <div className="p-4 border-t border-gray-200">
        <AuthPanel session={session} />
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[calc(100vh-73px)] w-full bg-white">
      <div className="flex h-full max-w-7xl mx-auto">
        <aside className="w-64 border-r border-gray-200 h-full">
          <Suspense
            fallback={
              <div className="p-4 text-sm text-gray-400">Loading menu...</div>
            }
          >
            <SidebarContent />
          </Suspense>
        </aside>

        <main className="flex-1 h-full overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

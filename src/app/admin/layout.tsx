import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Sidebar } from "@/components/sidebar";
import { UserNav } from "@/components/user-nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang quản trị",
  description: "Trang quản trị",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Sidebar />
      <main className="mx-5 mt-16 sm:ml-[300px] sm:mt-3">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {/* <MainNav className="" /> */}
            <div className="ml-auto flex items-center space-x-4">
              <ModeToggle />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 lg:p-8 md:p-8 pt-6">{children}</div>
      </main>
    </div>
  );
}

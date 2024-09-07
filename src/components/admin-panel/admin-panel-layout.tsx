"use client";

import { Sidebar } from "@/components/admin-panel/sidebar";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";

export default function AdminPanelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const sidebar = useStore(useSidebarToggle, (state) => state);

    if (!sidebar) return null;

    return (
        <>
            <Sidebar />
            <main
                className={cn(
                    "min-h-[calc(100vh-5rem)] transition-[margin-left] ease-in-out duration-300",
                    sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
                )}
            >
                {children}
            </main>
        </>
    );
}

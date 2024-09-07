import { Menu } from "@/components/admin-panel/menu";
import { SidebarToggle } from "@/components/admin-panel/sidebar-toggle";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";

export function Sidebar() {
    const sidebar = useStore(useSidebarToggle, (state) => state);

    if (!sidebar) return null;

    return (
        <aside
            className={cn(
                "my-5 fixed left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 border-r border-border",
                sidebar?.isOpen === false ? "w-[90px]" : "w-72",
            )}
        >
            <SidebarToggle
                isOpen={sidebar?.isOpen}
                setIsOpen={sidebar?.setIsOpen}
            />
            <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md">
                <Menu isOpen={sidebar?.isOpen} />
            </div>
        </aside>
    );
}

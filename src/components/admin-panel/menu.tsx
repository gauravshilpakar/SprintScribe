"use client";

import { Ellipsis, Pen, Plus, Trash } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { getMenuList } from "@/lib/menu-list";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { useDocStore } from "@/hooks/use-saved-docs";

interface MenuProps {
    isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
    const iconSize = 18;
    const pathname = usePathname();
    const menuList = getMenuList(pathname);

    const [docValue, setDocValue] = useState("");
    const { docs, addDoc, removeDoc } = useDocStore();

    const handleAddDoc = () => {
        if (docValue.trim()) {
            addDoc(docValue);
            setDocValue(""); // Clear input field
        }
    };

    return (
        <>
            <ScrollArea className="[&>div>div[style]]:!block">
                <input
                    type="text"
                    value={docValue}
                    onChange={(e) => setDocValue(e.target.value)}
                    placeholder="Enter document value"
                />
                <button onClick={handleAddDoc}>Add Document</button>
                <nav className="mt-8 h-auto w-full">
                    <ul
                        className="flex flex-col items-start space-y-1 px-2"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {isOpen ? (
                            <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                                Saved Contents
                            </p>
                        ) : (
                            <TooltipProvider>
                                <Tooltip delayDuration={100}>
                                    <TooltipTrigger className="w-full">
                                        <div className="w-full flex justify-center items-center">
                                            <Ellipsis className="h-5 w-5" />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        <p>Saved Contents</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                        <li className={cn("w-full pt-1")}>
                            <Button
                                variant={"secondary"}
                                className="w-full gap-2"
                            >
                                {isOpen ? " New Document" : ""}
                                <Plus size={iconSize} />
                            </Button>
                        </li>
                        {docs.map((doc, index) => (
                            <li
                                className={cn("w-full", doc.id ? "pt-1" : "")}
                                key={index}
                            >
                                <div className="w-full" key={index}>
                                    <TooltipProvider disableHoverableContent>
                                        <Tooltip delayDuration={100}>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    variant={
                                                        doc.id.length === 0
                                                            ? "secondary"
                                                            : "ghost"
                                                    }
                                                    className="w-full justify-start h-10 mb-1"
                                                    asChild
                                                >
                                                    <Button variant={"ghost"}>
                                                        <span
                                                            className={cn(
                                                                isOpen === false
                                                                    ? ""
                                                                    : "mr-4",
                                                            )}
                                                        >
                                                            <Pen
                                                                size={iconSize}
                                                            />
                                                        </span>
                                                        <p
                                                            className={cn(
                                                                "w-44 text-ellipsis text-left overflow-hidden flex align-middle",
                                                            )}
                                                        >
                                                            {doc.value}
                                                        </p>
                                                        <Trash
                                                            size={iconSize}
                                                            className="h-5 w-5 ml-2 hover:text-destructive"
                                                            onClick={() =>
                                                                removeDoc(
                                                                    doc.id,
                                                                )
                                                            }
                                                        />
                                                    </Button>
                                                </Button>
                                            </TooltipTrigger>
                                            {isOpen === false && (
                                                <TooltipContent side="right">
                                                    <span className="!text-md truncate">
                                                        {doc.value}{" "}
                                                    </span>
                                                    Last Updated:
                                                    {doc.lastUpdated.toString()}
                                                </TooltipContent>
                                            )}
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </ScrollArea>
        </>
    );
}

"use client";

import { Ellipsis, Pen, Plus, Trash } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDocStore } from "@/hooks/use-saved-docs";
import { getMenuList } from "@/lib/menu-list";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MenuProps {
    isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
    const iconSize = 18;
    const pathname = usePathname();
    const menuList = getMenuList(pathname);

    const [docValue, setDocValue] = useState("");
    const [key, setKey] = useState<number>(0);
    const { docs, addDoc, removeDoc, setCurrentDoc } = useDocStore();

    function handleAddDoc() {
        if (docValue.trim()) {
            addDoc(docValue);
            setDocValue(""); // Clear input field
        }
    }

    function handleLoadDoc(key: number) {
        console.log(docs[key]);
        setKey(key);
        setCurrentDoc(docs[key]);
    }

    return (
        <>
            <ScrollArea className="[&>div>div[style]]:!block h-full">
                <nav className="h-auto w-full">
                    <ul className="flex flex-col items-start gap-1">
                        {isOpen ? (
                            <p className="text-sm font-medium text-muted-foreground px-4 max-w-[248px] truncate">
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
                        <li className={cn("w-full")}>
                            <Button
                                variant={"secondary"}
                                className="w-full gap-2 mt-2"
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
                                                    variant={"ghost"}
                                                    className={cn(
                                                        "w-full justify-start h-10",
                                                        index === key
                                                            ? "bg-accent/40"
                                                            : "",
                                                    )}
                                                    onClick={() =>
                                                        handleLoadDoc(index)
                                                    }
                                                >
                                                    <span
                                                        className={cn(
                                                            isOpen === false
                                                                ? ""
                                                                : "mr-4",
                                                        )}
                                                    >
                                                        <Pen size={iconSize} />
                                                    </span>
                                                    <p
                                                        className={cn(
                                                            "w-44 text-ellipsis text-left overflow-hidden flex align-middle",
                                                        )}
                                                    >
                                                        {
                                                            JSON.parse(
                                                                doc.value,
                                                            ).blocks[0].data
                                                                .text
                                                        }
                                                    </p>
                                                    <Trash
                                                        size={iconSize}
                                                        className="h-5 w-5 ml-2 hover:text-red-600 z-50"
                                                        onClick={() =>
                                                            removeDoc(doc.id)
                                                        }
                                                    />
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

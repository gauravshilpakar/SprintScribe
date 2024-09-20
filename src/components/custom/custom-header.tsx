import { BeerIcon, BookOpenText } from "lucide-react";
import Link from "next/link";
import { SheetMenu } from "../admin-panel/sheet-menu";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

export default function CustomHeader() {
    return (
        <header className="z-[50] top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border">
            <div className="container h-14 flex items-center gap-5">
                <SheetMenu />

                <Link
                    href="/"
                    className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
                >
                    <BookOpenText className="w-6 h-6 mr-3" />
                    <span className="font-bold">User Story Writer</span>
                </Link>
                <nav className="ml-auto flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full w-8 h-8 bg-background"
                        asChild
                    >
                        <Link href="https://github.com/salimi-my/shadcn-ui-sidebar">
                            <BeerIcon className="h-[1.2rem] w-[1.2rem]" />
                        </Link>
                    </Button>
                    <ModeToggle />
                </nav>
            </div>
        </header>
    );
}

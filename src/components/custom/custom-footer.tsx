import { Beer } from "lucide-react";
import Link from "next/link";

export default function CustomFooter() {
    return (
        <footer className="!p-5 bottom-0 z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-4 md:mx-8 flex flex-col gap-2 items-center justify-center">
                <p className="text-balance text-center text-xs md:text-sm leading-loose text-muted-foreground">
                    Made With ♥️ By{" "}
                    <Link
                        href="https://gauravshilpakar.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        Gaurav Shilpakar.
                    </Link>
                </p>

                <p className="text-balance text-center text-xs md:text-sm leading-loose text-muted-foreground">
                    If you loved the appl, consider{" "}
                    <Link
                        href="https://gauravshilpakar.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-4 inline-block"
                    >
                        buying me a beer!
                        <Beer className="h-5 inline" />
                    </Link>
                </p>
            </div>
        </footer>
    );
}

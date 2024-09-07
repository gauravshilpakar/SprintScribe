import Link from "next/link";

export default function CustomFooter() {
    return (
        <footer className="!mt-10 sticky bottom-0 z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-4 md:mx-8 flex h-14 items-center justify-center">
                <p className="text-balance text-center text-xs md:text-sm leading-loose text-muted-foreground">
                    Made With ♥️ By{" "}
                    <Link
                        href="https://ui.shadcn.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        Gaurav Shilpakar.
                    </Link>
                </p>
            </div>
        </footer>
    );
}

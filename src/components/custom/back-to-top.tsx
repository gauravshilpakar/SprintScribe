import { MoveUp } from "lucide-react";
import { Button } from "../ui/button";

export default function BackToTop() {
    return (
        <Button variant="link" className="ml-0 pl-0 text-muted-foreground">
            <MoveUp />
            <a href="#top">Back to top!</a>
        </Button>
    );
}

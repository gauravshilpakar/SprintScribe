import { MoveUp } from "lucide-react";
import { Button } from "../ui/button";

export default function BackToTop() {
    return (
        <Button variant="link" className="pl-0  mt-10">
            <MoveUp />
            <a href="#top">Back to top!</a>
        </Button>
    );
}

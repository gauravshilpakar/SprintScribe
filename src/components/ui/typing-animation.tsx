import { TypeAnimation } from "react-type-animation";

import React from "react";
import { cn } from "@/lib/utils";

function TypingAnimation() {
    return (
        <TypeAnimation
            sequence={[
                "Developer", // Types 'One'
                1500, // Waits 1s
                "Product Owner", // Deletes 'One' and types 'Two'
                1500, // Waits 2s
                "Scrum Master", // Types 'Three' without deleting 'Two'
                1500, // Waits 2s
                "Team Member", // Types 'Three' without deleting 'Two'
                1500,
                "UI/UX Designer", // Types 'Three' without deleting 'Two'
                1500,
                "Tester", // Types 'Three' without deleting 'Two'
                1500,
                () => {
                    console.log("Sequence completed");
                },
            ]}
            cursor={true}
            repeat={Infinity}
            className={
                "inline-block bg-yellow-400 text-foreground dark:text-background"
            }
        />
    );
}

export default TypingAnimation;

import { TypeAnimation } from "react-type-animation";

function TypingAnimation() {
    return (
        <TypeAnimation
            sequence={[
                "Developer?",
                1500,
                "Product Owner?",
                1500,
                "Scrum Master?",
                1500,
                "Team Member?",
                1500,
                "UI/UX Designer?",
                1500,
                "Tester?",
                1500,
                () => {
                    console.log("Sequence completed");
                },
            ]}
            cursor={true}
            repeat={Infinity}
            className={
                "inline-block px-5 py-1 bg-emerald-500 text-foreground dark:text-background"
            }
        />
    );
}

export default TypingAnimation;

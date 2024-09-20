"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";

const withoutSprintScribe = [
    "Manually write Sprint Scribe.",
    "Get asked by Scrum Master/Lead to rewrite.",
    "Waste hours on the Agile Board.",
    "Too much varition in User Stories clarity and format.",
];
const withSprintScribe = [
    "Generate user stories quickly, saving time for actual development.",
    "User stories are uniform and easy to understand.",
    "Automated improvements.",
    "High-impact task recommendation, aligning with business goals.",
];

export default function HomePage() {
    return (
        <div className="my-12 flex flex-col min-h-screen">
            <div className="min-h-[60vh] container flex items-center justify-center flex-col md:flex-row gap-5">
                {/* TEXT */}
                <main>
                    <div className="container relative">
                        <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
                            <h2 className="text-xl">Are you a</h2>
                            <h2 className="text-xl">
                                <TypingAnimation />
                            </h2>
                            <h1 className="text-center uppercase text-5xl -tracking-normal font-bold">
                                Tired of writing User Stories again?
                            </h1>
                            <span className="mt-5 max-w-96 text-center  text-md text-foreground">
                                Wave goodbye to the agony of rewriting the same
                                stuff. Let’s{" "}
                                <span className="bg-yellow-400 text-foreground dark:text-background p-1">
                                    automate the boring stuff
                                </span>{" "}
                                so you can get back to the fun part: endless
                                meetings.
                            </span>
                            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
                                <Button asChild className="">
                                    <Link href="/demo">
                                        Demo
                                        <ArrowRightIcon className="ml-2" />
                                    </Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link
                                        href="https://ui.shadcn.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn shadcn/ui
                                    </Link>
                                </Button>
                            </div>
                        </section>
                    </div>
                </main>
                {/* IMAGE */}
                <div className="w-full justify-center relative">
                    <Image
                        src="/4.jpg"
                        width={1080}
                        height={608}
                        alt="demo"
                        priority
                        className="border rounded-xl shadow-sm"
                    />
                </div>
            </div>

            <section className="container max-w-2xl text-center">
                <h1 className="text-center text-3xl font-bold md:text-4xl p-5">
                    Tired of wasting time on your Agile Board?
                </h1>
                <h2>
                    Do you suffer a lot of pain just for your lead to ask you to
                    do it again?
                    <br /> Do you ...
                </h2>
                <div className="py-10">
                    <ul className="flex items-center justify-center gap-14">
                        <li className="max-w-28">
                            <p className="text-5xl my-2">💬</p>
                            Start Manually Writing
                        </li>
                        <li>
                            <MoveRight />
                        </li>
                        <li>
                            <p className="text-5xl  my-2">👨‍🔧</p>Iterate On & On
                        </li>
                        <li>
                            <MoveRight />
                        </li>
                        <li>
                            <p className="text-5xl  my-2">😰</p>
                            <span
                                className="p-1
               bg-red-600"
                            >
                                BURN OUT?!
                            </span>
                        </li>
                    </ul>
                </div>

                {/* 
                <div className="justify-center flex flex-col items-center">
                    <h1 className="text-xl">
                        With AI All your problems will be gone...
                    </h1>

                    <ul className="text-left max-w-96">
                        <li>
                            ✅ Save Time & Energy: No more burning hours on
                            writing and rewriting user stories—let the app do
                            the grunt work.
                        </li>
                        <li>
                            ✅ Consistency Without the Hassle: Keep user stories
                            clear and standardized across the team without extra
                            effort.
                        </li>
                        <li>
                            ✅ Adapt to Changes Easily: Quickly tweak user
                            stories as requirements shift, staying truly agile.
                        </li>
                    </ul>
                </div>
                 */}
            </section>
            <section className="mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="self-stretch bg-rose-200/90 text-rose-700  dark:bg-rose-200/90 p-8 md:p-12 w-full max-w-md ">
                        <h3 className="font-bold text-lg mb-4">
                            Stripe invoices without ZenVoice
                        </h3>
                        <ul className="list-disc list-inside space-y-1.5 ">
                            {withoutSprintScribe.map((value) => (
                                <li className="flex gap-2 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="w-4 h-4 shrink-0 opacity-75"
                                    >
                                        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
                                    </svg>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-emerald-200/90 text-emerald-700 dark:bg-emerald-200/90 p-8 md:p-12 w-full max-w-md">
                        <h3 className="font-bold text-lg mb-4">
                            Stripe invoices + ZenVoice
                        </h3>
                        <ul className="list-disc list-inside space-y-1.5 ">
                            {withSprintScribe.map((value) => (
                                <li className="flex gap-2 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="w-4 h-4 shrink-0 opacity-75"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

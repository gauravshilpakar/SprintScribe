"use client";

import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="min-h-[60vh] container flex items-center justify-center flex-col md:flex-row gap-5">
                {/* TEXT */}
                <main>
                    <div className="container relative">
                        <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
                            <h2 className="text-xl">
                                Are you a <TypingAnimation />?
                            </h2>
                            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
                                Tired of writing User Stories & ACs... again?
                            </h1>
                            <span className="mt-5 max-w-96 text-center text-md font-light text-foreground">
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
                                    <Link href="/uswriter">
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
                <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] p-5">
                    Do you spend too much time on your Agile Board?
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
               bg-red-600 text-primary"
                            >
                                BURN OUT?!
                            </span>
                        </li>
                    </ul>
                </div>

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
            </section>
        </div>
    );
}

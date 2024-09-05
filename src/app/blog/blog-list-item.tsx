import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Blog } from "./getBlogsList";
import { dateToLocaleString } from "@/lib/utils";

function BlogListItem(props: Blog) {
    return (
        <Card className="h-full max-w-[80vw]">
            <AspectRatio ratio={3 / 2}>
                <Link
                    href={"/blog/" + props.id}
                    className="leading-normal hover:underline"
                >
                    <Image
                        src={`/${props.id}.jpg`}
                        fill={true}
                        alt="Image"
                        className="rounded-md object-cover"
                    />
                </Link>
            </AspectRatio>

            <CardHeader>
                <CardTitle>
                    <Link
                        href={"/blog/" + props.id}
                        className="leading-normal hover:underline"
                    >
                        {" "}
                        {props.title}
                    </Link>
                </CardTitle>
                <CardDescription className="truncate">
                    {props.description}
                </CardDescription>
            </CardHeader>
            <CardFooter className="text-foreground">
                <span>{dateToLocaleString(props.date)}</span>
            </CardFooter>
        </Card>
    );
}

export default BlogListItem;

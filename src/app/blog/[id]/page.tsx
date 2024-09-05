import React from "react";
import { Blog, getBlogs } from "../getBlogsList";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { dateToLocaleString } from "@/lib/utils";
import { ArrowLeft, MoveLeft } from "lucide-react";
import { link } from "fs";
import BackToTop from "@/components/custom/back-to-top";

export async function getBlog(params: { id: number }) {
    const Blog = await import(`@/app/blog/markdown/blog${params.id}.mdx`);
    return Blog.default;
}

async function BlogPage({ params }: { params: { id: number } }) {
    const blogs: Blog[] = getBlogs();
    const blog = blogs[params.id];

    const BlogComponent = await getBlog(params);
    return (
        <div className="container md:px-20 lg:p-50">
            <Button variant="link" className="pl-0 mb-10 gap-2">
                <MoveLeft />
                <Link href={"/blog"}>Back to blogs.</Link>
            </Button>
            <article className="prose prose-zinc max-w-full lg:prose-xl dark:prose-invert">
                <BlogComponent date={dateToLocaleString(blog.date)} />
            </article>
            <BackToTop />
            <div className="my-20">
                <h2 className="text-2xl my-5">Further Readings...</h2>
                <ol className="list-decimal container flex flex-col gap-2">
                    {blogs.map(
                        (item, index) =>
                            index != params.id && (
                                <li key={index}>
                                    <Button variant="link">
                                        <Link href={`/blog/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    </Button>
                                </li>
                            ),
                    )}
                </ol>
            </div>
        </div>
    );
}

export default BlogPage;

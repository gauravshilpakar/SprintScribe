import React from "react";
import BlogItem from "./blog-list-item";
import { getBlogs } from "./getBlogsList";
import BackToTop from "@/components/custom/back-to-top";

function BlogList() {
    const blogs = getBlogs();
    return (
        <div className="container md:px-20 lg:p-50">
            <h1 className="text-3xl p-5 font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
                Blog
            </h1>
            <p className="text-lg p-5">
                Learn all about writing the most effective and efficient User
                Stories and Acceptance Criterias.
            </p>

            <ol className="grid grid-cols-2 gap-5 p-5 justify-center">
                {blogs.map((item, index) => (
                    <li key={index}>
                        <BlogItem
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                        />
                    </li>
                ))}
            </ol>

            <BackToTop />
        </div>
    );
}

export default BlogList;

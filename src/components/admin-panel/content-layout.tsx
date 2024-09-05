"use client";

import { useState } from "react";
import EditorComponent from "../custom/editor-component";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

interface ContentLayoutProps {
    title: string;
    children: React.ReactNode;
}

// Initial Data
const INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 3,
            },
        },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        { type: "paragraph" },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
    ],
};

export function ContentLayout({ title, children }: ContentLayoutProps) {
    const [data, setData] = useState(INITIAL_DATA);
    return (
        <div className="container p-10 m-10 sm:px-8 rounded-md mx-auto bg-white shadow-sm dark:bg-background dark:shadow-muted">
            <EditorComponent
                data={data}
                onChange={setData}
                editorblock="editorjs-container"
            />
            <Button
                className="savebtn"
                onClick={() => {
                    alert(JSON.stringify(data));
                }}
            >
                Save
            </Button>
            {/*  
            <Card className="rounded-lg border-none mt-6 h-full flex">
                <CardContent className="p-5 h-full">
                    <div className="min-h-full w-full">
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="editor w-full justify-center">
                                
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex justify-center items-center min-h-[calc(100vh-70px-20px-24px-56px-48px)]">
                        <div className="flex flex-col relative">HELLO</div>
                    </div> 
                </CardContent>
            </Card>

            */}
        </div>
    );
}

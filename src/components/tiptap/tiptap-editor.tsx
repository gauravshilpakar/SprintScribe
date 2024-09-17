"use client";

import PlaceHolder from "@tiptap/extension-placeholder";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextStyle from "@tiptap/extension-text-style";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextDataProps from "./tiptap-data";

export default function TiptapEditor({
    params,
    setContent,
}: {
    params: TextDataProps;
    setContent: (newValue: string) => void;
}) {
    console.log("log on every editor change");
    const contentValue =
        "<div><h2>User Story</h2><p><b>Given</b></p><ul><li><p>A customer</p></li></ul><p>When</p><ul><li><p>An item is added to cart</p></li></ul><p>Then</p><ul><li><p>Price of cart must be updated</p></li></ul></div>";

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            PlaceHolder.configure({
                placeholder: "Start Writing...",
            }),
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
                orderedList: {
                    HTMLAttributes: {
                        class: "m-2",
                    },
                },
                bulletList: {
                    HTMLAttributes: {
                        class: "m-2",
                    },
                },
                listItem: {
                    HTMLAttributes: {
                        class: "m-0 p-0",
                    },
                },
                bold: {
                    HTMLAttributes: {
                        class: "font-extrabold",
                    },
                },
                paragraph: {
                    HTMLAttributes: {
                        class: "my-1",
                    },
                },
            }),
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
            TaskList.configure({
                HTMLAttributes: {
                    class: "flex flex-col gap-0",
                },
            }),
            TaskItem.configure({
                nested: true,
                HTMLAttributes: {
                    class: "flex flex-row flex-1 gap-2 items-center",
                },
            }),
            TextStyle.configure({
                HTMLAttributes: {
                    class: "dark:text-foreground",
                },
            }),
        ],
        autofocus: true,
        editorProps: {
            attributes: {
                class: "leading-tight prose dark:prose-invert mx-auto focus:outline-none",
            },
        },
        content: params.value,
        onUpdate: ({ editor }) => {
            console.log(editor.getJSON());
            setContent(editor.getHTML());
        },
    });

    return (
        <>
            {editor && (
                <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                    <div className="bubble-menu">
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleBold().run()
                            }
                            className={
                                editor.isActive("bold") ? "is-active" : ""
                            }
                        >
                            Bold
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleItalic().run()
                            }
                            className={
                                editor.isActive("italic") ? "is-active" : ""
                            }
                        >
                            Italic
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleStrike().run()
                            }
                            className={
                                editor.isActive("strike") ? "is-active" : ""
                            }
                        >
                            Strike
                        </button>
                    </div>{" "}
                </BubbleMenu>
            )}
            <EditorContent editor={editor} />
        </>
    );
}

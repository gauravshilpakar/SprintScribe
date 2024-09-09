"use client";

import { Color } from "@tiptap/extension-color";
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import Strike from "@tiptap/extension-strike";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Text from "@tiptap/extension-text";
import TextStyle from "@tiptap/extension-text-style";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

export default function TiptapEditor() {
    const contentValue =
        "<div><h2>User Story</h2><p>Given</p><ul><li><p>A customer</p></li></ul><p>When</p><ul><li><p>An item is added to cart</p></li></ul><p>Then</p><ul><li><p>Price of cart must be updated</p></li></ul></div>";

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                    HTMLAttributes: {
                        // class
                    },
                },
                paragraph: {
                    HTMLAttributes: {
                        class: "my-1",
                    },
                },
                orderedList: {
                    HTMLAttributes: {
                        class: "",
                    },
                },
                bulletList: {
                    HTMLAttributes: {
                        class: "my-1",
                    },
                },
                listItem: {
                    HTMLAttributes: {
                        class: "m-0 p-0",
                    },
                },
            }),
            Document,
            Text,
            Strike,
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
            TaskList,
            TaskItem.configure({
                nested: true,
                HTMLAttributes: {
                    class: "flex flex-1 flex-row place-items-center items-center gap-2",
                },
            }),
            Dropcursor,
            TextStyle.configure({
                HTMLAttributes: {
                    class: "dark:text-foreground",
                },
            }),
            Color,
        ],
        autofocus: true,
        editorProps: {
            attributes: {
                class: "leading-tight prose mx-auto focus:outline-none",
            },
        },
        content: contentValue,
    });

    useEffect(() => {
        editor?.commands.setColor("text-background");

        return () => {};
    }, []);

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

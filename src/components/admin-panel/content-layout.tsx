"use client";

import { useDocStore } from "@/hooks/use-saved-docs";
import { useEffect, useState } from "react";
import TiptapEditor from "../custom/tiptap-editor";
import { Button } from "../ui/button";

export interface TextDataProps {
    time: Date;
    blocks: any[];
}

const NEW_DATA: TextDataProps = { time: new Date(), blocks: [] };

export function ContentLayout() {
    const { docs, addDoc, removeDoc, currentDoc } = useDocStore();
    const [data, setData] = useState<TextDataProps>(
        currentDoc?.value && JSON.parse(currentDoc.value),
    );

    useEffect(() => {
        if (currentDoc && currentDoc.value) {
            setData(JSON.parse(currentDoc.value));
        } else {
            setData(NEW_DATA); // Default to NEW_DATA if no currentDoc
        }
    }, [currentDoc]);

    const handleAddDoc = () => {
        if (JSON.stringify(data).trim() && data?.blocks.length) {
            addDoc(JSON.stringify(data));
        }
    };
    return (
        <div className="container p-10 m-10 sm:px-8 rounded-md mx-auto flex-1 overflow-y-auto">
            {data && <TiptapEditor />}
            <Button onClick={handleAddDoc} className="fixed bottom-5 right-5">
                Save
            </Button>
        </div>
    );
}

"use client";

import { useDocStore } from "@/hooks/use-saved-docs";
import { useEffect, useState } from "react";
import TiptapDataProps from "../tiptap/tiptap-data";
import TiptapEditor from "../tiptap/tiptap-editor";
import { Button } from "../ui/button";

const NEW_DATA: TiptapDataProps = {
    id: crypto.randomUUID().toString(),
    time: new Date(Date.now()),
    value: null,
};

export function ContentLayout() {
    const { docs, addDoc, removeDoc, updateDoc, currentDoc } = useDocStore();
    const [data, setData] = useState<TiptapDataProps>(
        currentDoc ? currentDoc : NEW_DATA,
    );

    const setContent = (newValue: string) => {
        setData((oldValue) => ({
            ...oldValue,
            time: new Date(Date.now()),
            value: newValue,
        }));
    };

    useEffect(() => {
        console.log("change");
        if (currentDoc && currentDoc.value) {
            setData(currentDoc);
        } else {
            setData(NEW_DATA); // Default to NEW_DATA if no currentDoc
        }
    }, [currentDoc]);

    const handleAddDoc = () => {
        // if (data?.id && data?.value) {
        //     // update existing doc if id is present
        //     const isPresent = docs.some((item) => item.id === data.id);
        //     if (isPresent) {
        //         // update existing doc
        //         data.time = new Date(Date.now());
        //         const index = docs.findIndex((item) => item.id === data.id);
        //         docs[index] = data;
        //     } else {
        //         // else add new doc
        //         addDoc(data);
        //     }
        // } else if (data?.value) {
        //     // else add new doc
        //     data.id = crypto.randomUUID().toString();

        // }
        data.id = crypto.randomUUID().toString();
        addDoc(data);
    };

    return (
        <div className="container p-10 m-10 sm:px-8 rounded-md mx-auto flex-1 overflow-y-auto">
            {data && (
                <TiptapEditor
                    params={currentDoc ? currentDoc : NEW_DATA}
                    setContent={setContent}
                />
            )}
            <Button onClick={handleAddDoc} className="fixed bottom-5 right-5">
                Save
            </Button>
        </div>
    );
}

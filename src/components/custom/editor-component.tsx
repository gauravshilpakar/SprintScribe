import { EditorJsTools } from "@/lib/editor-js-tools";
import EditorJS from "@editorjs/editorjs";
import { memo, useEffect, useRef } from "react";
import { TextDataProps } from "../admin-panel/content-layout";

interface EditorComponentProps {
    data: TextDataProps;
    editorblock: string; // Updated type to string
}

const Editor = ({ data, editorblock }: EditorComponentProps) => {
    const ref = useRef<any>(null); // More specific typing
    useEffect(() => {
        if (!ref.current) {
            const editor = new EditorJS({
                holder: editorblock,
                placeholder: "Start writing...",
                tools: EditorJsTools,
                data: data,
                onChange: async () => {
                    const content = await editor.saver.save();
                },
            });
            ref.current = editor;
        }

        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
                ref.current = null;
            }
        };
    }, [data, editorblock]); // Reinitialize editor when data changes

    return <div id={editorblock} className="bg-transparent min-h-full" />;
};

export default memo(Editor);

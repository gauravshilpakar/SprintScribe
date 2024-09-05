import React, { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EditorJsTools } from "@/lib/editor-js-tools";

interface Props {
    data: any;
    onChange: any;
    editorblock: any;
}

const Editor = ({ data, onChange, editorblock }: Props) => {
    const ref = useRef<any>();
    //Initialize editorjs
    useEffect(() => {
        //Initialize editorjs if we don't have a reference
        if (!ref.current) {
            const editor = new EditorJS({
                holder: editorblock,

                tools: EditorJsTools,
                data: data,
                async onChange(
                    api: { saver: { save: () => any } },
                    event: any,
                ) {
                    const data = await api.saver.save();
                    onChange(data);
                },
            });
            ref.current = editor;
        }

        //Add a return function to handle cleanup
        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, []);
    return <div id={editorblock} />;
};

export default memo(Editor);

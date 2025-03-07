"use client";

import { useEffect } from "react";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";

const BlockNoteEditor = ({ onChange, value, ...other }) => {
    const editor = useCreateBlockNote({});

    const initDefaultContent = async () => {
        const blocks = await editor.tryParseHTMLToBlocks(value);

        editor.replaceBlocks(editor.document, blocks);
    };

    useEffect(() => {
        if (!!value) {
            initDefaultContent();
        }
    }, []);

    return (
        <BlockNoteView
            editor={editor}
            {...other}
            onChange={async () => {
                onChange(await editor.blocksToFullHTML(editor.document));
            }}
            style={{
                width: "100%",
            }}
        />
    );
};

export default BlockNoteEditor;

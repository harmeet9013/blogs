"use client";

import "@blocknote/mantine/style.css";
//
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";

const BlockNoteEditor = ({ ...other }) => {
    const editor = useCreateBlockNote();

    return <BlockNoteView editor={editor} {...other} />;
};

export default BlockNoteEditor;

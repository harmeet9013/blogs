import { Container } from "@mui/material";
import { Editor } from "react-draft-wysiwyg";

export default function CreateBlogContent(props) {
    return (
        <Container disableGutters>
            <Editor
                editorState={props.editorState}
                onEditorStateChange={(newEditorState) => {
                    props.setEditorState(newEditorState);
                }}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                toolbarClassName="demo-toolbar"
            />
        </Container>
    );
}

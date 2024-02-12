import { MarkdownContainer, Preview, PreviewTitle } from "./preview.styles";
import { EditorFieldContext } from "../../views/editor/editor.view"; 
import { useContext } from "react";
import QuillEditor from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

export const PreviewComponent = () => {
  const [editorField] = useContext(EditorFieldContext);
  return (
    <Preview>
      <PreviewTitle>Preview</PreviewTitle> 
      <MarkdownContainer>
      {/* <QuillEditor
        value={editorField}
        readOnly={true}
        theme={"bubble"}
      /> */}
      </MarkdownContainer>
    </Preview>
  )
}
import { EditorPane } from "./editor.styles"
import { EditorComponent } from "../../components/editor/editor.comp"
import { createContext, useState } from "react"
import { Button, ButtonGroup } from "../../styles";
import { backgroundColors } from "../../settings/colors";
import { PreviewComponent } from "../../components/preview/preview.comp";


export const EditorFieldContext = createContext();

export const EditorView = () => {
  const [editorField, setEditorField] = useState("");
  const [isPreviewing, setIsPreviewing] = useState(false);

  return (
    <EditorFieldContext.Provider value={[editorField, setEditorField]}>
      <EditorPane>
        {
          isPreviewing ? (
            <PreviewComponent />
          ) : (
            <EditorComponent />
          )
        }
        <ButtonGroup gap={"15"}>
          <Button backgroundColor={backgroundColors.primary}>Save As Draft</Button>
          <Button backgroundColor={backgroundColors.primary}>Save</Button>
          {
            isPreviewing ? (
              <Button onClick={() => { setIsPreviewing(false) }} backgroundColor={backgroundColors.secondary}>Edit</Button>
            ) : (
              <Button onClick={() => { setIsPreviewing(true) }} backgroundColor={backgroundColors.secondary}>Preview</Button>
            )
          }
        </ButtonGroup>
      </EditorPane>
    </EditorFieldContext.Provider>
  )
}
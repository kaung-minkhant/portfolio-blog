import { BlogMetaDataContainer, BlogTitle, BlogTitleInput, BlogMetaDataLabel, Editor, BlogDescription, BlogDescriptionInput, QuillContainer, QuillWrapper } from './editor.styles'
import './editor.styles.css'
import { EditorFieldContext } from '../../views/editor/editor.view'
import { useContext, useEffect, useRef } from 'react'

import "react-quill/dist/quill.snow.css"
import {QuillToolBar} from './editorToolbar.comp'
import { useEditorHook } from './editor.hook'

export const EditorComponent = () => {
  const [editorField, setEditorField] = useContext(EditorFieldContext);
  const quill = useRef();
  const { modules, formats } = useEditorHook(quill)
  useEffect(() => {
    console.log({ editorField })
  }, [editorField])

  return (
    <Editor>
      <BlogMetaDataContainer>
        <BlogTitle>
          <BlogMetaDataLabel>Title</BlogMetaDataLabel>
          <BlogTitleInput type='text' placeholder='My Blog Title' />
        </BlogTitle>
        <BlogDescription>
          <BlogMetaDataLabel>Description</BlogMetaDataLabel>
          <BlogDescriptionInput rows={5} placeholder='Description will be used as abstract or Summary'></BlogDescriptionInput>
        </BlogDescription>
      </BlogMetaDataContainer>
      <QuillWrapper>
        <QuillToolBar />
        <QuillContainer
          ref={quill}
          theme="snow"
          value={editorField}
          onChange={setEditorField}
          formats={formats}
          modules={modules}
        />
      </QuillWrapper>
    </Editor>
  )
}
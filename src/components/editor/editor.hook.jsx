import { useMemo, useCallback } from "react";
import { Quill } from "react-quill";

import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';
import QuillImageDropAndPaste from 'quill-image-drop-and-paste'

const Size = Quill.import('formats/size');

Quill.register({
  "modules/blotFormatter": BlotFormatter,
  "modules/imageDropAndPaste": QuillImageDropAndPaste,
})

Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true)

const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);


export const useEditorHook = (quill) => {
  function upload(image, image64) {
    return fetch("https://2qr5qnup9a.execute-api.ap-southeast-1.amazonaws.com/development/file_upload", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        type: image.type,
        folder: "testing",
        fileName: image.name,
        file: image64,
      })
    })
      .then((response) => response.json())
      .then(json => {
        console.log({ json })
        return json.url
      })
  }

  const imageInsertHandler = useCallback(() => {
    // Create an input element of type 'file'
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // When a file is selected
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();

      // Read the selected file as a data URL
      reader.onload = () => {
        const imageUrl = reader.result;
        const quillEditor = quill.current.getEditor();
        console.log(quillEditor)
        upload(file, imageUrl).then(imageLink => {
          // Get the current selection range and insert the image at that index
          const range = quillEditor.getSelection(true);
          quillEditor.insertEmbed(range.index, "image", imageLink, "user");
        })
      };

      reader.readAsDataURL(file);
    };
  }, []);

  const imagePasteHandler = useCallback((imageDataUrl, type, imageData) => {
    upload(imageData, imageDataUrl).then(imageLink => {
      const quillEditor = quill.current.getEditor();
      const range = quillEditor.getSelection(true);
      quillEditor.insertEmbed(range.index, "image", imageLink, "user");
    })
  }, [])

  const modules = useMemo(() => ({
    toolbar: {
      container: "#toolbar",
      handlers: {
        // undo: undoChange,
        // redo: redoChange
        image: imageInsertHandler,
      }
    },
    blotFormatter: {},
    imageDropAndPaste: {
      handler: imagePasteHandler,
    },
    clipboard: {
      matchVisual: false,
    },
    // history: {
    //   delay: 500,
    //   maxStack: 100,
    //   userOnly: true
    // }
  }), [imageInsertHandler, imagePasteHandler]);

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block",
    'formula',
    'width',
    'height',
  ];

  return {
    modules, formats
  }
}
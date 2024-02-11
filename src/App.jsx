import './App.css'
import { EditorView } from './views/editor/editor.view'

function App() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      <EditorView />
    </div>
  )
}

export default App

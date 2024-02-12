import { importShared } from './__federation_fn_import-Lz2QPQOM.js';
import { j as jsxRuntimeExports } from './jsx-runtime-yPXpVdAV.js';
import { r as reactDomExports } from './__federation_shared_react-dom-6rhX7AH_.js';
import { E as EditorView } from './editor.view-6-L-ZWmQ.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditorView, {}) });
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);

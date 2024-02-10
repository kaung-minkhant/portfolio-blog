import { importShared } from './__federation_fn_import-7Yh3MA2n.js';
import App, { j as jsxRuntimeExports } from './__federation_expose_Blog-9sgiby2F.js';
import { r as reactDomExports } from './__federation_shared_react-dom-xrZ2K6C7.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);

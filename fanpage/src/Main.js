import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ErrorBoundary } from "./components/system/ErrorBoundary";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ErrorBoundary, { children: _jsx(App, {}) }) }));

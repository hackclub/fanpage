import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
export class ErrorBoundary extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(err) {
        const e = err;
        return { hasError: true, message: e?.message, stack: e?.stack };
    }
    componentDidCatch(err) {
        console.error("App crashed:", err);
    }
    render() {
        if (this.state.hasError) {
            return (_jsxs("div", { style: { padding: 16, color: "#fff" }, children: [_jsx("h1", { style: { fontSize: 20, marginBottom: 8 }, children: "\u26A0\uFE0F Runtime error" }), _jsx("pre", { style: { whiteSpace: "pre-wrap", opacity: 0.9 }, children: this.state.message }), _jsxs("details", { style: { marginTop: 12, opacity: 0.7 }, children: [_jsx("summary", { children: "stack" }), _jsx("pre", { children: this.state.stack })] })] }));
        }
        return this.props.children;
    }
}

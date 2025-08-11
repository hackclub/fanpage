import React from "react";

type State = { hasError: boolean; message?: string; stack?: string };
export class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(err: unknown): State {
    const e = err as Error;
    return { hasError: true, message: e?.message, stack: e?.stack };
  }
  componentDidCatch(err: unknown) {
    console.error("App crashed:", err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 16, color: "#fff" }}>
          <h1 style={{ fontSize: 20, marginBottom: 8 }}>⚠️ Runtime error</h1>
          <pre style={{ whiteSpace: "pre-wrap", opacity: 0.9 }}>{this.state.message}</pre>
          <details style={{ marginTop: 12, opacity: 0.7 }}>
            <summary>stack</summary>
            <pre>{this.state.stack}</pre>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
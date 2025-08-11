
import * as React from "react";

export default function Background(): JSX.Element {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 isolate">
      <div className="bg-photo-img absolute inset-0 z-0" />
      <div className="bg-tint absolute inset-0 z-10" />
      <div className="grain absolute inset-0 z-20 pointer-events-none" />
      <div className="grain-2 absolute inset-0 z-20 pointer-events-none" />
      <div className="vignette absolute inset-0 z-30 pointer-events-none" />
    </div>
  );
}

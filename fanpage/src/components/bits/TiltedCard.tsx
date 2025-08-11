// src/components/bits/TiltedCard.tsx

import { useRef, useState, type CSSProperties, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, type SpringOptions } from "motion/react";
import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  // optional “image mode”
  imageSrc?: string;
  altText?: string;

  // sizing (optional)
  containerHeight?: CSSProperties["height"];
  containerWidth?: CSSProperties["width"];
  imageHeight?: CSSProperties["height"];
  imageWidth?: CSSProperties["width"];

  // effect
  scaleOnHover?: number;
  rotateAmplitude?: number;
  glare?: boolean;
};

const springValues: SpringOptions = { damping: 30, stiffness: 100, mass: 2 };

export default function TiltedCard({
  children,
  className,
  imageSrc,
  altText = "tilted-card",
  containerHeight,
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.06,
  rotateAmplitude = 12,
  glare = true,
  ...rest
}: Props): JSX.Element {
  const fig = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useMotionValue(0), springValues);
  const ry = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const [lastY, setLastY] = useState(0);

  function onMove(e: MouseEvent<HTMLElement>) {
    if (!fig.current) return;
    const r = fig.current.getBoundingClientRect();
    const ox = e.clientX - r.left - r.width / 2;
    const oy = e.clientY - r.top - r.height / 2;

    rx.set((oy / (r.height / 2)) * -rotateAmplitude);
    ry.set((ox / (r.width / 2)) * rotateAmplitude);

    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);

    setLastY(oy);
    if (glare) {
      fig.current.style.setProperty("--glx", `${((ox / r.width) + 0.5) * 100}%`);
      fig.current.style.setProperty("--gly", `${((oy / r.height) + 0.5) * 100}%`);
    }
  }
  function onEnter() { scale.set(scaleOnHover); }
  function onLeave() { scale.set(1); rx.set(0); ry.set(0); }

  const figStyle: CSSProperties = { height: containerHeight, width: containerWidth };

  return (
    <figure
      ref={fig}
      className="relative w-full h-full [perspective:900px] flex items-stretch justify-stretch"
      style={figStyle}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...rest}
    >
      {/* This element tilts; all visual styles belong here */}
      <motion.div
        style={{ rotateX: rx, rotateY: ry, scale }}
        className={cn(
          "relative [transform-style:preserve-3d] rounded-2xl overflow-hidden",
          // soft glare highlight
          glare &&
            "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:[background:radial-gradient(650px_260px_at_var(--glx,50%)_var(--gly,50%),rgba(255,255,255,.12),transparent_60%)]",
          className
        )}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={altText}
            style={{ width: imageWidth, height: imageHeight }}
            className="block object-cover [transform:translateZ(0)]"
          />
        ) : (
          <div className="relative [transform:translateZ(0)]">
            {children}
          </div>
        )}
      </motion.div>
    </figure>
  );
}

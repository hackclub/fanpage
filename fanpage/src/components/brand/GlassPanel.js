import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/cn";
export function GlassPanel({ className, children, }) {
    return (_jsx("div", { className: cn("relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur", "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:[mask:linear-gradient(#000,transparent)]", "before:[background:radial-gradient(60%_60%_at_50%_0%,rgba(var(--brand),0.45),transparent_60%)]", className), children: children }));
}

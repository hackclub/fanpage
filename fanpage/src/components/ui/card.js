import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/cn";
function Card({ className, ...props }) {
    return (_jsx("div", { className: cn("rounded-2xl border bg-card text-card-foreground shadow-sm", className), ...props }));
}
function CardHeader({ className, ...props }) {
    return _jsx("div", { className: cn("flex flex-col space-y-1.5 p-6", className), ...props });
}
function CardTitle({ className, ...props }) {
    return (_jsx("h3", { className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props }));
}
function CardContent({ className, ...props }) {
    return _jsx("div", { className: cn("p-6 pt-0", className), ...props });
}
export { Card, CardHeader, CardTitle, CardContent };

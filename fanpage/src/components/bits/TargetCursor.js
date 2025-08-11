import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useCallback, useMemo } from "react";
import gsap from "gsap";
const TargetCursor = ({ targetSelector = "[data-cursor-snap]", spinDuration = 2, hideDefaultCursor = true, snapDuration = 0.18, tolerancePx = 4, }) => {
    const cursorRef = useRef(null);
    const cornersRef = useRef(null);
    const spinTl = useRef(null);
    const dotRef = useRef(null);
    const centerRef = useRef({ x: 0, y: 0 });
    const activeTargetRef = useRef(null);
    const constants = useMemo(() => ({
        borderWidth: 3,
        cornerSize: 12,
        parallaxStrength: 0.00005,
    }), []);
    const moveCursor = useCallback((x, y, fast = false) => {
        if (!cursorRef.current)
            return;
        gsap.to(cursorRef.current, {
            x,
            y,
            duration: fast ? 0.08 : 0.12,
            ease: "power3.out",
        });
    }, []);
    useEffect(() => {
        if (!cursorRef.current)
            return;
        const originalCursor = document.body.style.cursor;
        if (hideDefaultCursor)
            document.body.style.cursor = "none";
        const cursor = cursorRef.current;
        cornersRef.current = cursor.querySelectorAll(".target-cursor-corner");
        gsap.set(cursor, { xPercent: -50, yPercent: -50, x: innerWidth / 2, y: innerHeight / 2 });
        const startSpin = () => {
            spinTl.current?.kill();
            spinTl.current = gsap.timeline({ repeat: -1 }).to(cursor, {
                rotation: "+=360",
                duration: spinDuration,
                ease: "none",
            });
        };
        const stopSpin = () => {
            spinTl.current?.pause();
            gsap.set(cursor, { rotation: 0 });
        };
        startSpin();
        const onMove = (e) => {
            if (activeTargetRef.current) {
                const { x, y } = centerRef.current;
                moveCursor(x, y, true);
                return;
            }
            moveCursor(e.clientX, e.clientY);
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        const onScroll = () => {
            const target = activeTargetRef.current;
            if (!target || !cursorRef.current)
                return;
            const { x, y } = centerRef.current;
            const el = document.elementFromPoint(x, y);
            const stillOver = el &&
                (el === target ||
                    !!el.closest(targetSelector)) &&
                (() => {
                    const r = target.getBoundingClientRect();
                    const cx = r.left + r.width / 2;
                    const cy = r.top + r.height / 2;
                    return Math.abs(cx - x) <= tolerancePx && Math.abs(cy - y) <= tolerancePx;
                })();
            if (!stillOver) {
                leaveCurrentTarget();
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        const resetCorners = () => {
            if (!cornersRef.current)
                return;
            const { cornerSize } = constants;
            const positions = [
                { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
                { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
                { x: cornerSize * 0.5, y: cornerSize * 0.5 },
                { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
            ];
            const tl = gsap.timeline();
            Array.from(cornersRef.current).forEach((corner, i) => {
                tl.to(corner, { x: positions[i].x, y: positions[i].y, duration: 0.28, ease: "power3.out" }, 0);
            });
        };
        const updateCorners = (target, mouseX, mouseY) => {
            if (!cursorRef.current || !cornersRef.current)
                return;
            const rect = target.getBoundingClientRect();
            const cursorRect = cursorRef.current.getBoundingClientRect();
            const cursorCenterX = cursorRect.left + cursorRect.width / 2;
            const cursorCenterY = cursorRect.top + cursorRect.height / 2;
            const [tlc, trc, brc, blc] = Array.from(cornersRef.current);
            const { borderWidth, cornerSize, parallaxStrength } = constants;
            let tlOffset = { x: rect.left - cursorCenterX - borderWidth, y: rect.top - cursorCenterY - borderWidth };
            let trOffset = { x: rect.right - cursorCenterX + borderWidth - cornerSize, y: rect.top - cursorCenterY - borderWidth };
            let brOffset = { x: rect.right - cursorCenterX + borderWidth - cornerSize, y: rect.bottom - cursorCenterY + borderWidth - cornerSize };
            let blOffset = { x: rect.left - cursorCenterX - borderWidth, y: rect.bottom - cursorCenterY + borderWidth - cornerSize };
            if (mouseX !== undefined && mouseY !== undefined) {
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const ox = (mouseX - cx) * parallaxStrength;
                const oy = (mouseY - cy) * parallaxStrength;
                tlOffset.x += ox;
                tlOffset.y += oy;
                trOffset.x += ox;
                trOffset.y += oy;
                brOffset.x += ox;
                brOffset.y += oy;
                blOffset.x += ox;
                blOffset.y += oy;
            }
            const tl = gsap.timeline();
            [
                [tlc, tlOffset],
                [trc, trOffset],
                [brc, brOffset],
                [blc, blOffset],
            ].forEach(([corner, off]) => {
                tl.to(corner, { x: off.x, y: off.y, duration: 0.2, ease: "power2.out" }, 0);
            });
        };
        const enterTarget = (target) => {
            activeTargetRef.current = target;
            stopSpin();
            const r = target.getBoundingClientRect();
            const cx = r.left + r.width / 2;
            const cy = r.top + r.height / 2;
            centerRef.current = { x: cx, y: cy };
            gsap.to(cursor, { x: cx, y: cy, duration: snapDuration, ease: "power3.out" });
            updateCorners(target);
            const onTargetMove = (ev) => {
                const { clientX, clientY } = ev;
                updateCorners(target, clientX, clientY);
            };
            const onLeave = () => {
                leaveCurrentTarget();
            };
            target.addEventListener("mousemove", onTargetMove);
            target.addEventListener("mouseleave", onLeave);
            target.__cursorDetach = () => {
                target.removeEventListener("mousemove", onTargetMove);
                target.removeEventListener("mouseleave", onLeave);
            };
            target.__cursorDetach = () => {
                target.removeEventListener("mousemove", onTargetMove);
                target.removeEventListener("mouseleave", onLeave);
            };
        };
        const leaveCurrentTarget = () => {
            const target = activeTargetRef.current;
            if (!target)
                return;
            target.__cursorDetach?.();
            activeTargetRef.current = null;
            resetCorners();
            startSpin();
        };
        const onOver = (e) => {
            const el = e.target;
            let cur = el;
            let match = null;
            while (cur && cur !== document.body) {
                if (cur.matches(targetSelector)) {
                    match = cur;
                    break;
                }
                cur = cur.parentElement;
            }
            if (!match)
                return;
            if (activeTargetRef.current === match)
                return;
            if (activeTargetRef.current)
                leaveCurrentTarget();
            enterTarget(match);
        };
        window.addEventListener("mouseover", onOver, { passive: true });
        const onDown = () => {
            if (!dotRef.current)
                return;
            gsap.to(dotRef.current, { scale: 0.7, duration: 0.2 });
            gsap.to(cursor, { scale: 0.92, duration: 0.15 });
        };
        const onUp = () => {
            if (!dotRef.current)
                return;
            gsap.to(dotRef.current, { scale: 1, duration: 0.2 });
            gsap.to(cursor, { scale: 1, duration: 0.15 });
        };
        window.addEventListener("mousedown", onDown);
        window.addEventListener("mouseup", onUp);
        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseover", onOver);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("mouseup", onUp);
            activeTargetRef.current?.__cursorDetach?.();
            spinTl.current?.kill();
            document.body.style.cursor = originalCursor;
        };
    }, [targetSelector, spinDuration, hideDefaultCursor, snapDuration, tolerancePx, moveCursor, constants]);
    useEffect(() => {
        if (!cursorRef.current)
            return;
    }, [spinDuration]);
    return (_jsxs("div", { ref: cursorRef, className: "fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2", style: { willChange: "transform" }, "aria-hidden": true, children: [_jsx("div", { ref: dotRef, className: "absolute left-1/2 top-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2", style: { willChange: "transform" } }), _jsx("div", { className: "target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white -translate-x-[150%] -translate-y-[150%] border-r-0 border-b-0" }), _jsx("div", { className: "target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white translate-x-1/2 -translate-y-[150%] border-l-0 border-b-0" }), _jsx("div", { className: "target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white translate-x-1/2 translate-y-1/2 border-l-0 border-t-0" }), _jsx("div", { className: "target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white -translate-x-[150%] translate-y-1/2 border-r-0 border-t-0" })] }));
};
export default TargetCursor;

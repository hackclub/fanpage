import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
    Installed from https://reactbits.dev/ts/tailwind/
*/
import { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame, } from "motion/react";
function useElementWidth(ref) {
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
        function updateWidth() {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        }
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [ref]);
    return width;
}
export const ScrollVelocity = ({ scrollContainerRef, texts = [], velocity = 100, className = "", damping = 50, stiffness = 400, numCopies = 6, velocityMapping = { input: [0, 1000], output: [0, 5] }, parallaxClassName, scrollerClassName, parallaxStyle, scrollerStyle, }) => {
    function VelocityText({ children, baseVelocity = velocity, scrollContainerRef, className = "", damping, stiffness, numCopies, velocityMapping, parallaxClassName, scrollerClassName, parallaxStyle, scrollerStyle, }) {
        const baseX = useMotionValue(0);
        const scrollOptions = scrollContainerRef
            ? { container: scrollContainerRef }
            : {};
        const { scrollY } = useScroll(scrollOptions);
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, {
            damping: damping ?? 50,
            stiffness: stiffness ?? 400,
        });
        const velocityFactor = useTransform(smoothVelocity, velocityMapping?.input || [0, 1000], velocityMapping?.output || [0, 5], { clamp: false });
        const copyRef = useRef(null);
        const copyWidth = useElementWidth(copyRef);
        function wrap(min, max, v) {
            const range = max - min;
            const mod = (((v - min) % range) + range) % range;
            return mod + min;
        }
        const x = useTransform(baseX, (v) => {
            if (copyWidth === 0)
                return "0px";
            return `${wrap(-copyWidth, 0, v)}px`;
        });
        const directionFactor = useRef(1);
        useAnimationFrame((t, delta) => {
            let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            }
            else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }
            moveBy += directionFactor.current * moveBy * velocityFactor.get();
            baseX.set(baseX.get() + moveBy);
        });
        const spans = [];
        for (let i = 0; i < numCopies; i++) {
            spans.push(_jsx("span", { className: `flex-shrink-0 ${className}`, ref: i === 0 ? copyRef : null, children: children }, i));
        }
        return (_jsx("div", { className: `${parallaxClassName} relative overflow-hidden`, style: parallaxStyle, children: _jsx(motion.div, { className: `${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]`, style: { x, ...scrollerStyle }, children: spans }) }));
    }
    return (_jsx("section", { children: texts.map((text, index) => (_jsxs(VelocityText, { className: className, baseVelocity: index % 2 !== 0 ? -velocity : velocity, scrollContainerRef: scrollContainerRef, damping: damping, stiffness: stiffness, numCopies: numCopies, velocityMapping: velocityMapping, parallaxClassName: parallaxClassName, scrollerClassName: scrollerClassName, parallaxStyle: parallaxStyle, scrollerStyle: scrollerStyle, children: [text, "\u00A0"] }, index))) }));
};
export default ScrollVelocity;

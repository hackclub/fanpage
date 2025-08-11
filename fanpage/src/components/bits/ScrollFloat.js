import { jsx as _jsx } from "react/jsx-runtime";
/*
    Installed from https://reactbits.dev/ts/tailwind/
*/
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ScrollFloat = ({ children, scrollContainerRef, containerClassName = "", textClassName = "", animationDuration = 1, ease = "back.inOut(2)", scrollStart = "center bottom+=50%", scrollEnd = "bottom bottom-=40%", stagger = 0.03, }) => {
    const containerRef = useRef(null);
    const splitText = useMemo(() => {
        const text = typeof children === "string" ? children : "";
        return text.split("").map((char, index) => (_jsx("span", { className: "inline-block word", children: char === " " ? "\u00A0" : char }, index)));
    }, [children]);
    useEffect(() => {
        const el = containerRef.current;
        if (!el)
            return;
        const scroller = scrollContainerRef && scrollContainerRef.current
            ? scrollContainerRef.current
            : window;
        const charElements = el.querySelectorAll(".inline-block");
        gsap.fromTo(charElements, {
            willChange: "opacity, transform",
            opacity: 0,
            yPercent: 120,
            scaleY: 2.3,
            scaleX: 0.7,
            transformOrigin: "50% 0%",
        }, {
            duration: animationDuration,
            ease: ease,
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger: stagger,
            scrollTrigger: {
                trigger: el,
                scroller,
                start: scrollStart,
                end: scrollEnd,
                scrub: true,
            },
        });
    }, [
        scrollContainerRef,
        animationDuration,
        ease,
        scrollStart,
        scrollEnd,
        stagger,
    ]);
    return (_jsx("h2", { ref: containerRef, className: `my-5 overflow-hidden ${containerClassName}`, children: _jsx("span", { className: `inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`, children: splitText }) }));
};
export default ScrollFloat;

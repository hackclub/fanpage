import Background from "@/components/brand/Background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles,
  ArrowRight,
  Heart,
  Hammer,
  Clock,
  Gift,
  Link as LinkIcon,
  Github,
  ShieldCheck,
} from "lucide-react";
import { JSX } from "react";
import TiltedCard from "@/components/bits/TiltedCard";
import TargetCursor from "@/components/bits/TargetCursor";
import CircularText from "@/components/bits/CircularText";

export default function App(): JSX.Element {
  return (
    <div className="relative min-h-[100svh] w-full overflow-x-clip text-slate-200 flex flex-col">
      <Background />
      <TargetCursor />

      {/* Header */}
      <header
        className="
          relative z-40 px-3 sm:px-10 py-3 sm:py-5 flex items-center justify-between
          max-[500px]:flex-col max-[500px]:items-stretch max-[500px]:gap-[12px] max-[500px]:px-[12px] max-[500px]:py-[12px]
        "
      >
        {/* Brand: stack on mobile, pixel sizes */}
        <div
          className="
            flex items-center gap-2
            max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-[8px]
          "
          data-cursor-snap
        >
          <div className="w-[40px] h-[40px] rounded-md bg-violet-600/90 flex items-center justify-center max-[500px]:w-[44px] max-[500px]:h-[44px]">
            <img
              src="/fanpage-icon.png"
              alt="Fanpage Icon"
              className="w-[28px] h-[28px] invert brightness-0 max-[500px]:w-[32px] max-[500px]:h-[32px]"
            />
          </div>
          <span className="font-semibold tracking-tight text-base sm:text-lg max-[500px]:text-[22px] max-[500px]:leading-[1.1]">
            Fanpage YSWS
          </span>
        </div>

        {/* Nav: larger buttons with explicit pixel sizes, desktop unchanged */}
        <nav
          className="
            flex items-center gap-1 sm:gap-2 w-auto overflow-x-auto overscroll-x-contain scrollbar-none [-ms-overflow-style:'none'] [scrollbar-width:'none']
            max-[500px]:w-full max-[500px]:grid max-[500px]:grid-cols-2 max-[500px]:gap-[12px] max-[500px]:overflow-visible
          "
        >
          <Button
            asChild
            data-cursor-snap
            className="
              bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 text-sm font-bold rounded-xl shrink-0
              max-[500px]:w-full max-[500px]:min-h-[64px] max-[500px]:px-[16px] max-[500px]:py-[16px] max-[500px]:text-[18px] max-[500px]:rounded-[14px]
            "
            aria-label="Submit"
          >
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit
            </a>
          </Button>

          <Button
            variant="ghost"
            asChild
            data-cursor-snap
            className="
              text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 text-sm font-bold rounded-xl shrink-0
              max-[500px]:w-full max-[500px]:min-h-[64px] max-[500px]:px-[16px] max-[500px]:py-[16px] max-[500px]:text-[18px] max-[500px]:rounded-[14px]
            "
          >
            <a href="#how-it-works">How it works</a>
          </Button>

          <Button
            variant="ghost"
            asChild
            data-cursor-snap
            className="
              text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 text-sm font-bold rounded-xl shrink-0
              max-[500px]:w-full max-[500px]:min-h-[64px] max-[500px]:px-[16px] max-[500px]:py-[16px] max-[500px]:text-[18px] max-[500px]:rounded-[14px]
            "
          >
            <a href="#rules">Rules</a>
          </Button>

          <Button
            variant="ghost"
            asChild
            data-cursor-snap
            className="
              text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 text-sm font-bold rounded-xl shrink-0
              max-[500px]:w-full max-[500px]:min-h-[64px] max-[500px]:px-[16px] max-[500px]:py-[16px] max-[500px]:text-[18px] max-[500px]:rounded-[14px]
            "
          >
            <a href="#faq">FAQ</a>
          </Button>
        </nav>
      </header>

      {/* Launch banner */}
      <div
        role="status"
        aria-live="polite"
        className="relative z-40 px-3 sm:px-10 max-[500px]:px-[12px]"
      >
        <div className="mx-auto w-full max-w-5xl mt-2 max-[500px]:mt-[8px]">
          <div
            className="
              rounded-xl border border-amber-400/30 bg-amber-500/10 px-3 py-2 text-amber-200 text-sm flex items-center justify-center gap-2
              max-[500px]:rounded-[12px] max-[500px]:px-[12px] max-[500px]:py-[8px] max-[500px]:text-[16px] max-[500px]:gap-[8px]
            "
          >
            <Clock className="w-[18px] h-[18px] max-[500px]:w-[20px] max-[500px]:h-[20px]" />
            <span>
              Launching Soon! Stay tuned!
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section
        id="top"
        className="
          relative z-30 min-h-[85svh] px-2 sm:px-6 flex items-center
          max-[500px]:min-h-0 max-[500px]:py-[16px]
        "
        aria-labelledby="heroHeading"
      >
        <div className="mx-auto w-full max-w-5xl">
          <div
            className="
              relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur px-3 sm:px-10 py-6 sm:py-14 overflow-hidden
              max-[500px]:rounded-[16px] max-[500px]:px-[12px] max-[500px]:py-[16px]
            "
          >
            <div className="absolute -left-10 -top-10 opacity-70 w-[180px] h-[180px] max-[500px]:w-[160px] max-[500px]:h-[160px]">
              <CircularText
                text="build · love · ship · reward ·"
                spinDuration={30}
                className="w-full h-full text-white/30"
              />
            </div>

            <div className="text-center relative z-10">
              <span
                className="
                  inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300
                  max-[500px]:gap-[8px] max-[500px]:px-[12px] max-[500px]:py-[8px] max-[500px]:text-[14px]
                "
              >
                <Sparkles className="w-[18px] h-[18px]" />
                Ship a project about something you love. Get that very thing.
              </span>

              {/* Heading already stacks on mobile; keep desktop same */}
              <div className="mx-auto w-[85%] sm:w-auto max-[500px]:w-[94%]">
                <h1
                  id="heroHeading"
                  className="mt-8 font-extrabold tracking-tight leading-[1.05] text-white max-[500px]:mt-[16px]"
                >
                  <span
                    className="block sm:inline bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text supports-[background-clip:text]:text-transparent drop-shadow-[0_6px_24px_rgba(56,189,248,0.25)] text-[12vw] sm:text-7xl"
                    data-cursor-snap
                  >
                    Love It.
                  </span>
                  <span
                    className="block sm:inline bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text supports-[background-clip:text]:text-transparent drop-shadow-[0_6px_24px_rgba(56,189,248,0.25)] text-[12vw] sm:text-7xl"
                    data-cursor-snap
                  >
                    {" "}Build It.
                  </span>
                  <span
                    className="block sm:inline bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text supports-[background-clip:text]:text-transparent drop-shadow-[0_6px_24px_rgba(56,189,248,0.25)] text-[12vw] sm:text-7xl"
                    data-cursor-snap
                  >
                    {" "}Get It.
                  </span>
                </h1>
              </div>

              <p className="mt-6 text-base sm:text-lg text-gray-200/90 max-w-3xl mx-auto px-2 max-[500px]:mt-[16px] max-[500px]:text-[18px]">
                Launching Soon!
              </p>

              {/* Hero CTAs with explicit pixel sizes on mobile */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-[500px]:mt-[16px] max-[500px]:gap-[12px]">
                <Button
                  size="lg"
                  asChild
                  data-cursor-snap
                  className="
                    w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/25 px-7 py-6 text-xl sm:text-base sm:py-4 font-semibold rounded-2xl
                    max-[500px]:min-h-[68px] max-[500px]:px-[18px] max-[500px]:py-[18px] max-[500px]:text-[20px] max-[500px]:rounded-[16px]
                  "
                  aria-label="Get Started"
                >
                  <a href="#how-it-works">
                    Get Started
                    <ArrowRight className="ml-3 w-[22px] h-[22px] inline-block max-[500px]:ml-[10px]" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  data-cursor-snap
                  className="
                    w-full sm:w-auto border-violet-500/60 text-violet-100 hover:bg-violet-500/10 px-7 py-6 text-xl sm:text-base sm:py-4 font-semibold rounded-2xl
                    max-[500px]:min-h-[68px] max-[500px]:px-[18px] max-[500px]:py-[18px] max-[500px]:text-[20px] max-[500px]:rounded-[16px]
                  "
                  aria-label="Learn More"
                >
                  <a href="#rules">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main (unchanged aside from existing responsive tweaks) */}
      <main className="relative z-40 flex-1 px-2 sm:px-10 pb-16 pt-12 max-[500px]:pt-[20px] max-[500px]:pb-[28px]">
        {/* How it works — 1x4 until lg, then 2x2 */}
        <section
          id="how-it-works"
          aria-labelledby="howItWorksHeading"
          className="mx-auto w-full max-w-6xl scroll-mt-24 py-12 max-[500px]:py-[20px]"
        >
          <h2
            id="howItWorksHeading"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center max-[500px]:text-[24px]"
          >
            How it works
          </h2>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 max-[500px]:mt-[16px] max-[500px]:gap-[12px]">
            <TiltedCard className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur p-6 md:p-8 max-[500px]:rounded-[16px] max-[500px]:p-[16px]" data-cursor-snap>
              <CardHeader className="space-y-3 p-0">
                <CardTitle className="flex items-center gap-3 text-white text-2xl md:text-3xl max-[500px]:text-[20px]">
                  <Heart className="w-[24px] h-[24px] text-pink-400" /> 1) Love something
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 p-0 text-base md:text-lg text-gray-300 max-[500px]:text-[16px]">
                Pick a snack, game, hobby—anything you’re into. Then think about what <i>you</i> can create as a tribute to that thing.
              </CardContent>
            </TiltedCard>

            <TiltedCard className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur p-6 md:p-8 max-[500px]:rounded-[16px] max-[500px]:p-[16px]" data-cursor-snap>
              <CardHeader className="space-y-3 p-0">
                <CardTitle className="flex items-center gap-3 text-white text-2xl md:text-3xl max-[500px]:text-[20px]">
                  <Hammer className="w-[24px] h-[24px] text-violet-300" /> 2) Build something
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 p-0 text-base md:text-lg text-gray-300 max-[500px]:text-[16px]">
                Ship a project that celebrates that thing. A website, app, game, etc. However the AI usage should be less than 30%, there should be a functioning demo, and a public Github repository of the source code of your project.
              </CardContent>
            </TiltedCard>

            <TiltedCard className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur p-6 md:p-8 max-[500px]:rounded-[16px] max-[500px]:p-[16px]" data-cursor-snap>
              <CardHeader className="space-y-3 p-0">
                <CardTitle className="flex items-center gap-3 text-white text-2xl md:text-3xl max-[500px]:text-[20px]">
                  <Clock className="w-[24px] h-[24px] text-cyan-300" /> 3) Track your time
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 p-0 text-base md:text-lg text-gray-300 max-[500px]:text-[16px]">
                Track with{" "}
                <a className="underline decoration-dotted" href="https://hackatime.hackclub.com/" target="_blank" rel="noreferrer">
                  Hackatime
                </a>. Please do not try to fabricate or bot the amount of hours you log. We don't like to ban people.
              </CardContent>
            </TiltedCard>

            <TiltedCard className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur p-6 md:p-8 max-[500px]:rounded-[16px] max-[500px]:p-[16px]" data-cursor-snap>
              <CardHeader className="space-y-3 p-0">
                <CardTitle className="flex items-center gap-3 text-white text-2xl md:text-3xl max-[500px]:text-[20px]">
                  <Gift className="w-[24px] h-[24px] text-emerald-300" /> 4) Get your reward
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 p-0 text-base md:text-lg text-gray-300 max-[500px]:text-[16px]">
                Ship your project, and wait for it to be reviewed. If it meets the bar, you’ll get that very thing you built about.
              </CardContent>
            </TiltedCard>
          </div>
        </section>

        {/* Rules — 1x4 until lg, then 2x2 */}
        <section
          id="rules"
          aria-labelledby="rulesHeading"
          className="mx-auto w-full max-w-6xl scroll-mt-24 py-12 max-[500px]:py-[20px]"
        >
          <h2
            id="rulesHeading"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center max-[500px]:text-[24px]"
          >
            Rules
          </h2>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 max-[500px]:mt-[16px] max-[500px]:gap-[12px]">
            <Card className="border-white/10 bg-white/[0.04] backdrop-blur max-[500px]:rounded-[16px]" data-cursor-snap>
              <CardHeader className="space-y-1.5">
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl max-[500px]:text-[20px]">
                  <ShieldCheck className="w-[22px] h-[22px] text-emerald-300" /> Finished & Public
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-gray-200/90 space-y-2 max-[500px]:text-[16px]">
                <p>Ship a <strong>finished</strong> project with a working link and a <strong>public GitHub repo</strong>.</p>
                <p className="inline-flex items-center gap-2">
                  <Github className="w-[20px] h-[20px]" /> README (setup/usage) + license.
                </p>
                <p className="inline-flex items-center gap-2">
                  <LinkIcon className="w-[20px] h-[20px]" /> Demo link (ex. site) must load.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/[0.04] backdrop-blur max-[500px]:rounded-[16px]" data-cursor-snap>
              <CardHeader className="space-y-1.5">
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl max-[500px]:text-[20px]">
                  <Clock className="w-[22px] h-[22px] text-cyan-300" /> Honest Hackatime
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-gray-200/90 space-y-2 max-[500px]:text-[16px]">
                <p>Track coding time with{" "}
                  <a className="underline decoration-dotted" href="https://hackatime.hackclub.com/" target="_blank" rel="noreferrer">Hackatime</a>.
                </p>
                <p>No fraud: no fabricated heartbeats.</p>
                <p>A Maximum of 50 hours for a 200 dollar prize</p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/[0.04] backdrop-blur max-[500px]:rounded-[16px]" data-cursor-snap>
              <CardHeader className="space-y-1.5">
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl max-[500px]:text-[20px]">
                  <Hammer className="w-[22px] h-[22px] text-violet-300" /> No vibecoding-only
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-gray-200/90 space-y-2 max-[500px]:text-[16px]">
                <p>AI assist is okay, but <strong>not AI-only</strong>. Show your work via commits, notes, and spend time on your README.</p>
                <p>Attribute open-source & third-party assets properly.</p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/[0.04] backdrop-blur max-[500px]:rounded-[16px]" data-cursor-snap>
              <CardHeader className="space-y-1.5">
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl max-[500px]:text-[20px]">
                  <Heart className="w-[22px] h-[22px] text-pink-400" /> Scope & Time
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-gray-200/90 space-y-2 max-[500px]:text-[16px]">
                <p>Not “tiny” or “one week only”—you’ve got time. Still, keep scope coherent enough to <strong>finish</strong> and demo.</p>
                <p>Make sure it follows hackclub's COC: Friendly, legal, and safe-for-kids. You also need to be 18 or younger.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          aria-labelledby="faqHeading"
          className="mx-auto w-full max-w-none sm:max-w-4xl scroll-mt-24 py-12 max-[500px]:py-[20px]"
        >
          <h2
            id="faqHeading"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center max-[500px]:text-[24px]"
          >
            FAQ
          </h2>

          <Accordion
            type="single"
            collapsible
            className="
              mt-6 w-full bg-white/[0.04] backdrop-blur rounded-none sm:rounded-xl border-y border-y-white/10 sm:border sm:border-white/10
              max-[500px]:mt-[16px]
            "
          >
            <AccordionItem value="q1" className="px-4 max-[500px]:px-[12px]">
              <AccordionTrigger className="text-left max-[500px]:text-[18px] max-[500px]:py-[14px]">
                What counts as “finished”?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200/90 max-[500px]:text-[16px]">
                A working build + public repo + README with setup/usage + live demo link. Interactive projects should be tryable without digging.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="px-4 max-[500px]:px-[12px]">
              <AccordionTrigger className="text-left max-[500px]:text-[18px] max-[500px]:py-[14px]">
                How do I set up Hackatime?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200/90 max-[500px]:text-[16px]">
                Create an account, install a WakaTime plugin for your editor, and sign in. Hackatime reads heartbeats to show your coding time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="px-4 max-[500px]:px-[12px]">
              <AccordionTrigger className="text-left max-[500px]:text-[18px] max-[500px]:py-[14px]">
                Can I use AI tools?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200/90 max-[500px]:text-[16px]">
                Yes—as an assistant. Not AI-only. Keep meaningful personal work and attribute any generated assets when relevant.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="px-4 max-[500px]:px-[12px]">
              <AccordionTrigger className="text-left max-[500px]:text-[18px] max-[500px]:py-[14px]">
                What links must I submit?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200/90 space-y-2 max-[500px]:text-[16px]">
                <ul className="list-disc list-inside space-y-1">
                  <li>Working demo link (site/video/app)</li>
                  <li>Public GitHub repo</li>
                  <li>Your hackatime project</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="px-4 max-[500px]:px-[12px]">
              <AccordionTrigger className="text-left max-[500px]:text-[18px] max-[500px]:py-[14px]">
                Are there content restrictions?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200/90 max-[500px]:text-[16px]">
                Keep it respectful and obeying Hack Club's COC. Attribute third-party assets/code.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6" className="px-4 max-[500px]:px-[12px]">
              <AccordionTrigger className="text-left max-[500px]:text-[18px] max-[500px]:py-[14px]">
                Do I have to use Hackatime?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200/90 space-y-2 max-[500px]:text-[16px]">
                <ul className="list-disc list-inside space-y-1">
                  <li>Yes, it is crucial you use hackatime.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7" className="px-4 max-[500px]:px-[12px]">
              <AccordionTrigger className="text-left max-[500px]:text-[18px] max-[500px]:py-[14px]">
                Can I connect with others?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200/90 space-y-2 max-[500px]:text-[16px]">
                <ul className="list-disc list-inside space-y-1">
                  <li>Join the Hackclub Slack to connect.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8" className="px-4 max-[500px]:px-[12px]">
              <AccordionTrigger className="text-left max-[500px]:text-[18px] max-[500px]:py-[14px]">
                When does this launch?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200/90 space-y-2 max-[500px]:text-[16px]">
                <ul className="list-disc list-inside space-y-1">
                  <li>Hang tight! We'll announce the launch date soon.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      <footer className="relative z-40 px-2 sm:px-10 py-4 sm:py-6 text-center text-xs text-gray-400 max-[500px]:py-[14px] max-[500px]:text-[12px]">
        © {new Date().getFullYear()} Fanpage YSWS 😀
      </footer>
    </div>
  );
}

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
      <header className="relative z-40 px-3 sm:px-10 py-3 sm:py-5 flex items-center justify-between">
        <div className="flex items-center gap-2" data-cursor-snap>
          <div className="w-8 h-8 rounded-md bg-violet-600/90 flex items-center justify-center">
            <img src="/fanpage-icon.png" alt="Fanpage Icon" className="w-6 h-6 invert brightness-0" />
          </div>
          <span className="font-semibold tracking-tight">Fanpage YSWS</span>
        </div>

        <nav
          className="flex flex-wrap items-center gap-1 sm:gap-2 w-auto overflow-visible"
        >
          <Button
            asChild
            data-cursor-snap
            className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 text-sm font-bold rounded-xl"
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
            className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 text-sm font-bold rounded-xl"
          >
            <a href="#how-it-works">How it works</a>
          </Button>

          <Button
            variant="ghost"
            asChild
            data-cursor-snap
            className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 text-sm font-bold rounded-xl"
          >
            <a href="#rules">Rules</a>
          </Button>

          <Button
            variant="ghost"
            asChild
            data-cursor-snap
            className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 text-sm font-bold rounded-xl"
          >
            <a href="#faq">FAQ</a>
          </Button>
        </nav>
      </header>


      <div role="status" aria-live="polite" className="relative z-40 px-3 sm:px-10">
        <div className="mx-auto w-full max-w-5xl mt-2">
          <div className="rounded-xl border border-amber-400/30 bg-amber-500/10 px-3 py-2 text-amber-200 text-sm flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Heads up: Launching on <strong>Sep 1st</strong>!</span>
          </div>
        </div>
      </div>

      <section id="top" className="relative z-30 h-[85svh] px-2 sm:px-6 flex items-center" aria-labelledby="heroHeading">
        <div className="mx-auto w-full max-w-5xl">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur px-3 sm:px-10 py-6 sm:py-14 overflow-hidden">
            <div className="absolute -left-10 -top-10 opacity-70 w-[180px] h-[180px]">
              <CircularText
                text="build · love · ship · reward ·"
                spinDuration={30}
                className="w-full h-full text-white/30"
              />
            </div>

            <div className="text-center relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                <Sparkles className="w-3.5 h-3.5 text-violet-300" />
                Ship a project about something you love. Get that very thing.
              </span>

              <h1 id="heroHeading" className="mt-8 font-extrabold tracking-tight leading-[1.06] text-white">
                <span className="block sm:inline bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text supports-[background-clip:text]:text-transparent drop-shadow-[0_6px_24px_rgba(56,189,248,0.25)] text-6xl sm:text-7xl" data-cursor-snap>
                  Love It.
                </span>
                <span className="block sm:inline bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text supports-[background-clip:text]:text-transparent drop-shadow-[0_6px_24px_rgba(56,189,248,0.25)] text-6xl sm:text-7xl" data-cursor-snap>
                  {" "}Build It.
                </span>
                <span className="block sm:inline bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text supports-[background-clip:text]:text-transparent drop-shadow-[0_6px_24px_rgba(56,189,248,0.25)] text-6xl sm:text-7xl" data-cursor-snap>
                  {" "}Get It.
                </span>
              </h1>

              <p className="mt-7 text-sm sm:text-lg text-gray-200/90 max-w-3xl mx-auto px-2">Launching Sep 1st!</p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <Button size="lg" asChild data-cursor-snap className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/20 px-6 py-4 text-lg font-bold" aria-label="Get Started">
                  <a href="#how-it-works">Get Started<ArrowRight className="ml-3 w-5 h-5" /></a>
                </Button>
                <Button size="lg" variant="outline" asChild data-cursor-snap className="w-full sm:w-auto border-violet-500/60 text-violet-100 hover:bg-violet-500/10 px-6 py-4 text-lg font-bold" aria-label="Learn More">
                  <a href="#rules">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <main className="relative z-40 flex-1 px-2 sm:px-10 pb-16 pt-12">

        <section id="how-it-works" aria-labelledby="howItWorksHeading" className="mx-auto w-full max-w-6xl scroll-mt-24 py-12">
          <h2 id="howItWorksHeading" className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center">How it works</h2>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TiltedCard className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur p-6 md:p-8" data-cursor-snap>
              <CardHeader className="space-y-3 p-0">
                <CardTitle className="flex items-center gap-3 text-white text-2xl md:text-3xl">
                  <Heart className="w-6 h-6 text-pink-400" />
                  1) Love something
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 p-0 text-base md:text-lg text-gray-300">
                Pick a snack, game, hobby—anything you’re into. Then think about what <i>you</i> can create as a tribute to that thing.
              </CardContent>
            </TiltedCard>

            <TiltedCard className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur p-6 md:p-8" data-cursor-snap>
              <CardHeader className="space-y-3 p-0">
                <CardTitle className="flex items-center gap-3 text-white text-2xl md:text-3xl">
                  <Hammer className="w-6 h-6 text-violet-300" />
                  2) Build something
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 p-0 text-base md:text-lg text-gray-300">
                Ship a polished project (page, prototype, script, video, NO AI SLOP). <span className="whitespace-nowrap">Finished &gt; perfect.</span>
              </CardContent>
            </TiltedCard>

            <TiltedCard className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur p-6 md:p-8" data-cursor-snap>
              <CardHeader className="space-y-3 p-0">
                <CardTitle className="flex items-center gap-3 text-white text-2xl md:text-3xl">
                  <Clock className="w-6 h-6 text-cyan-300" />
                  3) Track your time
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 p-0 text-base md:text-lg text-gray-300">
                Track with{" "}
                <a className="underline decoration-dotted" href="https://hackatime.hackclub.com/" target="_blank" rel="noreferrer">
                  Hackatime
                </a>. Please do not try to fabricate or bot the amount of hours you log. We don't like to ban people. 
              </CardContent>
            </TiltedCard>

            <TiltedCard className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur p-6 md:p-8" data-cursor-snap>
              <CardHeader className="space-y-3 p-0">
                <CardTitle className="flex items-center gap-3 text-white text-2xl md:text-3xl">
                  <Gift className="w-6 h-6 text-emerald-300" />
                  4) Get your reward
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 p-0 text-base md:text-lg text-gray-300">
                Ship your project, and wait for it to be reviewed. If it meets the bar, you’ll get that very thing you built about.
              </CardContent>
            </TiltedCard>
          </div>
        </section>


        <section id="rules" aria-labelledby="rulesHeading" className="mx-auto w-full max-w-6xl scroll-mt-24 py-12">
          <h2 id="rulesHeading" className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center">Rules</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-white/10 bg-white/[0.04] backdrop-blur p-6" data-cursor-snap>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
                Finished & Public
              </CardTitle>
              <CardContent className="pt-3 text-gray-200/90 space-y-2">
                <p>Ship a <strong>finished</strong> project with a working link and a <strong>public GitHub repo</strong>.</p>
                <p className="inline-flex items-center gap-2"><Github className="w-4 h-4" /> README (setup/usage) + license.</p>
                <p className="inline-flex items-center gap-2"><LinkIcon className="w-4 h-4" /> Demo link (site/video/hosted build) must load.</p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/[0.04] backdrop-blur p-6" data-cursor-snap>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-300" />
                Honest Hackatime
              </CardTitle>
              <CardContent className="pt-3 text-gray-200/90 space-y-2">
                <p>Track coding time with{" "}
                  <a className="underline decoration-dotted" href="https://hackatime.hackclub.com/" target="_blank" rel="noreferrer">
                    Hackatime
                  </a>.
                </p>
                <p>No fraud: no fabricated heartbeats.</p>
                <p>A Maximum of 50 hours for a 200 dollar prize</p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/[0.04] backdrop-blur p-6" data-cursor-snap>
              <CardTitle className="flex items-center gap-2">
                <Hammer className="w-5 h-5 text-violet-300" />
                No vibecoding-only
              </CardTitle>
              <CardContent className="pt-3 text-gray-200/90 space-y-2">
                <p>AI assist is okay, but <strong>not AI-only</strong>. Show your work via commits, notes, and spend time on your README.</p>
                <p>Attribute open-source & third-party assets properly.</p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/[0.04] backdrop-blur p-6" data-cursor-snap>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" />
                Scope & Time
              </CardTitle>
              <CardContent className="pt-3 text-gray-200/90 space-y-2">
                <p>Not “tiny” or “one week only”—you’ve got time. Still, keep scope coherent enough to <strong>finish</strong> and demo.</p>
                <p>Make sure it follows hackclub's COC: Friendly, legal, and safe-for-kids.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faqHeading" className="mx-auto w-full max-w-4xl scroll-mt-24 py-12">
          <h2 id="faqHeading" className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center">FAQ</h2>

          <Accordion type="single" collapsible className="mt-6 bg-white/[0.04] backdrop-blur rounded-xl border border-white/10">
            <AccordionItem value="q1" className="px-4">
              <AccordionTrigger className="text-left">What counts as “finished”?</AccordionTrigger>
              <AccordionContent className="text-gray-200/90">
                A working build + public repo + README with setup/usage + live demo link. Interactive projects should be tryable without digging.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="px-4">
              <AccordionTrigger className="text-left">How do I set up Hackatime?</AccordionTrigger>
              <AccordionContent className="text-gray-200/90">
                Create an account, install a WakaTime plugin for your editor, and sign in. Hackatime reads heartbeats to show your coding time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="px-4">
              <AccordionTrigger className="text-left">Can I use AI tools?</AccordionTrigger>
              <AccordionContent className="text-gray-200/90">
                Yes—as an assistant. Not AI-only. Keep meaningful personal work and attribute any generated assets when relevant. For example if you are using Github Copilot it should be the <em>copilot <b>not</b> the pilot.</em>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="px-4">
              <AccordionTrigger className="text-left">What links must I submit?</AccordionTrigger>
              <AccordionContent className="text-gray-200/90 space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>Working demo link (site/video/app)</li>
                  <li>Public GitHub repo</li>
                  <li>Your hackatime project</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="px-4">
              <AccordionTrigger className="text-left">Are there content restrictions?</AccordionTrigger>
              <AccordionContent className="text-gray-200/90">
                Keep it respectful and obeying Hack Club's COC. Attribute third-party assets/code.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6" className="px-4">
              <AccordionTrigger className="text-left">Do I have to use Hackatime?</AccordionTrigger>
              <AccordionContent className="text-gray-200/90 space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>Yes, it is crucial you use hackatime.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q7" className="px-4">
              <AccordionTrigger className="text-left">Can I connect with the people participating in this event?</AccordionTrigger>
              <AccordionContent className="text-gray-200/90 space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>Yes it is recommended to join the {" "}
                  <a className="underline decoration-dotted" href="https://app.slack.com/client/T0266FRGM/C09A37XECJV" target="_blank" rel="noreferrer">
                    Hackclub Slack!
                  </a></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8" className="px-4">
              <AccordionTrigger className="text-left">When does this launch?</AccordionTrigger>
              <AccordionContent className="text-gray-200/90 space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>Sep 1st, 2025!</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </section>
      </main>

      <footer className="relative z-40 px-2 sm:px-10 py-4 sm:py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Fanpage YSWS 😀
      </footer>
    </div>
  );
}

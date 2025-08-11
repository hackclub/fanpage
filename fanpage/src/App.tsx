import Background from "@/components/brand/Background";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function App(): JSX.Element {
  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden text-slate-200 flex flex-col">
      <Background />

      <header className="relative z-40 px-3 sm:px-10 py-3 sm:py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-violet-600/90 flex items-center justify-center">
            <img
              src="/fanpage-icon.png"
              alt="Fanpage Icon"
              className="w-6 h-6 invert brightness-0"
            />
          </div>
          <span className="font-semibold tracking-tight">Fanpage YSWS</span>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2 w-auto overflow-x-auto max-w-[70vw] sm:max-w-none">
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap"
          >
            Rules
          </Button>
          <Button
            className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap"
          >
            Get started
          </Button>
        </nav>
      </header>

      <main className="relative z-40 flex-1 px-2 sm:px-10 flex items-center">
        <section className="mx-auto w-full max-w-5xl">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur px-3 sm:px-10 py-6 sm:py-14">
            <div className="text-center">
              <span className="inline-flex items-center gap-1 sm:gap-2 rounded-full border border-white/10 bg-white/5 px-2 sm:px-3 py-1 text-xs text-gray-300">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-violet-300" />
                Ship a project about something you love. Get that very thing.
              </span>
              <h1 className="mt-8 font-bold tracking-tight leading-[1.15]">
                <span className="block sm:inline bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent text-6xl sm:text-6xl">
                  Love It.
                </span>
                <span className="block sm:inline bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent text-6xl sm:text-6xl">
                  Build It.
                </span>
                <span className="block sm:inline bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent text-6xl sm:text-6xl">
                  Get It.
                </span>
              </h1>
              <p className="mt-6 sm:mt-5 text-sm sm:text-lg text-gray-200/90 max-w-3xl mx-auto px-2">
                Pick a snack, game, or hobby you adore. Ship a project about it. When you’re done,
                we ship you that very thing as a reward.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/20 px-6 py-4 text-lg sm:text-lg font-bold"
                  aria-label="Rules"
                >
                  Get Started
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-violet-500/60 text-violet-100 hover:bg-violet-500/10 px-6 py-4 text-lg sm:text-lg font-bold"
                  aria-label="View Profile"
                >
                  More Info
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-40 px-2 sm:px-10 py-4 sm:py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Fanpage YSWS 😀
      </footer>
    </div>
  );
}

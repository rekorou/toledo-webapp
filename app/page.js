"use client";

import { useMemo, useState } from "react";

const CodeBlock = ({ title, code, lang = "html" }) => {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore (clipboard may be blocked in some browsers)
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 overflow-hidden shadow-xl">
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-slate-950">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-red-400" />
          <span className="inline-flex h-2 w-2 rounded-full bg-yellow-400" />
          <span className="inline-flex h-2 w-2 rounded-full bg-green-400" />
          <p className="ml-2 text-sm text-slate-200 font-medium">
            {title} <span className="text-slate-400 font-normal">({lang})</span>
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="rounded-xl px-3 py-1.5 text-sm font-medium bg-white/10 text-white hover:bg-white/15 transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre className="p-4 overflow-x-auto text-sm leading-relaxed text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const Callout = ({ icon, title, children, variant = "info" }) => {
  const styles = {
    info: "border-cyan-400/30 bg-cyan-500/10 text-cyan-50",
    tip: "border-emerald-400/30 bg-emerald-500/10 text-emerald-50",
    warn: "border-amber-400/30 bg-amber-500/10 text-amber-50",
  };

  return (
    <div className={`rounded-2xl border p-4 ${styles[variant]}`}>
      <div className="flex items-start gap-3">
        <div className="text-xl leading-none">{icon}</div>
        <div>
          <p className="font-semibold">{title}</p>
          <div className="mt-1 text-sm opacity-90">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const sections = useMemo(
    () => [
      { id: "what-is", label: "What is Tailwind?" },
      { id: "setup", label: "1) Install & Setup" },
      { id: "utility", label: "2) Utility-First Styling" },
      { id: "responsive", label: "3) Responsive Design" },
      { id: "states", label: "4) Hover, Focus, Dark Mode" },
      { id: "layout", label: "5) Layout Patterns" },
      { id: "tips", label: "Common Tips" },
      { id: "practice", label: "Mini Practice" },
    ],
    []
  );

  const [activeId, setActiveId] = useState(sections[0]?.id);

  const installCode = `# If you're using Next.js (recommended)
npx create-next-app@latest my-app --tailwind
cd my-app
npm run dev

# If Tailwind is missing in an existing project:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`;

  const configCode = `// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`;

  const globalsCode = `/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`;

  const utilityCode = `<div class="p-6 rounded-2xl bg-white shadow">
  <h1 class="text-2xl font-bold text-slate-900">Hello Tailwind</h1>
  <p class="mt-2 text-slate-600">
    Tailwind styles with utility classes. No custom CSS needed.
  </p>
  <button class="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">
    Click me
  </button>
</div>`;

  const responsiveCode = `<div class="p-4 sm:p-6 lg:p-10 bg-slate-100 rounded-2xl">
  <p class="text-base sm:text-lg lg:text-xl">
    This text gets bigger on larger screens.
  </p>
</div>`;

  const stateCode = `<button class="px-4 py-2 rounded-xl bg-indigo-600 text-white
  hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300
  dark:bg-indigo-500 dark:hover:bg-indigo-400">
  Hover / Focus / Dark
</button>`;

  const layoutCode = `<div class="grid gap-4 md:grid-cols-3">
  <div class="p-4 rounded-2xl bg-white shadow">Card 1</div>
  <div class="p-4 rounded-2xl bg-white shadow">Card 2</div>
  <div class="p-4 rounded-2xl bg-white shadow">Card 3</div>
</div>`;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Top Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/25 via-indigo-500/20 to-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Tutorial Blog • Tailwind CSS
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                How to Use Tailwind CSS
              </h1>
              <p className="mt-3 max-w-2xl text-white/70">
                A simple, student-friendly guide to Tailwind CSS: setup, utility
                classes, responsive design, hover/focus states, and clean layout
                patterns—with examples you can copy.
              </p>
            </div>

            <div className="flex gap-2">
              <a
                href="#setup"
                className="rounded-2xl bg-white text-slate-950 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition"
              >
                Start Tutorial
              </a>
              <a
                href="#practice"
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
              >
                Mini Practice
              </a>
            </div>
          </div>

          {/* Author-ish line */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/60">
            <span className="inline-flex items-center gap-2">
              <span className="h-8 w-8 rounded-2xl bg-white/10 grid place-items-center">
                ✍️
              </span>
              Written like a blog tutorial page
            </span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Tailwind + Next.js</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Examples included</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Article */}
          <article className="space-y-10">
            {/* What is Tailwind */}
            <section
              id="what-is"
              className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-6"
              onMouseEnter={() => setActiveId("what-is")}
            >
              <h2 className="text-2xl font-bold">What is Tailwind CSS?</h2>
              <p className="mt-3 text-white/75 leading-relaxed">
                Tailwind CSS is a <span className="font-semibold">utility-first</span>{" "}
                CSS framework. Instead of writing lots of custom CSS files, you
                style elements using small classes like{" "}
                <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm">
                  p-4
                </span>{" "}
                (padding),{" "}
                <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm">
                  text-xl
                </span>{" "}
                (font size), and{" "}
                <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm">
                  rounded-2xl
                </span>{" "}
                (border radius).
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Callout icon="⚡" title="Why people like it" variant="tip">
                  Faster styling, consistent design system, less CSS file chaos.
                </Callout>
                <Callout icon="🧠" title="How to think about it" variant="info">
                  Combine small “Lego” classes to build a full UI.
                </Callout>
              </div>
            </section>

            {/* Setup */}
            <section
              id="setup"
              className="scroll-mt-24 space-y-4"
              onMouseEnter={() => setActiveId("setup")}
            >
              <h2 className="text-2xl font-bold">1) Install & Setup</h2>
              <p className="text-white/75 leading-relaxed">
                If you created a Next.js project with Tailwind, you’re already good.
                If not, these are the usual steps: install packages, configure
                Tailwind paths, and add Tailwind directives to your global CSS.
              </p>

              <CodeBlock title="Install Tailwind" code={installCode} lang="bash" />
              <CodeBlock title="Configure content paths" code={configCode} lang="js" />
              <CodeBlock title="Enable Tailwind in globals.css" code={globalsCode} lang="css" />

              <Callout icon="✅" title="Quick check" variant="tip">
                Run your dev server and add something obvious like{" "}
                <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm">
                  text-red-500
                </span>{" "}
                to verify Tailwind is working.
              </Callout>
            </section>

            {/* Utility first */}
            <section
              id="utility"
              className="scroll-mt-24 space-y-4"
              onMouseEnter={() => setActiveId("utility")}
            >
              <h2 className="text-2xl font-bold">2) Utility-First Styling</h2>
              <p className="text-white/75 leading-relaxed">
                The idea is simple: you style directly in your JSX/HTML using
                classes. Tailwind class names are predictable: spacing (
                <span className="font-mono">p-</span>, <span className="font-mono">m-</span>),
                text (<span className="font-mono">text-</span>), colors (
                <span className="font-mono">bg-</span>), etc.
              </p>

              <CodeBlock title="Basic Tailwind UI block" code={utilityCode} lang="html" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-white/60">Preview (Tailwind-styled sample)</p>
                <div className="mt-4 rounded-2xl bg-white p-6 text-slate-900 shadow-xl">
                  <h3 className="text-2xl font-bold">Hello Tailwind</h3>
                  <p className="mt-2 text-slate-600">
                    Tailwind styles with utility classes. No custom CSS needed.
                  </p>
                  <button className="mt-4 rounded-xl bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition">
                    Click me
                  </button>
                </div>
              </div>
            </section>

            {/* Responsive */}
            <section
              id="responsive"
              className="scroll-mt-24 space-y-4"
              onMouseEnter={() => setActiveId("responsive")}
            >
              <h2 className="text-2xl font-bold">3) Responsive Design (Mobile → Desktop)</h2>
              <p className="text-white/75 leading-relaxed">
                Tailwind uses breakpoint prefixes like{" "}
                <span className="font-mono">sm:</span>, <span className="font-mono">md:</span>,{" "}
                <span className="font-mono">lg:</span>. The base classes apply to
                mobile first, then you override for larger screens.
              </p>

              <CodeBlock title="Responsive padding + text size" code={responsiveCode} lang="html" />

              <Callout icon="📱" title="Tip: mobile-first mindset" variant="info">
                Start with simple styles for small screens, then add{" "}
                <span className="font-mono">md:</span> / <span className="font-mono">lg:</span>{" "}
                upgrades.
              </Callout>
            </section>

            {/* States */}
            <section
              id="states"
              className="scroll-mt-24 space-y-4"
              onMouseEnter={() => setActiveId("states")}
            >
              <h2 className="text-2xl font-bold">4) Hover, Focus, and Dark Mode</h2>
              <p className="text-white/75 leading-relaxed">
                You can style interactions with prefixes like{" "}
                <span className="font-mono">hover:</span> and{" "}
                <span className="font-mono">focus:</span>. Dark mode is usually{" "}
                <span className="font-mono">dark:</span> (depending on your config).
              </p>

              <CodeBlock title="Button states example" code={stateCode} lang="html" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-white/60">Try hovering / focusing this</p>
                <button className="mt-3 rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition">
                  Hover / Focus
                </button>
              </div>
            </section>

            {/* Layout */}
            <section
              id="layout"
              className="scroll-mt-24 space-y-4"
              onMouseEnter={() => setActiveId("layout")}
            >
              <h2 className="text-2xl font-bold">5) Layout Patterns (Flex & Grid)</h2>
              <p className="text-white/75 leading-relaxed">
                Most layouts become easier using{" "}
                <span className="font-mono">flex</span> and{" "}
                <span className="font-mono">grid</span>. Example: a simple 3-card
                grid on desktop that stacks on mobile.
              </p>

              <CodeBlock title="Grid layout example" code={layoutCode} lang="html" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {["Card 1", "Card 2", "Card 3"].map((t) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="font-semibold">{t}</p>
                      <p className="mt-1 text-sm text-white/70">
                        This uses <span className="font-mono">md:grid-cols-3</span>.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Tips */}
            <section
              id="tips"
              className="scroll-mt-24 space-y-4"
              onMouseEnter={() => setActiveId("tips")}
            >
              <h2 className="text-2xl font-bold">Common Tips (So You Don’t Get Stuck)</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <Callout icon="🧩" title="Use spacing consistently" variant="tip">
                  Stick to a spacing rhythm like <span className="font-mono">gap-4</span>,{" "}
                  <span className="font-mono">p-6</span>, <span className="font-mono">mt-4</span>.
                </Callout>

                <Callout icon="🎯" title="Don’t over-style too early" variant="info">
                  Make it work first, then make it pretty. Tailwind makes iteration fast.
                </Callout>

                <Callout icon="🧼" title="Avoid messy class strings" variant="warn">
                  If classes get too long, you can extract components (like this page does).
                </Callout>

                <Callout icon="🔎" title="Use DevTools" variant="info">
                  Inspect elements and toggle Tailwind classes quickly to see changes.
                </Callout>
              </div>
            </section>

            {/* Practice */}
            <section
              id="practice"
              className="scroll-mt-24 space-y-4"
              onMouseEnter={() => setActiveId("practice")}
            >
              <h2 className="text-2xl font-bold">Mini Practice (Try This)</h2>
              <p className="text-white/75 leading-relaxed">
                Make a “Profile Card” using only utility classes:
              </p>

              <ol className="list-decimal pl-6 text-white/75 space-y-2">
                <li>Create a card with <span className="font-mono">rounded-2xl</span> and <span className="font-mono">shadow</span>.</li>
                <li>Add an avatar circle using <span className="font-mono">h-14 w-14 rounded-full</span>.</li>
                <li>Add a name (<span className="font-mono">text-xl font-bold</span>) and a short bio.</li>
                <li>Add a button with <span className="font-mono">hover:</span> styles.</li>
              </ol>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-white/60">Example output (what you’re aiming for)</p>

                <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-400/70 to-fuchsia-500/70" />
                  <div className="flex-1">
                    <p className="text-lg font-bold">Your Name</p>
                    <p className="text-sm text-white/70">
                      I’m learning Tailwind CSS and building clean UI faster.
                    </p>
                  </div>
                  <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white/90 transition">
                    Follow
                  </button>
                </div>
              </div>

              <Callout icon="🏁" title="Finish line" variant="tip">
                If you can build that card without writing custom CSS, you’re already “using Tailwind correctly.”
              </Callout>
            </section>

            {/* Footer note */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/70">
                That’s the basics! Tailwind becomes easier the more you practice.
                Try making a navbar, a hero section, and 3 cards next.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-6 h-fit space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white/80">Table of Contents</p>
              <nav className="mt-3 space-y-1.5">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setActiveId(s.id)}
                    className={[
                      "block rounded-xl px-3 py-2 text-sm transition",
                      activeId === s.id
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white",
                    ].join(" ")}
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm font-semibold">Quick Cheatsheet</p>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                <div className="flex justify-between gap-3">
                  <span className="font-mono">p-4</span>
                  <span>padding</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="font-mono">mt-4</span>
                  <span>margin-top</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="font-mono">text-xl</span>
                  <span>font size</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="font-mono">font-bold</span>
                  <span>weight</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="font-mono">rounded-2xl</span>
                  <span>radius</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="font-mono">shadow</span>
                  <span>shadow</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="font-mono">md:...</span>
                  <span>breakpoints</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="font-mono">hover:...</span>
                  <span>states</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-white/40">
              Built as a blog-style page with Tailwind components.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

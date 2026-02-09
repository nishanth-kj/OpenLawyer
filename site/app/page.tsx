import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full glass border-b border-white/5">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-indigo-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              OL
            </div>
            <span className="text-xl font-bold tracking-tight">OpenLawyer</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Features</a>
            <a href="#community" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Community</a>
            <a href="https://github.com/nishanth-kj/OpenLawyer" target="_blank" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">GitHub</a>
            <a 
              href="https://github.com/nishanth-kj/OpenLawyer" 
              target="_blank"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_50%)]" />
          <div className="container px-6 text-center">
            <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              v0.1.0 Now in Beta
            </div>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
              <span className="text-gradient">Legal Intelligence</span>
              <br />
              <span className="text-indigo-500 transition-all hover:text-indigo-400">Open Sourced.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              The next-generation framework for building smart legal agreements and AI-powered legal assistants on an open-source protocol.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/nishanth-kj/OpenLawyer"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 text-sm font-bold text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] sm:w-auto"
              >
                Build with OpenLawyer
              </a>
              <a
                href="https://github.com/nishanth-kj/OpenLawyer"
                target="_blank"
                className="flex h-12 items-center justify-center gap-2 rounded-full glass px-8 text-sm font-bold text-white transition-all hover:bg-white/5 sm:w-auto"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                Star on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="container px-6 mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">Built for Modern Law</h2>
              <p className="mt-4 text-muted-foreground">Everything you need to automate legal workflows and intelligence.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Smart Agreements",
                  desc: "Create self-executing legal contracts that bridge the gap between code and law.",
                  icon: "📜"
                },
                {
                  title: "AI Legal Assistant",
                  desc: "Leverage advanced LLMs to extract insights, summarize documents, and detect risks.",
                  icon: "🤖"
                },
                {
                  title: "Open Protocol",
                  desc: "Built on transparent, open-source standards to ensure security and interoperability.",
                  icon: "🌐"
                }
              ].map((f, i) => (
                <div key={i} className="glass-card rounded-2xl p-8 transition-transform hover:-translate-y-2">
                  <div className="mb-4 text-4xl">{f.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-indigo-600/10 blur-[100px]" />
          <div className="container px-6 mx-auto">
            <div className="glass-card flex flex-col items-center gap-8 rounded-3xl p-12 text-center md:flex-row md:text-left">
              <div className="flex-1">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">Join the Open Law Movement</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Our project is fully open source. Help us shape the future of legal tech by contributing, reporting issues, or sharing ideas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://github.com/nishanth-kj/OpenLawyer/issues" target="_blank" className="rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition-colors hover:bg-zinc-200">
                    View Issues
                  </a>
                  <a href="https://github.com/nishanth-kj/OpenLawyer" target="_blank" className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10">
                    Read the Docs
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative h-48 w-48 animate-pulse rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <svg className="h-16 w-16 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 glass">
        <div className="container mx-auto px-6 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-indigo-600 flex items-center justify-center font-bold text-white text-[10px]">OL</div>
            <span className="text-sm font-bold tracking-tight">OpenLawyer</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 OpenLawyer. Open source under MIT.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/nishanth-kj/OpenLawyer" target="_blank" className="text-sm text-muted-foreground hover:text-white transition-colors">GitHub</a>
            <a href="https://github.com/nishanth-kj/OpenLawyer/issues" target="_blank" className="text-sm text-muted-foreground hover:text-white transition-colors">Issues</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

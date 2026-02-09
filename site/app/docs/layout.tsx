import Link from "next/link";
import { sidebarLinks } from "@/lib/data/docs";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="flex min-h-screen bg-[#0d1117] text-zinc-300 font-sans">
            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 w-64 border-r border-white/5 bg-[#161b22] hidden md:block">
                <div className="flex h-16 items-center px-6 border-b border-white/5">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-[10px]">OL</div>
                        <span className="text-sm font-bold text-white uppercase tracking-wider">Docs</span>
                    </Link>
                </div>
                <nav className="p-6 space-y-8">
                    {sidebarLinks.map((section, i) => (
                        <div key={i}>
                            <h4 className="mb-3 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link, j) => (
                                    <li key={j}>
                                        <Link href="/docs" className="text-sm transition-colors hover:text-blue-400">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 md:pl-64 flex flex-col">
                {/* Top Navbar */}
                <header className="sticky top-0 z-30 h-16 glass border-b border-white/5 flex items-center justify-between px-8">
                    <div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
                        <span>Docs</span>
                        <span>/</span>
                        <span className="text-zinc-300">Getting Started</span>
                        <span>/</span>
                        <span className="text-blue-400">Introduction</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-xs transition-colors hover:text-white">Back to Home</Link>
                        <a href="https://github.com/nishanth-kj/OpenLawyer" target="_blank" className="rounded-full bg-blue-600/10 px-3 py-1 text-[10px] font-bold text-blue-400 border border-blue-600/20">
                            v0.1.0
                        </a>
                    </div>
                </header>

                <main className="flex-1 max-w-4xl mx-auto py-12 px-8 w-full">
                    {children}
                </main>

                {/* Footer */}
                <footer className="mt-auto border-t border-white/5 py-12 px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-xs text-zinc-500">© 2026 OpenLawyer Docs. Open source under MIT.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Discord</a>
                        <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Sitemap</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}

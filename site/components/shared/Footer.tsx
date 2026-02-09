import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 glass">
            <div className="container mx-auto px-6 flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-sm font-bold tracking-tight text-white hover:text-indigo-400 transition-colors">OpenLawyer</Link>
                </div>
                <p className="text-sm text-muted-foreground">
                    © 2026 OpenLawyer. Open source under MIT.
                </p>
                <div className="flex gap-6">
                    <a href="https://github.com/nishanth-kj/OpenLawyer" target="_blank" className="text-sm text-muted-foreground hover:text-white transition-colors">GitHub</a>
                    <a href="https://github.com/nishanth-kj/OpenLawyer/issues" target="_blank" className="text-sm text-muted-foreground hover:text-white transition-colors">Issues</a>
                    <Link href="/docs" className="text-sm text-muted-foreground hover:text-white transition-colors">Documentation</Link>
                </div>
            </div>
        </footer>
    );
}

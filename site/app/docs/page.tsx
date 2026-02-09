import { docsFeatures } from "@/lib/data/docs";

export default function DocsPage() {
    return (
        <article className="prose prose-invert prose-blue max-w-none">
            <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Introduction</h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                OpenLawyer is an open-source framework designed to revolutionize legal intelligence. It provides developers with the tools to build smart legal agreements and AI-powered legal assistants that are transparent, secure, and interoperable.
            </p>

            <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20 mb-10">
                <h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                    <span className="text-lg">💡</span> Note
                </h3>
                <p className="text-sm text-zinc-400">
                    This project is currently in beta. We welcome contributions and feedback from the community to help refine the OpenLawyer protocol.
                </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why OpenLawyer?</h2>
            <div className="grid gap-6 md:grid-cols-2 mb-12">
                {docsFeatures.map((feature, i) => (
                    <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/5">
                        <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                        <p className="text-sm text-zinc-400">{feature.desc}</p>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Getting Help</h2>
            <p className="text-zinc-400 mb-6">
                If you have questions or run into issues, please join our community or report them on GitHub.
            </p>
            <div className="flex gap-4">
                <a href="https://github.com/nishanth-kj/OpenLawyer/issues" target="_blank" className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-zinc-700">
                    Report Issue
                </a>
                <a href="https://github.com/nishanth-kj/OpenLawyer" target="_blank" className="rounded-lg border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition-colors hover:bg-white/5">
                    GitHub Repo
                </a>
            </div>
        </article>
    );
}

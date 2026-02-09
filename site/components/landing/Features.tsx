export default function Features() {
    const features = [
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
    ];

    return (
        <section id="features" className="py-24">
            <div className="container px-6 mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">Built for Modern Law</h2>
                    <p className="mt-4 text-muted-foreground">Everything you need to automate legal workflows and intelligence.</p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((f, i) => (
                        <div key={i} className="glass-card rounded-2xl p-8 transition-transform hover:-translate-y-2">
                            <div className="mb-4 text-4xl">{f.icon}</div>
                            <h3 className="mb-2 text-xl font-bold text-foreground">{f.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

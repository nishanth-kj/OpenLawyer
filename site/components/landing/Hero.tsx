import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(79,70,229,0.1),transparent_50%)]" />
            <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22%3E%3Cpath d=%22M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30%22 stroke=%22%23fff%22 stroke-width=%221%22 fill=%22none%22/%3E%3C/svg%3E')" }} />

            <div className="container px-6 text-center max-w-5xl">
                <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
                    <span className="text-gradient">Legal Intelligence</span>
                    <br />
                    <span className="text-indigo-600 dark:text-indigo-400 transition-all hover:text-indigo-500">Open Lawyer</span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    The next-generation framework for building smart legal agreements and AI-powered legal assistants on an open-source protocol.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button asChild size="lg" className="rounded-full px-8 shadow-indigo-500/20 shadow-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                        <a href="https://github.com/nishanth-kj/OpenLawyer">
                            Build with OpenLawyer <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full glass px-8">
                        <a href="https://github.com/nishanth-kj/OpenLawyer" target="_blank">
                            <Github className="mr-2 h-4 w-4" /> Star on GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

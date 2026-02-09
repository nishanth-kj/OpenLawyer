"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Github } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { name: "Features", href: "/#features" },
        { name: "Community", href: "/#community" },
        { name: "Docs", href: "/docs" },
        { name: "GitHub", href: "https://github.com/nishanth-kj/OpenLawyer", external: true },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full glass border-b border-border/40 transition-all duration-300">
            <div className="container mx-auto flex h-16 items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2 group">

                    <span className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-indigo-500">OpenLawyer</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        link.external ? (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <div className="h-4 w-px bg-border/50" />
                    <ThemeToggle />
                    <Button asChild size="lg" className="rounded-full shadow-lg shadow-indigo-500/20 bg-indigo-600 hover:bg-indigo-500 text-white">
                        <a href="https://github.com/nishanth-kj/OpenLawyer" target="_blank">
                            Get Started
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-foreground transition-colors hover:bg-accent rounded-lg"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <div
                className={`md:hidden absolute top-16 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out border-b border-border shadow-xl ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-background/95 backdrop-blur-md px-6 py-8 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        link.external ? (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <Button asChild size="lg" className="w-full rounded-xl shadow-lg shadow-indigo-500/20">
                        <a href="https://github.com/nishanth-kj/OpenLawyer" target="_blank">
                            Get Started
                        </a>
                    </Button>
                </div>
            </div>
        </nav>
    );
}

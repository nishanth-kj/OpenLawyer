"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-9 w-9" />;
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500 scale-100 transition-all dark:scale-100" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-indigo-600 scale-100 transition-all dark:scale-100" />
            )}
        </Button>
    );
}

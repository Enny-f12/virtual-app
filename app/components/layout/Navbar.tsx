"use client";
import { useState } from "react";
import { Zap, ArrowRight, Menu, X } from "lucide-react";
import { colors } from "@/lib/color";
import { ThemeToggle } from "@/app/components/theme-toggle";
import Link from "next/link";   

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const { border, muted, primary, primaryDeep, primaryForeground, headerBg } = colors;

    return (
        <header
            className="sticky top-0 z-30 backdrop-blur"
            style={{ background: headerBg, borderBottom: `1px solid ${border}` }}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
                <div className="flex items-center gap-2">
                    <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${primary}, #FFC069)` }}
                    >
                        <Zap size={17} color={primaryForeground} fill={primaryForeground} />
                    </div>
                    <span className="zapa-num font-bold text-[18px]">Zapa</span>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium" style={{ color: muted }}>
                    <a href="#features" className="hover:opacity-70">Features</a>
                    <a href="#how-it-works" className="hover:opacity-70">How it works</a>
                    <a href="#" className="hover:opacity-70">Support</a>
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />
                    <Link href="/login" className="zapa-tap text-[14px] font-semibold px-4 py-2 rounded-full">Log in</Link>
                    <Link
                        href="/get-started"
                        className="zapa-tap text-[14px] font-bold px-5 py-2.5 rounded-full flex items-center gap-1.5"
                        style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
                    >
                        Get Started <ArrowRight size={15} strokeWidth={3} />
                    </Link>
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
                        {navOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {navOpen && (
                <div className="md:hidden px-5 pb-5 flex flex-col gap-3" style={{ borderTop: `1px solid ${border}` }}>
                    <a href="#features" className="text-[14px] font-medium pt-3">Features</a>
                    <a href="#how-it-works" className="text-[14px] font-medium">How it works</a>
                    <a href="" className="text-[14px] font-medium">Support</a>
                    <Link href="/login" className="zapa-tap text-[14px] font-semibold px-4 py-2 rounded-full">Log in</Link>
                    <Link
                        href="/get-started"
                        className="zapa-tap text-[14px] font-bold px-5 py-2.5 rounded-full flex items-center gap-1.5"
                        style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
                    >
                        Get Started <ArrowRight size={15} strokeWidth={3} />
                    </Link>
                </div>
            )}
        </header>
    );
}
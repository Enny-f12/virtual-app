"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Home, LayoutGrid, History, User, Bell, LogOut, Settings, Menu, X } from "lucide-react";
import { colors } from "@/lib/color";

const navItems = [
    { label: "Home", href: "/dashboard", icon: Home },
    { label: "Services", href: "/services", icon: LayoutGrid },
    { label: "History", href: "/history", icon: History },
    { label: "Account", href: "/account", icon: User },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
    const { background, foreground, surface, border, muted, primary, primaryForeground } = colors;
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex" style={{ background }}>
            {/* Desktop sidebar */}
            <aside
                className="hidden lg:flex flex-col w-60 shrink-0 h-screen sticky top-0 px-4 py-6"
                style={{ borderRight: `1px solid ${border}` }}
            >
                <Link href="/dashboard" className="flex items-center gap-2 px-2 mb-8">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${primary}, #FFC069)` }}>
                        <Zap size={17} color={primaryForeground} fill={primaryForeground} />
                    </div>
                    <span className="zapa-num font-bold text-[17px]" style={{ color: foreground }}>Zapa</span>
                </Link>

                <nav className="flex flex-col gap-1">
                    {navItems.map(({ label, href, icon: Icon }) => {
                        const active = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-semibold transition-colors"
                                style={{ background: active ? `${primary}14` : "transparent", color: active ? primary : muted }}
                            >
                                <Icon size={17} />
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto flex flex-col gap-1">
                    <Link href="/account/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-semibold" style={{ color: muted }}>
                        <Settings size={17} /> Settings
                    </Link>
                    <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-semibold text-left" style={{ color: muted }}>
                        <LogOut size={17} /> Log out
                    </button>
                </div>
            </aside>

            <div className="flex-1 flex flex-col min-w-0">
                {/* Top bar */}
                <header
                    className="sticky top-0 z-20 flex items-center justify-between px-5 lg:px-8 py-3.5 backdrop-blur"
                    style={{ background: `${background}E6`, borderBottom: `1px solid ${border}` }}
                >
                    <div className="flex items-center gap-3">
                        <button className="lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
                            <Menu size={22} style={{ color: foreground }} />
                        </button>
                        <Link href="/dashboard" className="lg:hidden flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${primary}, #FFC069)` }}>
                                <Zap size={14} color={primaryForeground} fill={primaryForeground} />
                            </div>
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="relative w-9 h-9 rounded-full flex items-center justify-center" style={{ border: `1px solid ${border}` }} aria-label="Notifications">
                            <Bell size={16} style={{ color: muted }} />
                            <span className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full" style={{ background: primary }} />
                        </button>
                        <Link href="/account" className="flex items-center gap-2">
                            <div
                                className="w-9 h-9 rounded-full flex items-center justify-center zapa-num text-[12px] font-bold"
                                style={{ background: surface, border: `1px solid ${border}`, color: foreground }}
                            >
                                CA
                            </div>
                        </Link>
                    </div>
                </header>
                <main className="flex-1 px-5 lg:px-8 py-6 pb-24 lg:pb-8">{children}</main>
            </div>

            {/* Mobile bottom nav */}
            <nav
                className="lg:hidden fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around py-2.5"
                style={{ background: surface, borderTop: `1px solid ${border}` }}
            >
                {navItems.map(({ label, href, icon: Icon }) => {
                    const active = pathname === href;
                    return (
                        <Link key={href} href={href} className="flex flex-col items-center gap-1 px-3 py-1">
                            <Icon size={19} color={active ? primary : muted} />
                            <span className="text-[10px] font-semibold" style={{ color: active ? primary : muted }}>{label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Mobile menu overlay (settings/logout, since bottom nav has no room for them) */}
            {menuOpen && (
                <div className="lg:hidden fixed inset-0 z-30 flex">
                    <div className="absolute inset-0" style={{ background: "rgba(11,18,32,0.5)" }} onClick={() => setMenuOpen(false)} />
                    <div className="relative w-64 h-full p-5 flex flex-col gap-1" style={{ background: surface }}>
                        <button className="self-end mb-4" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                            <X size={20} style={{ color: foreground }} />
                        </button>
                        <Link href="/account/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-semibold" style={{ color: muted }}>
                            <Settings size={17} /> Settings
                        </Link>
                        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-semibold text-left" style={{ color: muted }}>
                            <LogOut size={17} /> Log out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
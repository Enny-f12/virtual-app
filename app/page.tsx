'use client';
import { useState } from "react";
import {
  Zap, Smartphone, Wifi, Receipt, Tv, Gift, ArrowRight, ShieldCheck,
  CreditCard, Landmark, Menu, X, CheckCircle2, Star
} from "lucide-react";

export default function ZapaHomepage() {
  const [navOpen, setNavOpen] = useState(false);

  const ink = "#0B1220";
  const inkSoft = "#111C2E";
  const paper = "#F7F7F4";
  const textMuted = "#5B6472";
  const border = "#E7E7E1";
  const volt = "#FF8A1E";
  const voltDeep = "#FF6A00";
  const teal = "#0F9E8E";

  const features = [
    { icon: Smartphone, title: "Airtime", copy: "Top up any network in seconds. No USSD codes, no waiting." },
    { icon: Wifi, title: "Data", copy: "Every bundle, every network, at the best rate — delivered instantly." },
    { icon: Receipt, title: "Bill Payment", copy: "Pay electricity bills and get your prepaid token immediately." },
    { icon: Tv, title: "Cable TV", copy: "Renew DStv, GOtv or Startimes without leaving your house." },
    { icon: Gift, title: "Gift Cards", copy: "Buy and redeem gift cards for iTunes, Amazon, Steam and more." },
  ];

  const steps = [
    { n: "01", title: "Create your account", copy: "Sign up in under a minute. No paperwork, no branch visit." },
    { n: "02", title: "Fund your wallet", copy: "Bank transfer, card or USSD — your balance updates instantly." },
    { n: "03", title: "Top up instantly", copy: "Airtime, data, bills, cable or gift cards, all from one place." },
  ];

  const stats = [
    { value: "50,000+", label: "Active users" },
    { value: "₦2.1B+", label: "Transacted" },
    { value: "<5s", label: "Avg. transaction time" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <div style={{ background: paper, fontFamily: "'Inter', sans-serif", color: ink }} className="w-full min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        .zapa-num { font-family: 'Space Grotesk', sans-serif; }
        @keyframes zapa-float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        .zapa-float { animation: zapa-float 4s ease-in-out infinite; }
        .zapa-float-slow { animation: zapa-float 5.5s ease-in-out infinite; animation-delay: 0.6s; }
        @keyframes zapa-glow { 0%,100% { box-shadow: 0 30px 60px -20px rgba(255,138,30,0.25); } 50% { box-shadow: 0 30px 70px -15px rgba(255,138,30,0.4); } }
        .zapa-glow { animation: zapa-glow 3.5s ease-in-out infinite; }
        .zapa-tap { transition: transform 0.15s ease, opacity 0.15s ease, background 0.15s ease; }
        .zapa-tap:hover { opacity: 0.92; }
        .zapa-tap:active { transform: scale(0.97); }
      `}</style>

      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur" style={{ background: "rgba(247,247,244,0.85)", borderBottom: `1px solid ${border}` }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${volt}, #FFC069)` }}>
              <Zap size={17} color={ink} fill={ink} />
            </div>
            <span className="zapa-num font-bold text-[18px]">Zapa</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium" style={{ color: textMuted }}>
            <a href="#features" className="hover:opacity-70">Features</a>
            <a href="#how-it-works" className="hover:opacity-70">How it works</a>
            <a href="#" className="hover:opacity-70">Support</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="zapa-tap text-[14px] font-semibold px-4 py-2 rounded-full">Log in</button>
            <button className="zapa-tap text-[14px] font-bold px-5 py-2.5 rounded-full flex items-center gap-1.5" style={{ background: `linear-gradient(135deg, ${volt}, ${voltDeep})`, color: ink }}>
              Get Started <ArrowRight size={15} strokeWidth={3} />
            </button>
          </div>

          <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {navOpen && (
          <div className="md:hidden px-5 pb-5 flex flex-col gap-3" style={{ borderTop: `1px solid ${border}` }}>
            <a href="#features" className="text-[14px] font-medium pt-3">Features</a>
            <a href="#how-it-works" className="text-[14px] font-medium">How it works</a>
            <a href="#" className="text-[14px] font-medium">Support</a>
            <button className="zapa-tap text-[14px] font-semibold px-4 py-2.5 rounded-full text-left" style={{ background: "#EFEFEA" }}>Log in</button>
            <button className="zapa-tap text-[14px] font-bold px-5 py-2.5 rounded-full" style={{ background: `linear-gradient(135deg, ${volt}, ${voltDeep})`, color: ink }}>Get Started</button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(circle at 80% 10%, rgba(255,138,30,0.10), transparent 55%), radial-gradient(circle at 10% 40%, rgba(15,158,142,0.08), transparent 50%)" }}
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold mb-6" style={{ background: "#FFF1E2", color: voltDeep }}>
              <ShieldCheck size={13} /> Trusted by 50,000+ Nigerians
            </div>
            <h1 className="zapa-num font-bold leading-[1.05]" style={{ fontSize: "clamp(2.1rem, 5vw, 3.4rem)" }}>
              Top up anything.<br />Instantly.
            </h1>
            <p className="mt-5 text-[16px] md:text-[17px] leading-relaxed max-w-md" style={{ color: textMuted }}>
              Airtime, data, bills, cable TV and gift cards — all from one wallet. No waiting, no wahala.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="zapa-tap font-bold px-6 py-3.5 rounded-full flex items-center gap-2" style={{ background: `linear-gradient(135deg, ${volt}, ${voltDeep})`, color: ink }}>
                Create free account <ArrowRight size={16} strokeWidth={3} />
              </button>
              <a href="#how-it-works" className="zapa-tap font-semibold px-6 py-3.5 rounded-full" style={{ border: `1px solid ${border}` }}>
                See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <div className="flex">
                {[0,1,2,3,4].map(i => <Star key={i} size={14} fill={volt} color={volt} />)}
              </div>
              <span className="text-[13px] font-medium" style={{ color: textMuted }}>4.8/5 from 12,000+ reviews</span>
            </div>
          </div>

          {/* Device mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="zapa-glow relative w-70 rounded-[36px] p-4 pt-6"
              style={{ background: `linear-gradient(160deg, ${ink} 0%, ${inkSoft} 100%)`, border: "1px solid #1E2A42" }}
            >
              <svg className="absolute -right-4 -top-6 opacity-[0.07]" width="130" height="130" viewBox="0 0 24 24" fill="none">
                <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" fill={volt} />
              </svg>
              <span className="text-[11px] font-medium" style={{ color: "#8B93A7" }}>TOTAL BALANCE</span>
              <div className="zapa-num text-[26px] font-bold mt-1" style={{ color: "#fff" }}>₦742,500.00</div>
              <button className="mt-3 w-full rounded-full py-2.5 text-[13px] font-bold" style={{ background: `linear-gradient(135deg, ${volt}, ${voltDeep})`, color: ink }}>
                Fund Wallet
              </button>
              <div className="mt-5 flex flex-col gap-2">
                {["Airtime", "Data", "Bills"].map((t) => (
                  <div key={t} className="flex items-center justify-between rounded-xl px-3 py-2.5" style={{ background: "#161F30" }}>
                    <span className="text-[12px] font-medium" style={{ color: "#E5E7EB" }}>{t}</span>
                    <ArrowRight size={13} color="#5B6472" />
                  </div>
                ))}
              </div>
            </div>

            <div className="zapa-float absolute -left-6 top-10 hidden sm:flex items-center gap-2 rounded-2xl px-3.5 py-2.5 bg-white shadow-xl" style={{ border: `1px solid ${border}` }}>
              <CheckCircle2 size={16} color={teal} />
              <div>
                <div className="text-[11px] font-bold leading-tight">Data purchase successful</div>
                <div className="text-[10px]" style={{ color: textMuted }}>2GB · MTN</div>
              </div>
            </div>

            <div className="zapa-float-slow absolute -right-2 bottom-6 hidden sm:flex items-center gap-2 rounded-2xl px-3.5 py-2.5 bg-white shadow-xl" style={{ border: `1px solid ${border}` }}>
              <Zap size={15} color={volt} fill={volt} />
              <div>
                <div className="text-[11px] font-bold leading-tight">₦2,500 credited</div>
                <div className="text-[10px]" style={{ color: textMuted }}>Instant · Bank Transfer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y" style={{ borderColor: border }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6">
          <p className="text-center text-[12px] font-semibold tracking-wide mb-5" style={{ color: textMuted }}>
            WORKS WITH EVERY NETWORK AND EVERY BANK
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {["MTN", "Airtel", "Glo", "9mobile"].map((n) => (
              <span key={n} className="zapa-num font-bold text-[15px]">{n}</span>
            ))}
            <span className="flex items-center gap-1.5 text-[14px] font-semibold"><CreditCard size={16} /> Visa / Mastercard</span>
            <span className="flex items-center gap-1.5 text-[14px] font-semibold"><Landmark size={16} /> Bank Transfer</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-5 md:px-8 py-20">
        <div className="max-w-xl">
          <h2 className="zapa-num font-bold text-[28px] md:text-[34px]">Everything you top up, in one place</h2>
          <p className="mt-3 text-[16px] leading-relaxed" style={{ color: textMuted }}>
            Stop switching apps for every bill. Zapa handles it all — instantly, securely, and without hidden fees.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="zapa-tap rounded-3xl p-6 bg-white" style={{ border: `1px solid ${border}` }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: "rgba(15,158,142,0.1)" }}>
                <Icon size={20} color={teal} />
              </div>
              <h3 className="font-bold text-[16px] mt-4">{title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: textMuted }}>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <h2 className="zapa-num font-bold text-[28px] md:text-[34px] text-center">Get funded in 3 steps</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map(({ n, title, copy }, i) => (
            <div key={n} className="relative">
              <span className="zapa-num text-[42px] font-bold" style={{ color: "#EFEFE9" }}>{n}</span>
              <h3 className="font-bold text-[17px] mt-1">{title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: textMuted }}>{copy}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 -right-4 w-8 h-px" style={{ background: border }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="py-14" style={{ background: `linear-gradient(160deg, ${ink} 0%, ${inkSoft} 100%)` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="zapa-num font-bold text-[26px] md:text-[32px]" style={{ color: volt }}>{value}</div>
              <div className="text-[12px] font-medium mt-1" style={{ color: "#8B93A7" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 text-center">
        <h2 className="zapa-num font-bold text-[28px] md:text-[36px]">Ready to stop juggling apps?</h2>
        <p className="mt-3 text-[16px]" style={{ color: textMuted }}>Join thousands topping up smarter with Zapa.</p>
        <button className="zapa-tap mt-7 font-bold px-8 py-4 rounded-full inline-flex items-center gap-2" style={{ background: `linear-gradient(135deg, ${volt}, ${voltDeep})`, color: ink }}>
          Create free account <ArrowRight size={16} strokeWidth={3} />
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: border }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${volt}, #FFC069)` }}>
                <Zap size={14} color={ink} fill={ink} />
              </div>
              <span className="zapa-num font-bold text-[16px]">Zapa</span>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed max-w-55" style={{ color: textMuted }}>
              One wallet for airtime, data, bills, cable TV and gift cards.
            </p>
          </div>
          <div>
            <h4 className="text-[13px] font-bold mb-3">Product</h4>
            <ul className="flex flex-col gap-2 text-[13px]" style={{ color: textMuted }}>
              <li>Airtime</li><li>Data</li><li>Bill Payment</li><li>Cable TV</li><li>Gift Cards</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-bold mb-3">Company</h4>
            <ul className="flex flex-col gap-2 text-[13px]" style={{ color: textMuted }}>
              <li>About</li><li>Careers</li><li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-bold mb-3">Legal</h4>
            <ul className="flex flex-col gap-2 text-[13px]" style={{ color: textMuted }}>
              <li>Privacy Policy</li><li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-[12px] py-5 border-t" style={{ color: textMuted, borderColor: border }}>
          © 2026 Zapa. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
"use client";
import {
  Wifi, Receipt, Tv, Gift, ArrowRight, ShieldCheck,
  CreditCard, CheckCircle2, Star, Smartphone,
} from "lucide-react";
import { colors } from "@/lib/color";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

// Unsplash — free license. Credits: Brian Kungu, Emmanuel Ikwuegbu (Owerri, Nigeria),
// Compare Fibre, Dallas Reedy, Clay Banks, Ekaterina Shevchenko, Prince Akachi (Lagos),
// Charles Etoroma, Etty Fidele.
const img = (id: string, w = 1400) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

const HERO_IMG = img("photo-1768244016593-8ca75b15bc92");
const AIRTIME_IMG = img("photo-1624574337423-7ea725c5540c");
const DATA_IMG = img("photo-1606814540563-5c02d62fd409");
const BILLS_IMG = img("photo-1534825696654-39efb2c8453d");
const CABLE_IMG = img("photo-1763827657709-b1bbc3c4945b");
const GIFT_IMG = img("photo-1549465220-1a8b9238cd48");
const TESTI_CHIDINMA = img("photo-1531123414780-f74242c2b052", 300);
const TESTI_TUNDE = img("photo-1506277886164-e25aa3f4ef7f", 300);
const TESTI_GRACE = img("photo-1535997018565-142937b9e38d", 300);

export default function ZapaHomepage() {
  const {
    background, foreground, muted, border,
    primary, primaryDeep, primaryForeground, accent,
    surfaceInvert, surfaceInvertSoft, surfaceInvertForeground, surfaceInvertMuted,
  } = colors;

  const services = [
    {
      icon: Smartphone, title: "Airtime", tag: "MTN · Airtel · Glo · 9mobile",
      copy: "Top up any network in seconds. No USSD codes, no waiting.",
      image: AIRTIME_IMG, span: "lg:col-span-6", height: "h-72 lg:h-80",
    },
    {
      icon: Wifi, title: "Data", tag: "All networks",
      copy: "Every bundle, best rate, delivered instantly.",
      image: DATA_IMG, span: "lg:col-span-3", height: "h-72 lg:h-80",
    },
    {
      icon: Receipt, title: "Bill Payment", tag: "Electricity & utilities",
      copy: "Pay a bill, get your prepaid token immediately.",
      image: BILLS_IMG, span: "lg:col-span-3", height: "h-72 lg:h-80",
    },
    {
      icon: Tv, title: "Cable TV", tag: "DStv · GOtv · Startimes",
      copy: "Renew your subscription without leaving the couch.",
      image: CABLE_IMG, span: "lg:col-span-6", height: "h-64",
    },
    {
      icon: Gift, title: "Gift Cards", tag: "iTunes · Amazon · Steam",
      copy: "Buy and redeem gift cards, code delivered instantly.",
      image: GIFT_IMG, span: "lg:col-span-6", height: "h-64",
    },
  ];

  const steps = [
    { n: "01", title: "Choose a service", copy: "Airtime, data, a bill, cable TV or a gift card — pick what you need." },
    { n: "02", title: "Enter the details", copy: "Phone number, meter number, smart card ID, or gift card info." },
    { n: "03", title: "Pay with your card", copy: "One secure card payment. No wallet, no funding step — instant delivery." },
  ];

  const whyUs = [
    { icon: ShieldCheck, title: "Instant Delivery", copy: "Airtime, data, tokens and codes arrive within seconds of payment." },
    { icon: CreditCard, title: "Secure Card Payments", copy: "Every transaction is encrypted end-to-end; we never store your card." },
    { icon: CheckCircle2, title: "No Hidden Fees", copy: "The price you see at checkout is the price you pay. Always." },
    { icon: Star, title: "24/7 Support", copy: "Real humans on live chat and WhatsApp if a transaction needs help." },
  ];

  const testimonials = [
    { quote: "I pay my AEDC bill here every month now. The meter name check before I pay is what sold me.", name: "Chidinma A.", place: "Abuja", photo: TESTI_CHIDINMA },
    { quote: "Cable TV renewal used to mean queuing at an agent. Now it's a minute on my phone, card and done.", name: "Tunde O.", place: "Lagos", photo: TESTI_TUNDE },
    { quote: "Bought an iTunes gift card for my daughter abroad — the code showed up instantly. No wallet nonsense.", name: "Grace E.", place: "Port Harcourt", photo: TESTI_GRACE },
  ];

  const stats = [
    { value: "50,000+", label: "Active users" },
    { value: "₦2.1B+", label: "Transacted" },
    { value: "<5s", label: "Avg. transaction time" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <div style={{ background, color: foreground }} className="w-full min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;1,500;1,600&family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        .zapa-num { font-family: 'Space Grotesk', sans-serif; }
        .zapa-serif { font-family: 'Fraunces', serif; font-style: italic; font-weight: 500; }
        @keyframes zapa-float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        .zapa-float { animation: zapa-float 4s ease-in-out infinite; }
        @keyframes zapa-glow { 0%,100% { box-shadow: 0 30px 60px -20px rgba(255,138,30,0.22); } 50% { box-shadow: 0 30px 70px -15px rgba(255,138,30,0.38); } }
        .zapa-glow { animation: zapa-glow 3.5s ease-in-out infinite; }
        .zapa-tap { transition: transform 0.15s ease, opacity 0.15s ease, background 0.15s ease; }
        .zapa-tap:hover { opacity: 0.92; }
        .zapa-tap:active { transform: scale(0.97); }
        .zapa-tile { transition: transform 0.35s cubic-bezier(.2,.8,.2,1); }
        .zapa-tile:hover { transform: translateY(-4px); }
        .zapa-tile:hover .zapa-tile-img { transform: scale(1.06); }
        .zapa-tile-img { transition: transform 0.6s ease; }
      `}</style>

      <Navbar />

      {/* Hero — fixed-dark, doesn't flip with theme toggle */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${surfaceInvert} 0%, ${surfaceInvertSoft} 100%)`, color: surfaceInvertForeground }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold mb-6"
              style={{ background: "rgba(255,138,30,0.14)", color: primary }}
            >
              <ShieldCheck size={13} /> Trusted by 50,000+ Nigerians
            </div>
            <h1 className="zapa-num font-bold leading-[1.05]" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}>
              Top up <span className="zapa-serif">anything.</span><br />Pay straight from your card.
            </h1>
            <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed max-w-md" style={{ color: surfaceInvertMuted }}>
              Airtime, data, bills, cable TV and gift cards — all in one place. No wallet to fund, no waiting.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                className="zapa-tap font-bold px-6 py-3.5 rounded-full flex items-center gap-2"
                style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
              >
                Create free account <ArrowRight size={16} strokeWidth={3} />
              </button>
              
              <a
                href="#how-it-works"
                className="zapa-tap font-semibold px-6 py-3.5 rounded-full"
                style={{ border: "1px solid rgba(255,255,255,0.18)", color: surfaceInvertForeground }}
              >
                See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <div className="flex">
                {[0,1,2,3,4].map(i => <Star key={i} size={14} fill={primary} color={primary} />)}
              </div>
              <span className="text-[13px] font-medium" style={{ color: surfaceInvertMuted }}>4.8/5 from 12,000+ reviews</span>
            </div>
          </div>

          {/* Framed hero photo — the "framed = people" signature treatment */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="zapa-glow p-2.5 rounded-[28px]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <img
                src={HERO_IMG}
                alt="Zapa customer paying instantly with her phone"
                className="w-72 sm:w-80 h-96 object-cover rounded-[20px]"
              />
            </div>

            <div
              className="zapa-float absolute -left-6 bottom-10 hidden sm:flex items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-xl"
              style={{ background: "#fff", border: `1px solid ${border}` }}
            >
              <CheckCircle2 size={16} color={accent} />
              <div>
                <div className="text-[11px] font-bold leading-tight" style={{ color: "#0B1220" }}>Payment successful</div>
                <div className="text-[10px]" style={{ color: "#5B6472" }}>₦2,500 · Visa •••• 4821</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b" style={{ borderColor: border }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6">
          <p className="text-center text-[12px] font-semibold tracking-wide mb-5" style={{ color: muted }}>
            WORKS WITH EVERY NETWORK — PAY BY CARD
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {["MTN", "Airtel", "Glo", "9mobile"].map((n) => (
              <span key={n} className="zapa-num font-bold text-[15px]">{n}</span>
            ))}
            <span className="flex items-center gap-1.5 text-[14px] font-semibold">
              <CreditCard size={16} /> Visa / Mastercard / Verve
            </span>
          </div>
        </div>
      </section>

      {/* Services — asymmetric photo tiles, full-bleed = "functional" signature treatment */}
      <section id="features" className="max-w-6xl mx-auto px-5 md:px-8 py-20">
        <div className="max-w-xl mb-10">
          <h2 className="zapa-num font-bold text-[28px] md:text-[34px]">Everything you top up, in one place</h2>
          <p className="mt-3 text-[16px] leading-relaxed" style={{ color: muted }}>
            Stop switching apps for every bill. Zapa handles it all — instantly, securely, and without hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {services.map(({ icon: Icon, title, tag, copy, image, span, height }) => (
            <div key={title} className={`zapa-tile relative rounded-3xl overflow-hidden cursor-pointer ${span} ${height}`}>
              <img src={image} alt={title} className="zapa-tile-img absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,32,0) 30%, rgba(11,18,32,0.88) 100%)" }} />
              <div className="relative h-full flex flex-col justify-end p-6">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(4px)" }}
                >
                  <Icon size={17} color="#fff" />
                </div>
                <span className="text-[10px] font-semibold tracking-wide uppercase mb-1" style={{ color: primary }}>{tag}</span>
                <h3 className="font-bold text-[18px] text-white">{title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works — genuinely sequential, numbers earned */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <h2 className="zapa-num font-bold text-[28px] md:text-[34px] text-center">Get topped up in 3 steps</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map(({ n, title, copy }, i) => (
            <div key={n} className="relative">
              <span className="zapa-num text-[42px] font-bold" style={{ color: muted, opacity: 0.25 }}>{n}</span>
              <h3 className="font-bold text-[17px] mt-1">{title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: muted }}>{copy}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 -right-4 w-8 h-px" style={{ background: border }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why us — split, framed photo = "people" signature treatment */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="zapa-num font-bold text-[28px] md:text-[34px] mb-8">Why people use Zapa</h2>
          <div className="flex flex-col divide-y" style={{ borderColor: border }}>
            {whyUs.map(({ icon: Icon, title, copy }, i) => (
              <div key={title} className="flex gap-4 py-5" style={{ borderTop: i === 0 ? "none" : `1px solid ${border}` }}>
                <div
                  className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(15,158,142,0.1)" }}
                >
                  <Icon size={18} color={accent} />
                </div>
                <div>
                  <h3 className="font-bold text-[15px]">{title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed" style={{ color: muted }}>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-2.5 rounded-[28px] justify-self-center" style={{ border: `1px solid ${border}` }}>
          <img
            src={HERO_IMG}
            alt="Zapa customer, satisfied after an instant top-up"
            className="w-full max-w-sm h-105 object-cover rounded-[20px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Stats — fixed-dark band, subtle data-texture overlay */}
      <section
        className="relative py-14 overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${surfaceInvert} 0%, ${surfaceInvertSoft} 100%)` }}
      >
        <img src={DATA_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="zapa-num font-bold text-[26px] md:text-[32px]" style={{ color: primary }}>{value}</div>
              <div className="text-[12px] font-medium mt-1" style={{ color: surfaceInvertMuted }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials — framed circular portraits, Fraunces for quotes */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20">
        <h2 className="zapa-num font-bold text-[28px] md:text-[34px] text-center mb-12">What our users say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, place, photo }) => (
            <div key={name} className="rounded-3xl p-6" style={{ border: `1px solid ${border}` }}>
              <p className="zapa-serif text-[16px] leading-relaxed mb-6">&quot;{quote}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="p-0.5 rounded-full" style={{ border: `1px solid ${border}` }}>
                  <img src={photo} alt={name} className="w-9 h-9 rounded-full object-cover" loading="lazy" />
                </div>
                <div>
                  <div className="text-[12.5px] font-bold">{name}</div>
                  <div className="text-[11px]" style={{ color: muted }}>{place}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA — fixed-dark bookend, echoes hero */}
      <section
        className="relative py-24 text-center overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${surfaceInvert} 0%, ${surfaceInvertSoft} 100%)`, color: surfaceInvertForeground }}
      >
        <img src={DATA_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.1]" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <h2 className="zapa-num font-bold text-[28px] md:text-[38px]">
            Ready to stop <span className="zapa-serif">juggling</span> apps?
          </h2>
          <p className="mt-3 text-[16px]" style={{ color: surfaceInvertMuted }}>Join thousands topping up smarter with Zapa.</p>
          <button
            className="zapa-tap mt-7 font-bold px-8 py-4 rounded-full inline-flex items-center gap-2"
            style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
          >
            Create free account <ArrowRight size={16} strokeWidth={3} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
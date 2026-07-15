import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Star } from "lucide-react";
import { colors } from "@/lib/color";
import { IMAGES } from "@/lib/home-data";

export default function Hero() {
  const { primary, primaryDeep, primaryForeground, accent, border, surfaceInvert, surfaceInvertSoft, surfaceInvertForeground, surfaceInvertMuted } = colors;

  return (
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
              {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={14} fill={primary} color={primary} />)}
            </div>
            <span className="text-[13px] font-medium" style={{ color: surfaceInvertMuted }}>4.8/5 from 12,000+ reviews</span>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            className="zapa-glow relative w-72 h-96 sm:w-80 p-2.5 rounded-[28px]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="relative w-full h-full rounded-[20px] overflow-hidden">
              <Image
                src={IMAGES.hero}
                alt="Zapa customer paying instantly with her phone"
                fill
                sizes="(max-width: 640px) 288px, 320px"
                className="object-cover"
                priority
              />
            </div>
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
  );
}
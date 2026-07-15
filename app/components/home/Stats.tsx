import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { colors } from "@/lib/color";
import { stats, IMAGES } from "@/lib/home-data";

export default function Stats() {
  const { primary, surfaceInvert, surfaceInvertSoft, surfaceInvertForeground, surfaceInvertMuted } = colors;

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: `linear-gradient(160deg, ${surfaceInvert} 0%, ${surfaceInvertSoft} 100%)`, color: surfaceInvertForeground }}
    >
      <Image src={IMAGES.data} alt="" fill sizes="100vw" className="object-cover opacity-[0.05]" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, rgba(11,18,32,0.6) 75%)" }}
      />

      {/* perforated receipt edge, top */}
      <div
        className="relative h-3"
        style={{
          backgroundImage: "radial-gradient(circle at 12px 0, transparent 6px, var(--tear-bg, transparent) 6px)",
          backgroundSize: "24px 12px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 md:px-10 py-16">
        <div className="text-center mb-12">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: primary }}>
            Zapa, by the numbers
          </span>
          <h2 className="zapa-serif text-[26px] md:text-[32px] mt-3">
            Numbers people actually feel.
          </h2>
        </div>

        {/* receipt-style ledger */}
        <div
          className="rounded-2xl px-6 md:px-10 py-8"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex flex-col">
            {stats.map(({ value, label }, i) => {
              const isLast = i === stats.length - 1;
              return (
                <div
                  key={label}
                  className="flex items-baseline gap-3 py-4"
                  style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span
                    className="text-[11px] md:text-[12px] font-semibold tracking-[0.08em] uppercase whitespace-nowrap"
                    style={{ color: surfaceInvertMuted }}
                  >
                    {label}
                  </span>
                  <span
                    className="flex-1 border-b"
                    style={{ borderBottomStyle: "dotted", borderColor: "rgba(255,255,255,0.22)" }}
                  />
                  <span className="zapa-num font-bold text-[20px] md:text-[24px] whitespace-nowrap flex items-center gap-1.5" style={{ color: isLast ? "#34D399" : surfaceInvertForeground }}>
                    {isLast && <ShieldCheck size={16} />}
                    {value}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-5 flex items-center justify-between text-[10.5px]" style={{ borderTop: "1px dashed rgba(255,255,255,0.15)", color: surfaceInvertMuted }}>
            <span>ZAPA — VIRTUAL TOP-UP PLATFORM</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#34D399" }} />
              Live figures
            </span>
          </div>
        </div>
      </div>

      {/* perforated receipt edge, bottom */}
      <div
        className="relative h-3"
        style={{
          backgroundImage: "radial-gradient(circle at 12px 12px, transparent 6px, var(--tear-bg, transparent) 6px)",
          backgroundSize: "24px 12px",
        }}
      />
    </section>
  );
}
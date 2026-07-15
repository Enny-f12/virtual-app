import { colors } from "@/lib/color";
import { steps } from "@/lib/home-data";
import { Grid2x2, Smartphone, CreditCard, Check } from "lucide-react";

const stepVisuals = [
  { icon: Grid2x2, render: "grid" as const },
  { icon: Smartphone, render: "field" as const },
  { icon: CreditCard, render: "chip" as const },
];

function MiniScreen({ render, primary, accent }: { render: "grid" | "field" | "chip"; primary: string; accent: string; border: string }) {
  return (
    <div
      className="w-full h-full rounded-[10px] flex flex-col p-2.5 gap-1.5"
      style={{ background: "#0B1220" }}
    >
      {render === "grid" && (
        <div className="grid grid-cols-3 gap-1 flex-1">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="rounded-sm"
              style={{ background: i === 0 ? primary : "rgba(255,255,255,0.1)" }}
            />
          ))}
        </div>
      )}
      {render === "field" && (
        <div className="flex-1 flex flex-col justify-center gap-1.5">
          <div className="h-1 w-6 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
          <div className="h-3.5 rounded-sm flex items-center px-1.5" style={{ border: `1px solid ${primary}` }}>
            <span className="w-0.5 h-2 animate-pulse" style={{ background: primary }} />
          </div>
        </div>
      )}
      {render === "chip" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-1.5">
          <div
            className="w-5 h-3.5 rounded-[3px]"
            style={{ background: "linear-gradient(155deg, #F3D98B 0%, #C9972B 55%, #F3D98B 100%)" }}
          />
          <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: accent }}>
            <Check size={10} color="#fff" strokeWidth={3} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function HowItWorks() {
  const { muted, border, primary, accent, foreground } = colors;

  return (
    <section id="how-it-works" className="max-w-5xl mx-auto px-5 md:px-8 py-20">
      <div className="text-center mb-14">
        <span className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: primary }}>
          The whole checkout
        </span>
        <h2 className="zapa-num font-bold text-[28px] md:text-[34px] mt-3">Three key steps</h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {/* progress track */}
        <div
          className="hidden md:block absolute top-9 left-[16.6%] right-[16.6%] h-0.5 rounded-full"
          style={{ background: `linear-gradient(90deg, ${primary} 0%, ${accent} 100%)` }}
        />

        {steps.map(({ n, title, copy }, i) => {
          const { icon: Icon, render } = stepVisuals[i];
          return (
            <div key={n} className="relative flex flex-col items-center text-center">
              <div
                className="relative z-10 w-18 h-18 rounded-2xl p-1.5 mb-5"
                style={{ background: foreground, border: `3px solid ${i === steps.length - 1 ? accent : primary}` }}
              >
                <MiniScreen render={render} primary={primary} accent={accent} border={border} />
              </div>

              <div
                className="w-6 h-6 rounded-full flex items-center justify-center mb-3 zapa-num text-[11px] font-bold"
                style={{ background: `${i === steps.length - 1 ? accent : primary}1A`, color: i === steps.length - 1 ? accent : primary }}
              >
                {i + 1}
              </div>

              <div className="mb-1.5" style={{ color: muted }}>
                <Icon size={16} className="inline-block" />
              </div>
              <h3 className="font-bold text-[16px]">{title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed max-w-55" style={{ color: muted }}>{copy}</p>
            </div>
          );
        })}
      </div>

      
    </section>
  );
}
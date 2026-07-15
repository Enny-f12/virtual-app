import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";
import { colors } from "@/lib/color";
import { IMAGES } from "@/lib/home-data";

type Testimonial = { quote: string; name: string; place: string };

export default function AuthShell({
  children,
  eyebrow,
  headline,
  testimonial,
}: {
  children: React.ReactNode;
  eyebrow: string;
  headline: React.ReactNode;
  testimonial: Testimonial;
}) {
  const {
    background, foreground, primary, primaryForeground,
    surfaceInvert, surfaceInvertSoft, surfaceInvertForeground, surfaceInvertMuted,
  } = colors;

  return (
    <div className="min-h-screen grid lg:grid-cols-2" style={{ background }}>
      {/* Brand panel */}
      <div
        className="relative hidden lg:flex flex-col justify-between p-10 overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${surfaceInvert} 0%, ${surfaceInvertSoft} 100%)`, color: surfaceInvertForeground }}
      >
        <Image src={IMAGES.hero} alt="" fill sizes="50vw" className="object-cover opacity-[0.16]" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${surfaceInvert}CC 0%, ${surfaceInvert}F2 100%)` }} />

        <Link href="/" className="relative z-10 flex items-center gap-2 w-fit">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${primary}, #FFC069)` }}>
            <Zap size={17} color={primaryForeground} fill={primaryForeground} />
          </div>
          <span className="zapa-num font-bold text-[18px]">Zapa</span>
        </Link>

        <div className="relative z-10">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: primary }}>{eyebrow}</span>
          <h1 className="zapa-num font-bold text-[32px] leading-[1.15] mt-3 max-w-sm">{headline}</h1>
        </div>

        <div
          className="relative z-10 rounded-2xl p-5 max-w-sm"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <p className="zapa-serif text-[15px] leading-relaxed mb-4">&quot;{testimonial.quote}&quot;</p>
          <div className="text-[12.5px] font-bold">{testimonial.name}</div>
          <div className="text-[11px]" style={{ color: surfaceInvertMuted }}>{testimonial.place}</div>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12">
        <Link href="/" className="lg:hidden flex items-center gap-2 mb-10 w-fit">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${primary}, #FFC069)` }}>
            <Zap size={17} color={primaryForeground} fill={primaryForeground} />
          </div>
          <span className="zapa-num font-bold text-[18px]" style={{ color: foreground }}>Zapa</span>
        </Link>
        <div className="w-full max-w-sm mx-auto lg:mx-0">{children}</div>
      </div>
    </div>
  );
}
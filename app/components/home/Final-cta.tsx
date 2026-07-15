import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { colors } from "@/lib/color";
import { IMAGES } from "@/lib/home-data";

export default function FinalCta() {
  const { primary, primaryDeep, primaryForeground, surfaceInvert, surfaceInvertSoft, surfaceInvertForeground, surfaceInvertMuted } = colors;
  return (
    <section
      className="relative py-24 text-center overflow-hidden"
      style={{ background: `linear-gradient(160deg, ${surfaceInvert} 0%, ${surfaceInvertSoft} 100%)`, color: surfaceInvertForeground }}
    >
      <Image src={IMAGES.data} alt="" fill sizes="100vw" className="object-cover opacity-[0.1]" />
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
  );
}
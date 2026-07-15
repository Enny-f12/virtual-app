import Image from "next/image";
import { colors } from "@/lib/color";
import { testimonials } from "@/lib/home-data";

export default function Testimonials() {
  const { border, muted } = colors;
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-20">
      <h2 className="zapa-num font-bold text-[28px] md:text-[34px] text-center mb-12">What our users say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map(({ quote, name, place, photo }) => (
          <div key={name} className="rounded-3xl p-6" style={{ border: `1px solid ${border}` }}>
            <p className="zapa-serif text-[16px] leading-relaxed mb-6">&quot;{quote}&quot;</p>
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden p-0.5" style={{ border: `1px solid ${border}` }}>
                <Image src={photo} alt={name} fill sizes="36px" className="object-cover rounded-full" />
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
  );
}
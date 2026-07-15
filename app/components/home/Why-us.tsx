import Image from "next/image";
import { colors } from "@/lib/color";
import { whyUs, IMAGES } from "@/lib/home-data";

export default function WhyUs() {
  const { muted, border, accent } = colors;
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <h2 className="zapa-num font-bold text-[28px] md:text-[34px] mb-8">Why people use Zapa</h2>
        <div className="flex flex-col divide-y" style={{ borderColor: border }}>
          {whyUs.map(({ icon: Icon, title, copy }, i) => (
            <div key={title} className="flex gap-4 py-5" style={{ borderTop: i === 0 ? "none" : `1px solid ${border}` }}>
              <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center" style={{ background: "rgba(15,158,142,0.1)" }}>
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
      <div className="relative w-full max-w-sm h-105 rounded-[28px] p-2.5 justify-self-center" style={{ border: `1px solid ${border}` }}>
        <div className="relative w-full h-full rounded-[20px] overflow-hidden">
          <Image
            src={IMAGES.hero}
            alt="Zapa customer, satisfied after an instant top-up"
            fill
            sizes="384px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import { colors } from "@/lib/color";
import { services } from "@/lib/home-data";

export default function Services() {
  const { muted, primary } = colors;
  return (
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
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="zapa-tile-img object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,32,0) 30%, rgba(11,18,32,0.88) 100%)" }} />
            <div className="relative h-full flex flex-col justify-end p-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(4px)" }}>
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
  );
}
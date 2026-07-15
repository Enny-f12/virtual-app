import Link from "next/link";
import { colors } from "@/lib/color";
import { services } from "@/lib/dashboard-data";

export default function ServiceGrid() {
  const { surface, border, muted, foreground, primary, accent } = colors;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {services.map(({ key, label, icon: Icon, href, comingSoon }) => {
        const tile = (
          <div
            className={`zapa-tap flex flex-col items-center gap-2.5 rounded-2xl py-5 px-2 text-center ${comingSoon ? "opacity-45" : "cursor-pointer"}`}
            style={{ background: surface, border: `1px solid ${border}` }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: `${key === "cable" ? accent : primary}14` }}
            >
              <Icon size={19} color={key === "cable" ? accent : primary} />
            </div>
            <div>
              <div className="text-[11.5px] font-bold leading-tight" style={{ color: foreground }}>{label}</div>
              {comingSoon && (
                <span className="text-[8.5px] font-semibold uppercase tracking-wide mt-1 inline-block" style={{ color: muted }}>
                  Soon
                </span>
              )}
            </div>
          </div>
        );
        return comingSoon ? (
          <div key={key} aria-disabled="true">{tile}</div>
        ) : (
          <Link key={key} href={href}>{tile}</Link>
        );
      })}
    </div>
  );
}
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { colors } from "@/lib/color";
import { quickRepeat } from "@/lib/dashboard-data";

export default function QuickRepeat() {
  const { surface, border, muted, foreground, primary } = colors;
  return (
    <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1 -mx-1 px-1 snap-x snap-mandatory">
      {quickRepeat.map(({ id, label, sub, icon: Icon, href }) => (
        <Link
          key={id}
          href={href}
          className="zapa-tap shrink-0 flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-2xl"
          style={{ background: surface, border: `1px solid ${border}` }}
        >
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${primary}14` }}>
            <Icon size={15} color={primary} />
          </div>
          <div>
            <div className="text-[12.5px] font-bold leading-tight" style={{ color: foreground }}>{label}</div>
            <div className="text-[10.5px]" style={{ color: muted }}>{sub}</div>
          </div>
          <ArrowRight size={13} style={{ color: muted }} />
        </Link>
      ))}
    </div>
  );
}
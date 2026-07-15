import Link from "next/link";
import { Construction } from "lucide-react";
import { colors } from "@/lib/color";

export default function ComingSoonStep({ label }: { label: string }) {
  const { surface, border, muted, foreground, primary, primaryForeground } = colors;
  return (
    <div className="rounded-2xl p-8 text-center flex flex-col items-center" style={{ background: surface, border: `1px solid ${border}` }}>
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${primary}14` }}>
        <Construction size={22} color={primary} />
      </div>
      <h2 className="font-bold text-[17px]" style={{ color: foreground }}>{label} is on the way</h2>
      <p className="text-[13px] mt-1.5 max-w-xs" style={{ color: muted }}>
        We&apos;re wiring this one up next. In the meantime, Airtime purchases are fully live.
      </p>
      <Link href="/services/airtime" className="zapa-tap rounded-xl px-5 py-2.5 text-[13px] font-bold mt-5" style={{ background: primary, color: primaryForeground }}>
        Buy Airtime instead
      </Link>
    </div>
  );
}
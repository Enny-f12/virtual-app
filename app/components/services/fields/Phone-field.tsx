import { Smartphone } from "lucide-react";
import { colors } from "@/lib/color";
import { user } from "@/lib/dashboard-data";

const savedNumbers = [
  { label: "Mum", phone: "0810 000 0032" },
  { label: "Self", phone: "0803 000 4521" },
];

export default function PhoneField({
  value, onChange,
}: { value: string; onChange: (v: string) => void }) {
  const { surface, border, muted, foreground, primary } = colors;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12px] font-semibold" style={{ color: foreground }}>Phone number</span>
        <button type="button" onClick={() => onChange(user.phone)} className="text-[11.5px] font-semibold" style={{ color: primary }}>
          Use my number
        </button>
      </div>
      <div className="relative">
        <Smartphone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: muted }} />
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0803 000 0000"
          inputMode="numeric"
          className="zapa-field w-full rounded-xl pl-10 pr-4 py-3 text-[14px] outline-none"
          style={{ background: surface, border: `1px solid ${border}`, color: foreground }}
        />
      </div>
      <div className="flex gap-2 flex-wrap mt-3">
        {savedNumbers.map((s) => (
          <button
            key={s.label}
            type="button"
            onClick={() => onChange(s.phone)}
            className="zapa-tap px-3 py-1.5 rounded-full text-[11.5px] font-semibold"
            style={{ background: surface, border: `1px solid ${border}`, color: muted }}
          >
            {s.label} · {s.phone}
          </button>
        ))}
      </div>
    </div>
  );
}
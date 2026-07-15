import { colors } from "@/lib/color";

export default function ChipGroup({
  options, value, onChange,
}: { options: string[]; value: string | null; onChange: (v: string) => void }) {
  const { primary, primaryForeground, surface, border, muted } = colors;
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className="zapa-tap px-4 py-2 rounded-full text-[12.5px] font-semibold"
            style={{
              background: active ? primary : surface,
              color: active ? primaryForeground : muted,
              border: `1px solid ${active ? primary : border}`,
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
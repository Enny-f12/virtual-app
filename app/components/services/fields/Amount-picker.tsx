import { colors } from "@/lib/color";

export default function AmountPicker({
  presets, prefix = "₦", value, custom, onPreset, onCustomChange, customAllowed = true,
}: {
  presets: number[]; prefix?: string; value: number | null; custom: string;
  onPreset: (n: number) => void; onCustomChange: (v: string) => void; customAllowed?: boolean;
}) {
  const { primary, primaryForeground, surface, border, foreground } = colors;
  return (
    <div>
      <div className="flex gap-2 flex-wrap mb-3">
        {presets.map((p) => {
          const active = value === p && !custom;
          return (
            <button
              key={p}
              type="button"
              onClick={() => onPreset(p)}
              className="zapa-tap zapa-num px-4 py-2 rounded-full text-[12.5px] font-bold"
              style={{
                background: active ? primary : surface,
                color: active ? primaryForeground : foreground,
                border: `1px solid ${active ? primary : border}`,
              }}
            >
              {prefix}{p.toLocaleString()}
            </button>
          );
        })}
      </div>
      {customAllowed && (
        <input
          value={custom}
          onChange={(e) => onCustomChange(e.target.value.replace(/\D/g, ""))}
          placeholder="Or enter a custom amount"
          inputMode="numeric"
          className="zapa-field zapa-num w-full rounded-xl px-4 py-3 text-[14px] outline-none"
          style={{ background: surface, border: `1px solid ${border}`, color: foreground }}
        />
      )}
    </div>
  );
}
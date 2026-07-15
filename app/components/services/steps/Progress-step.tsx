import { colors } from "@/lib/color";

export default function ProgressSteps({ current }: { current: 1 | 2 }) {
  const { primary, border, muted } = colors;
  const steps = ["Details", "Payment"];
  return (
    <div className="mb-8">
      <div className="flex gap-2 mb-2">
        {steps.map((_, i) => (
          <div key={i} className="flex-1 h-1 rounded-full" style={{ background: i + 1 <= current ? primary : border }} />
        ))}
      </div>
      <div className="flex justify-between">
        {steps.map((label, i) => (
          <span key={label} className="text-[10.5px] font-semibold" style={{ color: i + 1 <= current ? primary : muted }}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
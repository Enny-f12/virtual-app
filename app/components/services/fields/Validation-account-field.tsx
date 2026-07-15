"use client";
import { useState, useEffect } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { colors } from "@/lib/color";

export default function ValidatedAccountField({
  label, placeholder, value, onChange, kind, verify, onVerified,
}: {
  label: string; placeholder: string; value: string; onChange: (v: string) => void;
  kind: "bills" | "cable"; verify: (kind: "bills" | "cable", v: string) => Promise<string>;
  onVerified: (name: string | null) => void;
}) {
  const { surface, border, muted, foreground, accent } = colors;
  const [status, setStatus] = useState<"idle" | "checking" | "done">("idle");
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus("idle");
    setName(null);
    onVerified(null);
    const digits = value.replace(/\D/g, "");
    if (digits.length < 10) return;
    setStatus("checking");
    let cancelled = false;
    verify(kind, digits).then((resolved) => {
      if (cancelled) return;
      setName(resolved);
      setStatus("done");
      onVerified(resolved);
    });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div>
      <span className="text-[12px] font-semibold mb-2 block" style={{ color: foreground }}>{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode="numeric"
        className="zapa-field w-full rounded-xl px-4 py-3 text-[14px] outline-none"
        style={{ background: surface, border: `1px solid ${border}`, color: foreground }}
      />
      {status === "checking" && (
        <div className="flex items-center gap-2 mt-2">
          <Loader2 size={13} className="animate-spin" style={{ color: muted }} />
          <span className="text-[11.5px]" style={{ color: muted }}>Verifying account…</span>
        </div>
      )}
      {status === "done" && name && (
        <div className="flex items-center gap-2 mt-2 rounded-lg px-3 py-2" style={{ background: `${accent}14` }}>
          <CheckCircle2 size={14} color={accent} />
          <span className="text-[12px]" style={{ color: foreground }}>Verified: <b>{name}</b></span>
        </div>
      )}
    </div>
  );
}
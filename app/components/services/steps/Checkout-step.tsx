"use client";
import { useState } from "react";
import { CreditCard, ShieldCheck, Loader2 } from "lucide-react";
import { colors } from "@/lib/color";
import type { Order } from "@/lib/order";

export default function CheckoutStep({ order, onBack, onConfirmed }: { order: Order; onBack: () => void; onConfirmed: () => void }) {
  const { primary, primaryDeep, primaryForeground, surface, border, muted, foreground, accent } = colors;
  const [processing, setProcessing] = useState(false);

  function handleConfirm() {
    setProcessing(true);
    // Mock only — swap for real Paystack Inline + /api/paystack/verify when ready.
    setTimeout(() => {
      setProcessing(false);
      onConfirmed();
    }, 1400);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl p-5" style={{ background: surface, border: `1px solid ${border}` }}>
        <h3 className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{ color: muted }}>Order summary</h3>
        <div className="flex flex-col gap-2.5">
          {order.lines.map((line) => (
            <div key={line.label} className="flex items-baseline gap-2">
              <span className="text-[12.5px]" style={{ color: muted }}>{line.label}</span>
              <span className="flex-1 border-b" style={{ borderBottomStyle: "dotted", borderColor: border }} />
              <span className="text-[13px] font-semibold" style={{ color: foreground }}>{line.value}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: `1px dashed ${border}` }}>
          <span className="text-[13px] font-bold" style={{ color: foreground }}>Total</span>
          <span className="zapa-num text-[19px] font-bold" style={{ color: primary }}>₦{order.amount.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <CreditCard size={15} style={{ color: muted }} />
        <span className="text-[13px]" style={{ color: foreground }}>You&apos;ll pay securely with Paystack — card, bank or USSD.</span>
      </div>
      <div className="flex items-center gap-2">
        <ShieldCheck size={14} style={{ color: accent }} />
        <span className="text-[11.5px]" style={{ color: muted }}>Encrypted end-to-end. We never store your card details.</span>
      </div>

      <div className="flex gap-3">
        <button type="button" onClick={onBack} disabled={processing} className="rounded-xl px-5 py-3.5 text-[13.5px] font-semibold disabled:opacity-40" style={{ border: `1px solid ${border}`, color: muted }}>
          Back
        </button>
        <button
          type="button"
          disabled={processing}
          onClick={handleConfirm}
          className="zapa-tap flex-1 rounded-xl py-3.5 text-[14px] font-bold flex items-center justify-center gap-2 disabled:opacity-60"
          style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
        >
          {processing ? (<><Loader2 size={16} className="animate-spin" /> Processing…</>) : (<><CreditCard size={16} /> Pay ₦{order.amount.toLocaleString()} with Paystack</>)}
        </button>
      </div>
    </div>
  );
}
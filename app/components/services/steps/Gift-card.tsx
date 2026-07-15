"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { colors } from "@/lib/color";
import { giftCardBrands } from "@/lib/service-catalog";
import AmountPicker from "@/app/components/services/fields/Amount-picker";
import type { Order } from "@/lib/order";

export default function GiftCardForm({ onContinue }: { onContinue: (order: Order) => void }) {
  const { foreground, muted, primary, primaryDeep, primaryForeground, surface, border } = colors;
  const [brandId, setBrandId] = useState(giftCardBrands[0].id);
  const [denom, setDenom] = useState<number | null>(giftCardBrands[0].denominations[1]);
  const [custom, setCustom] = useState("");
  const [qty, setQty] = useState(1);

  const brand = giftCardBrands.find((b) => b.id === brandId)!;
  const finalDenom = custom ? parseInt(custom, 10) : denom;
  const total = finalDenom ? finalDenom * qty : 0;
  const canContinue = !!finalDenom && finalDenom > 0;

  function handleContinue() {
    if (!canContinue || !finalDenom) return;
    onContinue({
      service: "gift-cards",
      title: `${brand.name} Gift Card`,
      lines: [{ label: "Brand", value: brand.name }, { label: "Region", value: brand.region }, { label: "Denomination", value: `$${finalDenom} × ${qty}` }],
      amount: total,
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="text-[12px] font-semibold mb-2 block" style={{ color: foreground }}>Brand</span>
        <div className="grid grid-cols-4 gap-2">
          {giftCardBrands.map((b) => {
            const active = b.id === brandId;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => { setBrandId(b.id); setDenom(b.denominations[1] ?? b.denominations[0]); setCustom(""); }}
                className="rounded-xl py-3 text-[11.5px] font-bold"
                style={{ background: surface, border: `1.5px solid ${active ? primary : border}`, color: active ? primary : foreground }}
              >
                {b.name}
              </button>
            );
          })}
        </div>
        <p className="text-[11.5px] mt-2" style={{ color: muted }}>Selected: <b style={{ color: foreground }}>{brand.name} — {brand.region}</b></p>
      </div>

      <div>
        <span className="text-[12px] font-semibold mb-2 block" style={{ color: foreground }}>Denomination</span>
        <AmountPicker
          prefix="$"
          presets={brand.denominations}
          value={denom}
          custom={custom}
          customAllowed={brand.customAllowed}
          onPreset={(p) => { setDenom(p); setCustom(""); }}
          onCustomChange={(v) => { setCustom(v); setDenom(null); }}
        />
      </div>

      <div>
        <span className="text-[12px] font-semibold mb-2 block" style={{ color: foreground }}>Quantity</span>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ border: `1px solid ${border}`, color: foreground }}>
            <Minus size={14} />
          </button>
          <span className="zapa-num font-bold text-[16px] w-6 text-center" style={{ color: foreground }}>{qty}</span>
          <button type="button" onClick={() => setQty((q) => q + 1)} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ border: `1px solid ${border}`, color: foreground }}>
            <Plus size={14} />
          </button>
        </div>
      </div>

      <button
        type="button"
        disabled={!canContinue}
        onClick={handleContinue}
        className="zapa-tap rounded-xl py-3.5 text-[14px] font-bold mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
      >
        {finalDenom ? `Continue — $${total.toLocaleString()}` : "Continue"}
      </button>
    </div>
  );
}
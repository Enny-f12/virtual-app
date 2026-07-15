"use client";
import { useState, useMemo } from "react";
import { colors } from "@/lib/color";
import { detectNetwork, networks } from "@/lib/network-detect";
import { dataPlans } from "@/lib/service-catalog";
import ChipGroup from "@/app/components/services/fields/Chip-group";
import PhoneField from "@/app/components/services/fields/Phone-field";
import type { Order } from "@/lib/order";

const validities = ["Daily", "Weekly", "Monthly"] as const;

export default function DataForm({ onContinue }: { onContinue: (order: Order) => void }) {
  const { foreground, muted, primary, primaryDeep, primaryForeground, surface, border, accent } = colors;
  const [phone, setPhone] = useState("");
  const [manualNetwork, setManualNetwork] = useState<string | null>(null);
  const [validity, setValidity] = useState<typeof validities[number]>("Daily");
  const [selectedPlan, setSelectedPlan] = useState<{ size: string; price: number } | null>(null);

  const detected = useMemo(() => detectNetwork(phone), [phone]);
  const network = manualNetwork ?? detected ?? "MTN";
  const plans = dataPlans[network].filter((p) => p.validity === validity);
  const validPhone = phone.replace(/\D/g, "").length === 11;
  const canContinue = validPhone && !!selectedPlan;

  function handleContinue() {
    if (!canContinue || !selectedPlan) return;
    onContinue({
      service: "data",
      title: `${network} Data — ${selectedPlan.size}`,
      lines: [{ label: "Network", value: network }, { label: "Recipient", value: phone }, { label: "Plan", value: `${selectedPlan.size} · ${validity}` }],
      amount: selectedPlan.price,
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="text-[12px] font-semibold mb-2 block" style={{ color: foreground }}>Network</span>
        <ChipGroup options={networks} value={network} onChange={(n) => { setManualNetwork(n); setSelectedPlan(null); }} />
      </div>

      <PhoneField value={phone} onChange={(v) => { setPhone(v); setManualNetwork(null); }} />

      <div>
        <span className="text-[12px] font-semibold mb-2 block" style={{ color: foreground }}>Plan</span>
        <ChipGroup options={[...validities]} value={validity} onChange={(v) => { setValidity(v as typeof validity); setSelectedPlan(null); }} />
        <div className="flex flex-col gap-2 mt-3">
          {plans.map((plan) => {
            const active = selectedPlan?.size === plan.size;
            return (
              <button
                key={plan.size}
                type="button"
                onClick={() => setSelectedPlan(plan)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-left"
                style={{ background: surface, border: `1.5px solid ${active ? primary : border}` }}
              >
                <div>
                  <div className="font-bold text-[13.5px]" style={{ color: foreground }}>{plan.size}</div>
                  <div className="text-[11px]" style={{ color: muted }}>Valid {validity.toLowerCase()}</div>
                </div>
                <span className="zapa-num font-bold text-[14px]" style={{ color: active ? primary : foreground }}>₦{plan.price.toLocaleString()}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
        <span className="text-[11.5px]" style={{ color: muted }}>Compare plans freely — nothing is charged until checkout.</span>
      </div>

      <button
        type="button"
        disabled={!canContinue}
        onClick={handleContinue}
        className="zapa-tap rounded-xl py-3.5 text-[14px] font-bold mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
      >
        Continue{selectedPlan ? ` — ₦${selectedPlan.price.toLocaleString()}` : ""}
      </button>
    </div>
  );
}
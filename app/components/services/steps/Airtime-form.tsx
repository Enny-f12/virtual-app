"use client";
import { useState, useMemo } from "react";
import { colors } from "@/lib/color";
import { detectNetwork, networks } from "@/lib/network-detect";
import ChipGroup from "@/app/components/services/fields/Chip-group";
import PhoneField from "@/app/components/services/fields/Phone-field";
import AmountPicker from "@/app/components/services/fields/Amount-picker";
import type { Order } from "@/lib/order";

const presets = [100, 200, 500, 1000, 2000];

export default function AirtimeForm({ onContinue }: { onContinue: (order: Order) => void }) {
  const { primary, primaryDeep, primaryForeground, muted } = colors;
  const [phone, setPhone] = useState("");
  const [manualNetwork, setManualNetwork] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const detected = useMemo(() => detectNetwork(phone), [phone]);
  const network = manualNetwork ?? detected;
  const finalAmount = customAmount ? parseInt(customAmount, 10) : amount;
  const validPhone = phone.replace(/\D/g, "").length === 11;
  const canContinue = !!network && validPhone && !!finalAmount && finalAmount > 0;

  function handleContinue() {
    if (!canContinue || !network || !finalAmount) return;
    onContinue({
      service: "airtime",
      title: `${network} Airtime`,
      lines: [{ label: "Network", value: network }, { label: "Recipient", value: phone }],
      amount: finalAmount,
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="text-[12px] font-semibold mb-2 block" style={{ color: colors.foreground }}>Network</span>
        <ChipGroup options={networks} value={network} onChange={(n) => setManualNetwork(n)} />
        {detected && !manualNetwork && <p className="text-[11.5px] mt-2" style={{ color: muted }}>Auto-detected from the number below.</p>}
      </div>

      <PhoneField value={phone} onChange={(v) => { setPhone(v); setManualNetwork(null); }} />

      <div>
        <span className="text-[12px] font-semibold mb-2 block" style={{ color: colors.foreground }}>Amount</span>
        <AmountPicker
          presets={presets}
          value={amount}
          custom={customAmount}
          onPreset={(p) => { setAmount(p); setCustomAmount(""); }}
          onCustomChange={(v) => { setCustomAmount(v); setAmount(null); }}
        />
      </div>

      <button
        type="button"
        disabled={!canContinue}
        onClick={handleContinue}
        className="zapa-tap rounded-xl py-3.5 text-[14px] font-bold mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
      >
        Continue{finalAmount ? ` — ₦${finalAmount.toLocaleString()}` : ""}
      </button>
    </div>
  );
}
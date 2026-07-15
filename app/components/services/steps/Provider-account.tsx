"use client";
import { useState } from "react";
import { colors } from "@/lib/color";
import { billers, cableProviders, mockVerifyAccount } from "@/lib/service-catalog";
import ChipGroup from "@/app/components/services/fields/Chip-group";
import ValidatedAccountField from "@/app/components/services/fields/Validation-account-field";
import AmountPicker from "@/app/components/services/fields/Amount-picker";
import type { Order } from "@/lib/order";

export default function ProviderAccountForm({ kind, onContinue }: { kind: "bills" | "cable"; onContinue: (order: Order) => void }) {
  const { foreground, primary, primaryDeep, primaryForeground, surface, border } = colors;

  const options = kind === "bills" ? billers.map((b) => b.name) : cableProviders.map((c) => c.name);
  const [providerName, setProviderName] = useState(options[0]);
  const [accountNumber, setAccountNumber] = useState("");
  const [verifiedName, setVerifiedName] = useState<string | null>(null);
  const [meterType, setMeterType] = useState<"Prepaid" | "Postpaid">("Prepaid");
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedBouquet, setSelectedBouquet] = useState<{ name: string; price: number } | null>(null);

  const cableProvider = cableProviders.find((c) => c.name === providerName);
  const finalAmount = kind === "bills" ? (customAmount ? parseInt(customAmount, 10) : amount) : selectedBouquet?.price ?? null;
  const canContinue = !!verifiedName && !!finalAmount && finalAmount > 0;

  function handleContinue() {
    if (!canContinue || !finalAmount) return;
    const lines = kind === "bills"
      ? [{ label: "Biller", value: providerName }, { label: "Type", value: meterType }, { label: "Meter", value: accountNumber }]
      : [{ label: "Provider", value: providerName }, { label: "Smart card", value: accountNumber }, { label: "Bouquet", value: selectedBouquet!.name }];

    onContinue({
      service: kind,
      title: kind === "bills" ? `${providerName} Bill` : `${providerName} — ${selectedBouquet?.name}`,
      lines,
      amount: finalAmount,
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="text-[12px] font-semibold mb-2 block" style={{ color: foreground }}>{kind === "bills" ? "Biller" : "Provider"}</span>
        <ChipGroup options={options} value={providerName} onChange={(v) => { setProviderName(v); setAccountNumber(""); setVerifiedName(null); setSelectedBouquet(null); }} />
      </div>

      {kind === "bills" && (
        <div>
          <span className="text-[12px] font-semibold mb-2 block" style={{ color: foreground }}>Meter type</span>
          <ChipGroup options={["Prepaid", "Postpaid"]} value={meterType} onChange={(v) => setMeterType(v as typeof meterType)} />
        </div>
      )}

      <ValidatedAccountField
        label={kind === "bills" ? "Meter number" : "Smart card / IUC number"}
        placeholder={kind === "bills" ? "0442 XXXX XXXX" : "7011 XXXX XX"}
        value={accountNumber}
        onChange={setAccountNumber}
        kind={kind}
        verify={mockVerifyAccount}
        onVerified={setVerifiedName}
      />

      {kind === "bills" ? (
        verifiedName && (
          <div>
            <span className="text-[12px] font-semibold mb-2 block" style={{ color: foreground }}>Amount</span>
            <AmountPicker
              presets={[1000, 2000, 5000, 10000]}
              value={amount}
              custom={customAmount}
              onPreset={(p) => { setAmount(p); setCustomAmount(""); }}
              onCustomChange={(v) => { setCustomAmount(v); setAmount(null); }}
            />
          </div>
        )
      ) : (
        verifiedName && cableProvider && (
          <div>
            <span className="text-[12px] font-semibold mb-2 block" style={{ color: foreground }}>Bouquet</span>
            <div className="flex flex-col gap-2">
              {cableProvider.bouquets.map((b) => {
                const active = selectedBouquet?.name === b.name;
                return (
                  <button
                    key={b.name}
                    type="button"
                    onClick={() => setSelectedBouquet(b)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-left"
                    style={{ background: surface, border: `1.5px solid ${active ? primary : border}` }}
                  >
                    <span className="font-bold text-[13.5px]" style={{ color: foreground }}>{b.name}</span>
                    <span className="zapa-num font-bold text-[14px]" style={{ color: active ? primary : foreground }}>₦{b.price.toLocaleString()}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )
      )}

      <button
        type="button"
        disabled={!canContinue}
        onClick={handleContinue}
        className="zapa-tap rounded-xl py-3.5 text-[14px] font-bold mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
      >
        {finalAmount ? `Continue — ₦${finalAmount.toLocaleString()}` : "Continue"}
      </button>
    </div>
  );
}
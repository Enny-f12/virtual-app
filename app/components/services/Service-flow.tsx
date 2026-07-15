"use client";
import { useState } from "react";
import ServiceShell from "@/app/components/services/Service-shell";
import ProgressSteps from "@/app/components/services/steps/Progress-step";
import AirtimeForm from "@/app/components/services/steps/Airtime-form";
import CheckoutStep from "@/app/components/services/steps/Checkout-step";
import SuccessStep from "@/app/components/services/steps/Success-step";
import ComingSoonStep from "@/app/components/services/steps/Coming-soon";
import type { Order } from "@/lib/order";
import type { ServiceMeta } from "@/lib/services-config";

type Step = "form" | "checkout" | "success";

export default function ServiceFlow({ config }: { config: ServiceMeta }) {
  const [step, setStep] = useState<Step>("form");
  const [order, setOrder] = useState<Order | null>(null);

  if (!config.built) {
    return (
      <ServiceShell title={config.label}>
        <ComingSoonStep label={config.label} />
      </ServiceShell>
    );
  }

  return (
    <ServiceShell title={step === "success" ? "Receipt" : `Buy ${config.label}`}>
      {step !== "success" && <ProgressSteps current={step === "form" ? 1 : 2} />}

      {step === "form" && config.slug === "airtime" && (
        <AirtimeForm onContinue={(o) => { setOrder(o); setStep("checkout"); }} />
      )}
      {step === "checkout" && order && (
        <CheckoutStep order={order} onBack={() => setStep("form")} onConfirmed={() => setStep("success")} />
      )}
      {step === "success" && order && (
        <SuccessStep order={order} onBuyAgain={() => { setOrder(null); setStep("form"); }} />
      )}
    </ServiceShell>
  );
}
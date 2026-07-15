"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { CheckCircle2, Check, Download } from "lucide-react";
import { colors } from "@/lib/color";
import type { Order } from "@/lib/order";

export default function SuccessStep({ order, onBuyAgain }: { order: Order; onBuyAgain: () => void }) {
  const { primary, primaryForeground, surface, border, muted, foreground, accent } = colors;
  const [saveBeneficiary, setSaveBeneficiary] = useState(false);
  // eslint-disable-next-line react-hooks/purity
  const reference = useMemo(() => `ZP-${Math.random().toString(36).slice(2, 10).toUpperCase()}`, []);
  const now = useMemo(() => new Date(), []);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: `${accent}1A` }}>
        <CheckCircle2 size={32} color={accent} />
      </div>
      <h2 className="zapa-num font-bold text-[22px]" style={{ color: foreground }}>{order.title} sent!</h2>
      <p className="text-[13.5px] mt-1.5 mb-6" style={{ color: muted }}>Delivered instantly — a receipt has been emailed to you.</p>

      <div className="w-full rounded-2xl p-5 text-left" style={{ background: surface, border: `1px solid ${border}` }}>
        <div className="flex flex-col gap-2.5">
          {order.lines.map((line) => (
            <div key={line.label} className="flex items-baseline gap-2">
              <span className="text-[12.5px]" style={{ color: muted }}>{line.label}</span>
              <span className="flex-1 border-b" style={{ borderBottomStyle: "dotted", borderColor: border }} />
              <span className="text-[13px] font-semibold" style={{ color: foreground }}>{line.value}</span>
            </div>
          ))}
          <div className="flex items-baseline gap-2">
            <span className="text-[12.5px]" style={{ color: muted }}>Reference</span>
            <span className="flex-1 border-b" style={{ borderBottomStyle: "dotted", borderColor: border }} />
            <span className="zapa-num text-[12.5px] font-semibold" style={{ color: foreground }}>{reference}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[12.5px]" style={{ color: muted }}>Date</span>
            <span className="flex-1 border-b" style={{ borderBottomStyle: "dotted", borderColor: border }} />
            <span className="text-[12.5px] font-semibold" style={{ color: foreground }}>
              {now.toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })}, {now.toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: `1px dashed ${border}` }}>
          <span className="text-[13px] font-bold" style={{ color: foreground }}>Total paid</span>
          <span className="zapa-num text-[18px] font-bold" style={{ color: primary }}>₦{order.amount.toLocaleString()}</span>
        </div>
      </div>

      <label className="flex items-center gap-2.5 mt-5 cursor-pointer self-start">
        <span
          onClick={() => setSaveBeneficiary((s) => !s)}
          className="w-4 h-4 rounded-[5px] flex items-center justify-center shrink-0"
          style={{ background: saveBeneficiary ? primary : "transparent", border: `1.5px solid ${saveBeneficiary ? primary : border}` }}
        >
          {saveBeneficiary && <Check size={11} color={primaryForeground} strokeWidth={3} />}
        </span>
        <span className="text-[12.5px]" style={{ color: muted }}>Save this number for next time</span>
      </label>

      <div className="flex gap-3 w-full mt-7">
        <button type="button" className="flex-1 rounded-xl py-3.5 text-[13.5px] font-semibold flex items-center justify-center gap-2" style={{ border: `1px solid ${border}`, color: foreground }}>
          <Download size={15} /> Receipt
        </button>
        <button type="button" onClick={onBuyAgain} className="flex-1 rounded-xl py-3.5 text-[13.5px] font-semibold" style={{ border: `1px solid ${border}`, color: foreground }}>
          Buy again
        </button>
      </div>
      <Link href="/dashboard" className="zapa-tap w-full rounded-xl py-3.5 text-[14px] font-bold mt-3 text-center" style={{ background: primary, color: primaryForeground }}>
        Done
      </Link>
    </div>
  );
}
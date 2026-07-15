import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, Clock } from "lucide-react";
import { colors } from "@/lib/color";
import { recentTransactions, TxStatus } from "@/lib/dashboard-data";

const statusConfig: Record<TxStatus, { icon: typeof CheckCircle2; color: string; label: string }> = {
  success: { icon: CheckCircle2, color: "#34D399", label: "Success" },
  failed: { icon: XCircle, color: "#F87171", label: "Failed" },
  pending: { icon: Clock, color: "#FBBF24", label: "Pending" },
};

export default function RecentTransactions() {
  const { surface, border, muted, foreground, primary } = colors;
  return (
    <div className="rounded-2xl p-5" style={{ background: surface, border: `1px solid ${border}` }}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-[15px]" style={{ color: foreground }}>Recent transactions</h3>
        <Link href="/history" className="flex items-center gap-1 text-[12px] font-semibold" style={{ color: primary }}>
          View all <ArrowRight size={12} strokeWidth={3} />
        </Link>
      </div>

      <div className="flex flex-col">
        {recentTransactions.map(({ id, name, meta, amount, status }, i) => {
          const { icon: StatusIcon, color, label } = statusConfig[status];
          return (
            <div
              key={id}
              className="flex items-center gap-3 py-3"
              style={{ borderTop: i === 0 ? "none" : `1px solid ${border}` }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: `${color}1A` }}>
                <StatusIcon size={15} color={color} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-semibold truncate" style={{ color: foreground }}>{name}</div>
                <div className="text-[11px]" style={{ color: muted }}>{meta}</div>
              </div>
              <span className="flex-1 border-b hidden sm:block" style={{ borderBottomStyle: "dotted", borderColor: border, maxWidth: 40 }} />
              <div className="text-right shrink-0">
                <div className="zapa-num text-[13px] font-bold" style={{ color: foreground }}>{amount}</div>
                <div className="text-[10px] font-medium" style={{ color }}>{label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
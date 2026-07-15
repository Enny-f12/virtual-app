import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { colors } from "@/lib/color";

export default function ServiceShell({ title, children }: { title: string; children: React.ReactNode }) {
  const { foreground, muted, border } = colors;
  return (
    <div className="max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link href="/dashboard" className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: muted }}>
          <ArrowLeft size={16} /> Back
        </Link>
        <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ border: `1px solid ${border}` }} aria-label="Help">
          <HelpCircle size={15} style={{ color: muted }} />
        </button>
      </div>
      <h1 className="zapa-num font-bold text-[22px] mb-6" style={{ color: foreground }}>{title}</h1>
      {children}
    </div>
  );
}
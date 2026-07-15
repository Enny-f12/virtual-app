import AppShell from "@/app/components/dashboard/App-shell";
import QuickRepeat from "@/app/components/dashboard/Quick-repeat";
import ServiceGrid from "@/app/components/dashboard/Service-grid";
import RecentTransactions from "@/app/components/dashboard/Recent-transactions";
import { colors } from "@/lib/color";
import { user } from "@/lib/dashboard-data";

export default function DashboardPage() {
  const { muted, foreground } = colors;

  return (
    <AppShell>
      <div className="max-w-3xl">
        <h1 className="zapa-num font-bold text-[24px] md:text-[28px]" style={{ color: foreground }}>
          Good afternoon, <span className="zapa-serif">{user.name}</span>
        </h1>
        <p className="text-[13.5px] mt-1 mb-7" style={{ color: muted }}>
          Pick a service below — you&apos;ll pay by card on the next screen, no wallet needed.
        </p>

        {/* Quick repeat */}
        <div className="mb-8">
          <h2 className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{ color: muted }}>
            Buy again
          </h2>
          <QuickRepeat />
        </div>

        {/* Services */}
        <div className="mb-8">
          <h2 className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{ color: muted }}>
            All services
          </h2>
          <ServiceGrid />
        </div>

        {/* Recent transactions */}
        <RecentTransactions />
      </div>
    </AppShell>
  );
}
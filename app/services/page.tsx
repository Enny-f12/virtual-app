import AppShell from "@/app/components/dashboard/App-shell";
import ServiceGrid from "@/app/components/dashboard/Service-grid";
import { colors } from "@/lib/color";

export default function ServicesPage() {
  const { foreground, muted } = colors;
  return (
    <AppShell>
      <div className="max-w-3xl">
        <h1 className="zapa-num font-bold text-[24px]" style={{ color: foreground }}>Services</h1>
        <p className="text-[13.5px] mt-1 mb-7" style={{ color: muted }}>Pick a service to get started.</p>
        <ServiceGrid />
      </div>
    </AppShell>
  );
}
import { notFound } from "next/navigation";
import AppShell from "@/app/components/dashboard/App-shell"; // adjust to your actual path/casing
import ServiceFlow from "@/app/components/services/Service-flow";
import { serviceRegistry, toServiceMeta } from "@/lib/services-config";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = serviceRegistry[slug];

  if (!config) {
    notFound();
  }

  return (
    <AppShell>
      <ServiceFlow config={toServiceMeta(config)} />
    </AppShell>
  );
}
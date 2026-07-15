import { Smartphone, Wifi, Receipt, Tv, Gift, LucideIcon } from "lucide-react";

export type ServiceMeta = {
  slug: string;
  label: string;
  built: boolean;
};

export type ServiceConfig = ServiceMeta & { icon: LucideIcon };

export const serviceRegistry: Record<string, ServiceConfig> = {
  airtime: { slug: "airtime", label: "Airtime", icon: Smartphone, built: true },
  data: { slug: "data", label: "Data", icon: Wifi, built: false },
  bills: { slug: "bills", label: "Bill Payment", icon: Receipt, built: false },
  cable: { slug: "cable", label: "Cable TV", icon: Tv, built: false },
  "gift-cards": { slug: "gift-cards", label: "Gift Cards", icon: Gift, built: false },
};

// Safe to pass from a Server Component into a Client Component — no icon reference.
export function toServiceMeta({ slug, label, built }: ServiceConfig): ServiceMeta {
  return { slug, label, built };
}
import { Smartphone, Wifi, Receipt, Tv, Gift, Plane, LucideIcon } from "lucide-react";

export type ServiceKey = "airtime" | "data" | "bills" | "cable" | "giftcards" | "flights";

export const services: {
  key: ServiceKey; label: string; icon: LucideIcon; href: string; comingSoon?: boolean;
}[] = [
  { key: "airtime", label: "Airtime", icon: Smartphone, href: "/services/airtime" },
  { key: "data", label: "Data", icon: Wifi, href: "/services/data" },
  { key: "bills", label: "Bill Payment", icon: Receipt, href: "/services/bills" },
  { key: "cable", label: "Cable TV", icon: Tv, href: "/services/cable" },
  { key: "giftcards", label: "Gift Cards", icon: Gift, href: "/services/gift-cards" },
  { key: "flights", label: "Flights", icon: Plane, href: "#", comingSoon: true },
];

export const quickRepeat = [
  { id: "1", label: "MTN", sub: "0803 ••• 4521", icon: Smartphone, href: "/services/airtime?repeat=1" },
  { id: "2", label: "DStv", sub: "Compact", icon: Tv, href: "/services/cable?repeat=2" },
  { id: "3", label: "AEDC", sub: "Prepaid meter", icon: Receipt, href: "/services/bills?repeat=3" },
  { id: "4", label: "Glo Data", sub: "2.5GB", icon: Wifi, href: "/services/data?repeat=4" },
];

export type TxStatus = "success" | "failed" | "pending";

export const recentTransactions: {
  id: string; name: string; meta: string; amount: string; status: TxStatus;
}[] = [
  { id: "t1", name: "MTN Airtime — 0803 ••• 4521", meta: "Today, 9:41am", amount: "₦500", status: "success" },
  { id: "t2", name: "AEDC Electricity", meta: "Today, 8:02am", amount: "₦5,000", status: "success" },
  { id: "t3", name: "GOtv Max", meta: "Yesterday", amount: "₦6,300", status: "failed" },
  { id: "t4", name: "Steam Gift Card $10", meta: "2 days ago", amount: "₦16,200", status: "success" },
  { id: "t5", name: "Glo Data 2.5GB", meta: "3 days ago", amount: "₦600", status: "pending" },
];


export const user = { name: "Chidinma", fullName: "Chidinma Adeyemi", phone: "0803 000 4521" };
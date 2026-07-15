import { Wifi, Receipt, Tv, Gift, Smartphone, ShieldCheck, CreditCard, CheckCircle2, Star } from "lucide-react";

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop`;

export const IMAGES = {
  hero: img("photo-1768244016593-8ca75b15bc92"),
  airtime: img("photo-1624574337423-7ea725c5540c"),
  data: img("photo-1606814540563-5c02d62fd409"),
  bills: img("photo-1534825696654-39efb2c8453d"),
  cable: img("photo-1763827657709-b1bbc3c4945b"),
  gift: img("photo-1549465220-1a8b9238cd48"),
  testiChidinma: img("photo-1531123414780-f74242c2b052"),
  testiTunde: img("photo-1506277886164-e25aa3f4ef7f"),
  testiGrace: img("photo-1535997018565-142937b9e38d"),
};

export const services = [
  {
    icon: Smartphone, title: "Airtime", tag: "MTN · Airtel · Glo · 9mobile",
    copy: "Top up any network in seconds. No USSD codes, no waiting.",
    image: IMAGES.airtime, span: "lg:col-span-6", height: "h-72 lg:h-80",
  },
  {
    icon: Wifi, title: "Data", tag: "All networks",
    copy: "Every bundle, best rate, delivered instantly.",
    image: IMAGES.data, span: "lg:col-span-3", height: "h-72 lg:h-80",
  },
  {
    icon: Receipt, title: "Bill Payment", tag: "Electricity & utilities",
    copy: "Pay a bill, get your prepaid token immediately.",
    image: IMAGES.bills, span: "lg:col-span-3", height: "h-72 lg:h-80",
  },
  {
    icon: Tv, title: "Cable TV", tag: "DStv · GOtv · Startimes",
    copy: "Renew your subscription without leaving the couch.",
    image: IMAGES.cable, span: "lg:col-span-6", height: "h-64",
  },
  {
    icon: Gift, title: "Gift Cards", tag: "iTunes · Amazon · Steam",
    copy: "Buy and redeem gift cards, code delivered instantly.",
    image: IMAGES.gift, span: "lg:col-span-6", height: "h-64",
  },
];

export const steps = [
  { n: "01", title: "Choose a service", copy: "Airtime, data, a bill, cable TV or a gift card — pick what you need." },
  { n: "02", title: "Enter the details", copy: "Phone number, meter number, smart card ID, or gift card info." },
  { n: "03", title: "Pay with your card", copy: "One secure card payment. No wallet, no funding step — instant delivery." },
];

export const whyUs = [
  { icon: ShieldCheck, title: "Instant Delivery", copy: "Airtime, data, tokens and codes arrive within seconds of payment." },
  { icon: CreditCard, title: "Secure Card Payments", copy: "Every transaction is encrypted end-to-end; we never store your card." },
  { icon: CheckCircle2, title: "No Hidden Fees", copy: "The price you see at checkout is the price you pay. Always." },
  { icon: Star, title: "24/7 Support", copy: "Real humans on live chat and WhatsApp if a transaction needs help." },
];

export const testimonials = [
  { quote: "I pay my AEDC bill here every month now. The meter name check before I pay is what sold me.", name: "Chidinma A.", place: "Abuja", photo: IMAGES.testiChidinma },
  { quote: "Cable TV renewal used to mean queuing at an agent. Now it's a minute on my phone, card and done.", name: "Tunde O.", place: "Lagos", photo: IMAGES.testiTunde },
  { quote: "Bought an iTunes gift card for my daughter abroad — the code showed up instantly. No wallet nonsense.", name: "Grace E.", place: "Port Harcourt", photo: IMAGES.testiGrace },
];

export const stats = [
  { value: "50,000+", label: "Active users" },
  { value: "₦2.1B+", label: "Transacted" },
  { value: "<5s", label: "Avg. transaction time" },
  { value: "99.9%", label: "Uptime" },
];
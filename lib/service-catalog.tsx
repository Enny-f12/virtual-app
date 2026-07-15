export const dataPlans: Record<string, { validity: "Daily" | "Weekly" | "Monthly"; size: string; price: number }[]> = {
  MTN: [
    { validity: "Daily", size: "1GB", price: 350 },
    { validity: "Daily", size: "2.5GB", price: 600 },
    { validity: "Weekly", size: "5GB", price: 1500 },
    { validity: "Monthly", size: "10GB", price: 3500 },
  ],
  Airtel: [
    { validity: "Daily", size: "1.5GB", price: 400 },
    { validity: "Weekly", size: "6GB", price: 1600 },
    { validity: "Monthly", size: "11GB", price: 3600 },
  ],
  Glo: [
    { validity: "Daily", size: "2GB", price: 350 },
    { validity: "Weekly", size: "7.5GB", price: 1500 },
    { validity: "Monthly", size: "13.5GB", price: 3500 },
  ],
  "9mobile": [
    { validity: "Daily", size: "1GB", price: 300 },
    { validity: "Weekly", size: "4.5GB", price: 1400 },
    { validity: "Monthly", size: "11GB", price: 3400 },
  ],
};

export const billers = [
  { id: "aedc", name: "AEDC — Abuja Electricity", supportsPrepaid: true },
  { id: "ekedc", name: "EKEDC — Eko Electricity", supportsPrepaid: true },
  { id: "ikedc", name: "IKEDC — Ikeja Electric", supportsPrepaid: true },
];

export const cableProviders = [
  { id: "dstv", name: "DStv", bouquets: [{ name: "Compact", price: 19000 }, { name: "Compact Plus", price: 29500 }, { name: "Premium", price: 44500 }] },
  { id: "gotv", name: "GOtv", bouquets: [{ name: "Max", price: 6300 }, { name: "Jolli", price: 4850 }, { name: "Jinja", price: 3300 }] },
  { id: "startimes", name: "Startimes", bouquets: [{ name: "Nova", price: 1900 }, { name: "Basic", price: 3700 }, { name: "Smart", price: 5100 }] },
];

export const giftCardBrands = [
  { id: "amazon", name: "Amazon", region: "US ($)", denominations: [10, 25, 50, 100], customAllowed: true },
  { id: "itunes", name: "iTunes", region: "US ($)", denominations: [10, 25, 50, 100], customAllowed: false },
  { id: "google-play", name: "Google Play", region: "US ($)", denominations: [10, 25, 50], customAllowed: false },
  { id: "steam", name: "Steam", region: "US ($)", denominations: [10, 20, 50], customAllowed: false },
];

// Mock account-name lookup for Bills/Cable "verify before you pay" step.
export async function mockVerifyAccount(kind: "bills" | "cable"): Promise<string> {
  await new Promise((r) => setTimeout(r, 700));
  return kind === "bills" ? "C. OKAFOR" : "O. BELLO";
}
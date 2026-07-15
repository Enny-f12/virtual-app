const prefixMap: Record<string, string[]> = {
  MTN: ["0803", "0806", "0703", "0706", "0813", "0814", "0816", "0903", "0906", "0913"],
  Airtel: ["0802", "0808", "0812", "0708", "0701", "0902", "0904", "0907", "0912"],
  Glo: ["0805", "0807", "0811", "0815", "0905", "0915"],
  "9mobile": ["0809", "0817", "0818", "0908", "0909"],
};

export function detectNetwork(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  const prefix = digits.slice(0, 4);
  for (const [network, prefixes] of Object.entries(prefixMap)) {
    if (prefixes.includes(prefix)) return network;
  }
  return null;
}

export const networks = ["MTN", "Airtel", "Glo", "9mobile"];
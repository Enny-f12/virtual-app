import { colors } from "@/lib/color";

const networks = ["MTN", "Airtel", "Glo", "9mobile"];
const cards = ["Visa", "Mastercard", "Verve"];

function ChipBadge({ label, tone }: { label: string; tone: "network" | "card" }) {
  const isCard = tone === "card";
  return (
    <div className="zapa-tap flex flex-col items-center gap-2 cursor-default">
      <div
        className="relative w-11 h-8 rounded-[5px] overflow-hidden"
        style={{
          background: isCard
            ? "linear-gradient(155deg, #C9CDD6 0%, #8B93A1 55%, #C9CDD6 100%)"
            : "linear-gradient(155deg, #F3D98B 0%, #C9972B 55%, #F3D98B 100%)",
          border: "1px solid rgba(0,0,0,0.12)",
        }}
      >
        {/* EMV chip contact lines */}
        <div className="absolute inset-0 flex flex-col justify-evenly py-1">
          <div className="h-px w-full" style={{ background: "rgba(0,0,0,0.22)" }} />
          <div className="h-px w-full" style={{ background: "rgba(0,0,0,0.22)" }} />
        </div>
        <div className="absolute inset-0 flex justify-evenly px-1.5">
          <div className="w-px h-full" style={{ background: "rgba(0,0,0,0.18)" }} />
          <div className="w-px h-full" style={{ background: "rgba(0,0,0,0.18)" }} />
        </div>
      </div>
      <span className="zapa-num text-[11px] font-bold tracking-tight">{label}</span>
    </div>
  );
}

export default function TrustBar() {
  const { border, muted } = colors;

  return (
    <section className="border-b" style={{ borderColor: border }}>
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-10">
        <p className="text-center text-[11px] font-semibold tracking-[0.15em] uppercase mb-8" style={{ color: muted }}>
          Every network, every card — one checkout
        </p>

        <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
          {networks.map((n) => (
            <ChipBadge key={n} label={n} tone="network" />
          ))}

          {/* perforated ticket-stub divider */}
          <div className="hidden sm:flex flex-col items-center gap-1.5 self-stretch justify-center px-2">
            <span
              className="flex-1 border-l"
              style={{ borderLeftStyle: "dashed", borderColor: border, minHeight: 40 }}
            />
          </div>

          {cards.map((c) => (
            <ChipBadge key={c} label={c} tone="card" />
          ))}
        </div>

        <p className="text-center text-[10.5px] mt-8" style={{ color: muted }}>
          Tap a network or card at checkout — Zapa reads it automatically, no manual selection needed.
        </p>
      </div>
    </section>
  );
}
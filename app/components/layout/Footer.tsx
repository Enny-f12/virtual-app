"use client";
import { useState, FormEvent } from "react";
import { Zap, ArrowRight, Lock } from "lucide-react";
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { colors } from "@/lib/color";

const socials = [
  { Icon: FaXTwitter, href: "#", label: "X (Twitter)" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaWhatsapp, href: "#", label: "WhatsApp" },
];

export default function Footer() {
  const { border, muted, foreground, surface, primary, primaryDeep, primaryForeground, accent } = colors;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    // TODO: wire to actual mailing-list endpoint
    setStatus("done");
    setEmail("");
  }

  return (
    <footer className="border-t" style={{ borderColor: border }}>
      {/* Newsletter — styled as the last line item on the receipt */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12">
        <div
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-6"
          style={{ background: `${primary}0D`, border: `1px dashed ${primary}55` }}
        >
          <div>
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: primary }}>
              Before you go
            </span>
            <h3 className="zapa-num font-bold text-[20px] md:text-[22px] mt-1.5">
              Get ₦100 off your first top-up
            </h3>
            <p className="text-[13px] mt-1" style={{ color: muted }}>
              Occasional emails about new networks, billers and gift card drops. Unsubscribe anytime.
            </p>
          </div>

          {status === "idle" ? (
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 md:w-64 rounded-full px-4 py-2.5 text-[13px] outline-none"
                style={{ background: surface, border: `1px solid ${border}`, color: foreground }}
              />
              <button
                type="submit"
                className="zapa-tap shrink-0 rounded-full px-5 py-2.5 text-[13px] font-bold flex items-center gap-1.5"
                style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
              >
                Subscribe <ArrowRight size={14} strokeWidth={3} />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: accent }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
              You&apos;re on the list — check your inbox to confirm.
            </div>
          )}
        </div>
      </div>

      {/* Link columns */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${primary}, #FFC069)` }}
            >
              <Zap size={14} color={primaryForeground} fill={primaryForeground} />
            </div>
            <span className="zapa-num font-bold text-[16px]">Zapa</span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed max-w-55" style={{ color: muted }}>
            One place for airtime, data, bills, cable TV and gift cards — pay straight from your card.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="zapa-tap w-8 h-8 rounded-full flex items-center justify-center"
                style={{ border: `1px solid ${border}`, color: muted }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[13px] font-bold mb-3">Product</h4>
          <ul className="flex flex-col gap-2 text-[13px]" style={{ color: muted }}>
            <li>Airtime</li><li>Data</li><li>Bill Payment</li><li>Cable TV</li><li>Gift Cards</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[13px] font-bold mb-3">Company</h4>
          <ul className="flex flex-col gap-2 text-[13px]" style={{ color: muted }}>
            <li>About</li><li>Careers</li><li>Support</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[13px] font-bold mb-3">Legal</h4>
          <ul className="flex flex-col gap-2 text-[13px]" style={{ color: muted }}>
            <li>Privacy Policy</li><li>Terms of Service</li><li>Refund Policy</li>
          </ul>
        </div>
      </div>

      {/* Tear strip */}
      <div
        className="h-3"
        style={{
          backgroundImage: `radial-gradient(circle at 12px 0, transparent 6px, ${border} 6px)`,
          backgroundSize: "24px 12px",
        }}
      />

      {/* Bottom bar — barcode motif */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[12px]" style={{ color: muted }}>© 2026 Zapa. All rights reserved.</span>

        <div className="flex items-end gap-0.5" aria-hidden="true">
          {[3, 1, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3, 2, 1, 4, 1, 2, 1, 3].map((w, i) => (
            <span key={i} style={{ width: 1.5, height: 14 + w * 2, background: muted, opacity: 0.35 }} />
          ))}
        </div>

        <span className="flex items-center gap-1.5 text-[12px]" style={{ color: muted }}>
          <Lock size={12} /> 256-bit encryption
        </span>
      </div>
    </footer>
  );
}
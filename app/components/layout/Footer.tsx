import { Zap } from "lucide-react";
import { colors } from "@/lib/color";

export default function Footer() {
  const { border, muted, primary, primaryForeground } = colors;

  return (
    <footer className="border-t" style={{ borderColor: border }}>
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
      <div className="text-center text-[12px] py-5 border-t" style={{ color: muted, borderColor: border }}>
        © 2026 Zapa. All rights reserved.
      </div>
    </footer>
  );
}
"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, Check } from "lucide-react";
import { colors } from "@/lib/color";
import { testimonials } from "@/lib/home-data";
import AuthShell from "@/app/components/auth/Auth-shell";
import TextField from "@/app/components/auth/Text-field";

function getStrength(pw: string) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

export default function GetStartedPage() {
  const { primary, primaryDeep, primaryForeground, muted, border, foreground, accent } = colors;
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const strength = useMemo(() => getStrength(password), [password]);
  const strengthLabel = ["Too short", "Weak", "Okay", "Good", "Strong"][strength];
  const strengthColor = ["#E5484D", "#E5484D", "#E5A03D", accent, accent][strength];

  return (
    <AuthShell
      eyebrow="Join 50,000+ Nigerians"
      headline={<>Create your account,<br />top up in two minutes.</>}
      testimonial={testimonials[2]}
    >
      <h2 className="zapa-num font-bold text-[26px]">Get started</h2>
      <p className="text-[13.5px] mt-1.5 mb-7" style={{ color: muted }}>
        Already have an account?{" "}
        <Link href="/login" className="font-semibold" style={{ color: primary }}>Log in</Link>
      </p>

      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <TextField id="name" label="Full name" type="text" placeholder="Chidinma Adeyemi" className="zapa-field" />
        <TextField id="email" label="Email address" type="email" placeholder="you@email.com" className="zapa-field" />
        <TextField id="phone" label="Phone number" type="tel" placeholder="0803 000 0000" className="zapa-field" />

        <div>
          <TextField
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="zapa-field pr-11"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="relative float-right -mt-9 mr-3.5"
            style={{ color: muted }}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>

          {password.length > 0 && (
            <div className="mt-2">
              <div className="flex gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="h-1 flex-1 rounded-full" style={{ background: i < strength ? strengthColor : border }} />
                ))}
              </div>
              <span className="text-[11.5px] mt-1 inline-block" style={{ color: strengthColor }}>{strengthLabel}</span>
            </div>
          )}
        </div>

        <label className="flex items-start gap-2.5 mt-1 cursor-pointer">
          <span
            onClick={() => setAgreed((a) => !a)}
            className="mt-0.5 w-4 h-4 rounded-[5px] flex items-center justify-center shrink-0"
            style={{ background: agreed ? primary : "transparent", border: `1.5px solid ${agreed ? primary : border}` }}
          >
            {agreed && <Check size={11} color={primaryForeground} strokeWidth={3} />}
          </span>
          <span className="text-[12.5px] leading-snug" style={{ color: muted }}>
            I agree to Zapa&apos;s{" "}
            <Link href="/terms" className="font-semibold" style={{ color: foreground }}>Terms of Service</Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-semibold" style={{ color: foreground }}>Privacy Policy</Link>.
          </span>
        </label>

        <button
          type="submit"
          disabled={!agreed}
          className="zapa-tap rounded-xl py-3.5 text-[14px] font-bold flex items-center justify-center gap-2 mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
        >
          Create free account <ArrowRight size={15} strokeWidth={3} />
        </button>
      </form>

      <div className="flex items-center gap-2 mt-7">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
        <span className="text-[11.5px]" style={{ color: muted }}>No wallet to fund — you pay by card only when you buy something.</span>
      </div>
    </AuthShell>
  );
}
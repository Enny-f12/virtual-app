"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { colors } from "@/lib/color";
import { testimonials } from "@/lib/home-data";
import AuthShell from "@/app/components/auth/Auth-shell";
import TextField from "@/app/components/auth/Text-field";

type Mode = "password" | "otp";
type OtpStep = "phone" | "code";

export default function LoginPage() {
  const { primary, primaryDeep, primaryForeground, muted, border, surface, accent, foreground } = colors;
  const [mode, setMode] = useState<Mode>("password");
  const [otpStep, setOtpStep] = useState<OtpStep>("phone");
  const [showPassword, setShowPassword] = useState(false);
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  function handleCodeChange(i: number, value: string) {
    if (!/^\d?$/.test(value)) return;
    const next = [...code];
    next[i] = value;
    setCode(next);
    if (value && i < 5) document.getElementById(`otp-${i + 1}`)?.focus();
  }

  return (
    <AuthShell
      eyebrow="Welcome back"
      headline={<>Log in and top up<br />in under a minute.</>}
      testimonial={testimonials[0]}
    >
      <h2 className="zapa-num font-bold text-[26px]">Log in</h2>
      <p className="text-[13.5px] mt-1.5 mb-7" style={{ color: muted }}>
        New to Zapa?{" "}
        <Link href="/get-started" className="font-semibold" style={{ color: primary }}>
          Create a free account
        </Link>
      </p>

      <div className="flex gap-1 p-1 rounded-xl mb-6" style={{ background: surface, border: `1px solid ${border}` }}>
        {(["password", "otp"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className="flex-1 rounded-lg py-2 text-[13px] font-semibold transition-colors"
            style={{ background: mode === m ? primary : "transparent", color: mode === m ? primaryForeground : muted }}
          >
            {m === "password" ? "Password" : "One-time code"}
          </button>
        ))}
      </div>

      {mode === "password" ? (
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <TextField id="email" label="Email or phone number" type="text" placeholder="you@email.com" className="zapa-field" />
          <div>
            <TextField
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="zapa-field pr-11"
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
          </div>
          <div className="flex justify-end -mt-2">
            <Link href="/forgot-password" className="text-[12.5px] font-semibold" style={{ color: primary }}>
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="zapa-tap rounded-xl py-3.5 text-[14px] font-bold flex items-center justify-center gap-2 mt-2"
            style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
          >
            Log in <ArrowRight size={15} strokeWidth={3} />
          </button>
        </form>
      ) : otpStep === "phone" ? (
        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setOtpStep("code"); }}>
          <TextField id="phone" label="Phone number" type="tel" placeholder="0803 000 0000" className="zapa-field" />
          <button
            type="submit"
            className="zapa-tap rounded-xl py-3.5 text-[14px] font-bold flex items-center justify-center gap-2 mt-2"
            style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
          >
            Send code <ArrowRight size={15} strokeWidth={3} />
          </button>
        </form>
      ) : (
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-[12.5px] font-semibold" style={{ color: foreground }}>Enter the 6-digit code</label>
            <p className="text-[12px] mt-0.5" style={{ color: muted }}>Sent to 0803 000 0000</p>
            <div className="flex gap-2 mt-3">
              {code.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  value={digit}
                  onChange={(e) => handleCodeChange(i, e.target.value)}
                  maxLength={1}
                  inputMode="numeric"
                  className="zapa-field zapa-num w-11 h-13 rounded-xl text-center text-[18px] font-bold outline-none"
                  style={{ background: surface, border: `1px solid ${border}`, color: foreground }}
                />
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="zapa-tap rounded-xl py-3.5 text-[14px] font-bold flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDeep})`, color: primaryForeground }}
          >
            Verify & log in <ArrowRight size={15} strokeWidth={3} />
          </button>
          <button
            type="button"
            onClick={() => setOtpStep("phone")}
            className="text-[12.5px] font-semibold text-center"
            style={{ color: muted }}
          >
            Use a different number
          </button>
        </form>
      )}

      <div className="flex items-center gap-2 mt-8">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
        <span className="text-[11.5px]" style={{ color: muted }}>Your card details are never stored on our servers.</span>
      </div>
    </AuthShell>
  );
}
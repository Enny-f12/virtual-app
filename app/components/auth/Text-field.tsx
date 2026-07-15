import { InputHTMLAttributes, forwardRef } from "react";
import { colors } from "@/lib/color";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ label, id, className, ...props }, ref) => {
  const { foreground, surface, border } = colors;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[12.5px] font-semibold" style={{ color: foreground }}>
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        {...props}
        className={`rounded-xl px-4 py-3 text-[14px] outline-none ${className ?? ""}`}
        style={{ background: surface, border: `1px solid ${border}`, color: foreground }}
      />
    </div>
  );
});
TextField.displayName = "TextField";
export default TextField;
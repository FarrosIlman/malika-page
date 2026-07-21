import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
      // Solid — uses token, hover/active via CSS vars
      default:
        "bg-primary text-primary-foreground font-medium " +
        "hover:bg-[--color-primary-hover] active:bg-[--color-primary-active] " +
        "focus-visible:ring-2 focus-visible:ring-primary/40 " +
        "shadow-sm transition-colors duration-200",
      secondary:
        "bg-surface text-foreground border border-border " +
        "hover:border-[rgba(200,169,126,0.35)] hover:text-primary " +
        "transition-colors duration-200",
      // Outline ghost — same as .btn-ghost in CSS
      outline:
        "border border-[rgba(200,169,126,0.2)] bg-transparent text-foreground/70 " +
        "hover:text-foreground hover:border-[rgba(200,169,126,0.4)] " +
        "transition-colors duration-200",
      ghost:
        "bg-transparent text-foreground/70 hover:text-foreground hover:bg-white/5 " +
        "transition-colors duration-200",
      link:
        "text-primary underline-offset-4 hover:underline p-0 h-auto",
    };

    const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
      default: "h-10 px-5 py-2 text-sm",
      sm:      "h-8 px-3 text-xs rounded-md",
      lg:      "h-12 px-7 text-sm rounded-full",
      icon:    "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full",
          "disabled:pointer-events-none disabled:opacity-50",
          "focus-visible:outline-none",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };

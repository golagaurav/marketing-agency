import * as React from "react";
import { cn } from "../../lib/utils";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "title" | "subtitle" | "body";
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = "body", children, ...props }, ref) => {
    const baseStyle = "text-gray-800";
    let variantStyle = "";

    if (variant === "title") variantStyle = "text-2xl font-bold";
    else if (variant === "subtitle") variantStyle = "text-xl font-semibold text-gray-600";

    return (
      <p
        className={cn(baseStyle, variantStyle, className)}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

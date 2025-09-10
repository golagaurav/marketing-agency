import * as React from "react";
import { cn } from "../../lib/utils";

export interface ScrollPageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ScrollPage = React.forwardRef<HTMLDivElement, ScrollPageProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("h-screen overflow-y-scroll bg-gray-100 p-4", className)}
        ref={ref}
        {...props}
      >
        {[...Array(30).keys()].map((num) => (
          <div
            key={num}
            className="mb-4 p-4 bg-white rounded shadow"
          >
            Scroll item #{num + 1}
          </div>
        ))}
      </div>
    );
  }
);

ScrollPage.displayName = "ScrollPage";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  imageUrl?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, description, imageUrl, ...props }, ref) => {
    return (
      <div
        className={cn(
          "max-w-sm rounded overflow-hidden shadow-lg bg-white",
          className
        )}
        ref={ref}
        {...props}
      >
        {imageUrl && <img className="w-full" src={imageUrl} alt={title} />}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

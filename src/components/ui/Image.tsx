import * as React from "react";
import { cn } from "../../lib/utils";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <img
        className={cn("rounded shadow-md", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

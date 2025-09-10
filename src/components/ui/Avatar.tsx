import * as React from "react";
import { cn } from "../../lib/utils";

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
}

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, size = 48, alt, ...props }, ref) => {
    return (
      <img
        className={cn(
          "rounded-full border-2 border-gray-300 object-cover",
          className
        )}
        style={{ width: size, height: size }}
        alt={alt}
        ref={ref}
        {...props}
      />
    );
  }
);

Avatar.displayName = "Avatar";

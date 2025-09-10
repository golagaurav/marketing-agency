import * as React from "react";
import { cn } from "../../lib/utils";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, ...props }, ref) => {
    return (
      <form
        className={cn(
          "max-w-md mx-auto p-4 bg-white rounded shadow-md space-y-4",
          className
        )}
        ref={ref}
        {...props}
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    );
  }
);

Form.displayName = "Form";

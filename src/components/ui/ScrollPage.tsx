import * as React from "react";

export const ScrollPage = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="max-h-[400px] overflow-y-scroll p-4 bg-gray-100 rounded"
      {...props}
    >
      {Array.from({ length: 30 }, (_, num) => (
        <div
          key={num}
          className="mb-4 p-4 bg-white rounded shadow"
        >
          Scroll item #{num + 1}
        </div>
      ))}
    </div>
  );
};

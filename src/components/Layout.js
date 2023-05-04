import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default React.forwardRef(function Layout({ children }, ref) {
  return (
    <>
      <div ref={ref} className="p-auto">
        <main className={`relative ${inter.className}`}>
            {children}
        </main>
      </div>
    </>
  );
});

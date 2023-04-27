import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default React.forwardRef(function Layout({ children }, ref) {
  return (
    <>
      <div ref={ref} className="p-auto">
        <main className={`relative min-h-screen mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ${inter.className}`}>
            {children}
        </main>
      </div>
    </>
  );
});

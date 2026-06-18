import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        {/* TOP LOADER */}
        <NextTopLoader
          color="#FACC15" // yellow (shadcn + yaalo style)
          height={3}
          showSpinner={false}
        />

        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import ReduxProvider from "../redux/Reduxprovider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <NextTopLoader
          color="#FACC15" // yellow (shadcn + yaalo style)
          height={3}
          showSpinner={false}
        />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

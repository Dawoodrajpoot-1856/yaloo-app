import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

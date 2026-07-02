import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "@/app/globals.css"; // Your styles

const locales = ["en", "es"];

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // Sahi tareeqa: params ko batao ki yeh ek Promise hai jo object return karega
  params: Promise<{ locale?: string }>;
}) {
  // Ab yeh await bilkul sahi tareeqe se type-check ho jayega
  const { locale = "en" } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="font-sans antialiased">
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

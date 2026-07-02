import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import ReduxProvider from "@/redux/Reduxprovider";
import NextTopLoader from "nextjs-toploader"; // 1. Import toploader

const locales = ["en", "es", "ar", "tr", "nl"];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <ReduxProvider>
      {/* 2. TopLoader ko add kiya aur yellow color (#FFD700 ya #FFFF00) de diya */}
      <NextTopLoader
        color="#FFD700" // Aapka Yellow Color
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false} // Spinner ko hide karne ke liye (sirf top bar dikhegi)
        easing="ease"
        speed={200}
      />
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ReduxProvider>
  );
}

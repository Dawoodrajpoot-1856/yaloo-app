// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin"; // 1. Is plugin ko import kiya

const nextConfig: NextConfig = {
  /* agar aapki koi purani config options hain to wo yahan rahengi */
};

const withNextIntl = createNextIntlPlugin(); // 2. Plugin ka instance banaya

export default withNextIntl(nextConfig); // 3. nextConfig ko isme wrap karke export kiya

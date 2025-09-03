import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/Themming/theme-provider";
import AuthProvider from "@/lib/providers/next-auth-provider";
import ReactQueryProvider from "@/lib/providers/react-query-provider";
import StripeProvider from "@/lib/providers/stripe-provider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Redify | Discover & Buy Your Next Favorite Book",
  description:
    "Redify is your modern online bookstore. Discover thousands of books, add to your personal collection, and enjoy seamless checkout. Reading made easy, anytime, anywhere.",
  keywords:
    "books, online bookstore, buy books, Redify, novels, e-books, reading, literature, bookshop",
  authors: [{ name: "Ramy Essam" }],
  openGraph: {
    type: "website",
    url: "https://redify.com",
    title: "Redify | Discover & Buy Your Next Favorite Book",
    description:
      "Explore Redify's wide collection of books. From bestsellers to hidden gems – your next favorite read is waiting.",
  },
  icons: {
    icon: "/images/icon.ico",
    shortcut: "/images/icon.ico",
    apple: "/images/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <ReactQueryProvider>
              <StripeProvider>{children}</StripeProvider>
            </ReactQueryProvider>
          </AuthProvider>

          <Toaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}


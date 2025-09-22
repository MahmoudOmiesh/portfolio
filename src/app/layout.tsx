import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import { MaxWidthWrapper } from "~/components/max-width-wrapper";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";

export const metadata: Metadata = {
  title: "Mahmoud Omiesh | Full Stack Web Developer",
  description: "Mahmoud Omiesh | Full Stack Web Developer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-mono">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <MaxWidthWrapper className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

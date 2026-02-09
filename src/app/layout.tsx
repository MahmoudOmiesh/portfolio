import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import { MaxWidthWrapper } from "~/components/max-width-wrapper";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";

export const metadata: Metadata = {
  title: "Mahmoud Omiesh | Full Stack Web Developer",
  description:
    "I am a computer science student who enjoys challenges that blend problem-solving with creativity. Programming hooked me for that reason, and I have grown through both personal projects and team experiences. I am still early in my journey, but I value learning as much as building, and I am excited to keep improving while contributing to teams where I can share ideas and learn from others.",
};

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <MaxWidthWrapper className="flex min-h-screen justify-between gap-4">
            <Header />
            <main className="flex flex-1 flex-col">{children}</main>
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

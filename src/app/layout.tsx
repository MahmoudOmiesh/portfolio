import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import { MaxWidthWrapper } from "~/components/max-width-wrapper";
import { Header } from "~/components/header";

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
          {/* <BubbleBackground
            interactive={true}
            className="fixed inset-0 flex items-center justify-center rounded-xl"
          /> */}
          <MaxWidthWrapper className="min-h-screen lg:flex lg:justify-between lg:gap-4">
            <Header />
            <main className="pt-24 lg:w-[52%] lg:py-24">{children}</main>
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

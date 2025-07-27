import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaranian The Diviner - Fortune Telling App",
  description: "Discover your fortune with our mystical fortune teller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-4 flex flex-col min-h-screen">
          <header className="mb-8 text-center">
            <h1
              className="text-4xl font-bold mb-2"
              style={{ fontFamily: "'Moonveil Stellarion', sans-serif" }}
            >
              Zaranian The Diviner
            </h1>
            <p className="text-purple-200">Discover what the future holds...</p>
          </header>

          <main className="flex-grow">{children}</main>

          <footer className=" text-center text-sm text-purple-300">
            <p style={{ fontFamily: "'Moonveil Stellarion', sans-serif" }}>
              {new Date().getFullYear()} Zaranian The Diviner. All fortunes are
              for entertainment purposes only.{" "}
              {/* <Link
                className="text-purple-200 font-bold"
                href="https://github.com/nmckenryan/fortune-teller"
              >
                Built by nmckenryan
              </Link> */}
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}

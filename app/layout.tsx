import type { Metadata } from "next";
import { Roboto_Slab, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: " Ridell Salema ",
  description:
    "Personal portfolio of Ridell Salema. Software engineering student specializing in backend engineering, cybersecurity, and digital products.",
  keywords: [
    "Ridell Salema",
    "Software Engineering",
    "Backend Engineering",
    "Cybersecurity",
    "Africa University",
    "Portfolio",
  ],
  authors: [{ name: "Ridell Salema" }],
  openGraph: {
    title: "Ridell Salema | Software Engineering Student",
    description:
      "Building secure backend systems and digital products that solve real-world business problems.",
    url: "https://ridellsalema.com",
    siteName: "Ridell Salema Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridell Salema | Software Engineering Student",
    description:
      "Building secure backend systems and digital products that solve real-world business problems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoSlab.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="bg-bg text-primary font-sans antialiased selection:bg-accent selection:text-bg">
        {children}
      </body>
    </html>
  );
}

import ConditionalNavbar from "@/components/conditional-navbar";
import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umut Bideci | Developer, Student, Creative Builder",
  description:
    "Umut Bideci is a Turkish developer, high school student, and creative builder. Founder of Cliniscope, Electric Church, and Abyss Games Studio. Passionate about Computer Science and Music.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Umut Bideci",
    description:
      "Portfolio, projects, and creative work by Umut Bideci. Developer, student, and founder of Cliniscope and Electric Church.",
    url: "https://umutbideci.com",
    siteName: "Umut Bideci",
    images: [
      {
        url: "/umut copy.png",
        width: 1200,
        height: 630,
        alt: "Umut Bideci Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umut Bideci",
    description:
      "Developer, student, and creative builder — founder of Cliniscope and Electric Church.",
    images: ["/umut copy.png"],
  },
  keywords: [
    "Umut Bideci",
    "Umut Bideci portfolio",
    "Umut Bideci developer",
    "Umut Bideci student",
    "Cliniscope",
    "Electric Church",
    "Abyss Games Studio",
    "TEVITOL",
    "TEV İnanç High School",
  ],
  alternates: {
    canonical: "https://umutbideci.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="overflow-x-hidden">
        <ConditionalNavbar />
        {children}
        {/* JSON-LD Person Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Umut Bideci",
              url: "https://umutbideci.com",
              jobTitle: "Developer and Student",
              affiliation: "Cliniscope",
              alumniOf: "TEVITOL",
              sameAs: [
                "https://www.linkedin.com/in/umutbideci",
                "https://github.com/umutbideci",
                "https://twitter.com/umutbideci",
              ],
              description:
                "Turkish developer, high school student, and creative builder. Founder of Cliniscope and Electric Church.",
            }),
          }}
        />
      </body>
    </html>
  );
}

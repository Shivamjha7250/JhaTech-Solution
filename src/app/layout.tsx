import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jhatechsolution.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "JhaTech Solution | Web, App & Software Development Company in India",
    template: "%s | JhaTech Solution",
  },

  description:
    "JhaTech Solution is a technology solutions company providing website development, web application development, mobile app development, custom software, e-commerce, AI integration, cloud solutions, SEO, bug fixing and software maintenance services across India.",

  keywords: [
    "JhaTech Solution",
    "website development company India",
    "web development company India",
    "website developer India",
    "web application development India",
    "mobile app development company India",
    "Android app development company India",
    "iOS app development company India",
    "cross platform app development India",
    "custom software development company India",
    "ecommerce development company India",
    "AI integration services India",
    "cloud solutions company India",
    "SEO company India",
    "digital solutions company India",
    "website maintenance India",
    "website bug fixing India",
    "software maintenance India",
  ],

  authors: [
    {
      name: "Shivam Kumar Jha",
    },
  ],

  creator: "Shivam Kumar Jha",
  publisher: "JhaTech Solution",

  applicationName: "JhaTech Solution",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,

    siteName: "JhaTech Solution",

    title:
      "JhaTech Solution | Web, App & Software Development Company in India",

    description:
      "Website development, mobile app development, custom software, e-commerce, AI, cloud and SEO solutions by JhaTech Solution.",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "JhaTech Solution - Web, App & Software Development Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "JhaTech Solution | Web, App & Software Development Company in India",

    description:
      "Website, mobile app, software, e-commerce, AI, cloud and SEO solutions by JhaTech Solution.",

    images: ["/images/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "technology",
};

/* =========================================================
   ORGANIZATION STRUCTURED DATA
========================================================= */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": `${siteUrl}/#organization`,

  name: "JhaTech Solution",

  url: siteUrl,

  logo: `${siteUrl}/favicon.ico`,

  founder: {
    "@type": "Person",
    name: "Shivam Kumar Jha",
  },

  email: "info.jhatechsolution@gmail.com",

  telephone: "+91-70615-98544",

  sameAs: [
    "https://www.linkedin.com/company/jhatech-solution/",
    "https://www.instagram.com/jhatechsolution",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        {/* Organization SEO Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
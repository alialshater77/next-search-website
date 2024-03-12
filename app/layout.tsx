import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  title: "Web Vitals",
  description: "Search for your favorite books on our high-performance website using the latest Next.js 14 technologies.",
  alternates:{
    languages:{
      "en-US" : `/en`,
      "ar-AR" : `/ar`
    }
  },
  other:{
    'theme-color': '#0d1117',
    'color-scheme' : 'dark only',
  },
  twitter:{
    card: "summary_large_image",
    title: "Web Vitals",
    description: "Search for your favorite books on our high-performance website using the latest Next.js 14 technologies.",
    siteId: "145672887925701892",
    creator: "@alialshater",
    creatorId: "1427239847727217892",
    images: [""],
  },
  verification: {
    google: "google-site-verification=1235682583729",
  },
  category: 'technology',
  robots: {
    follow: true,
    index: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}

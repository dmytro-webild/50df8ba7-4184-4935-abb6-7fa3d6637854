import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'Blueline Solutions Vinh | Innovative Software Development',
  description: 'Blueline Solutions offers cutting-edge custom software development, cloud solutions, and AI integration to drive digital transformation and business growth. Contact us for a free consultation.',
  keywords: ["software development, custom software, cloud solutions, AI integration, data analytics, mobile app development, IT consulting, Blueline Solutions, Vinh, Vietnam"],
  openGraph: {
    "title": "Blueline Solutions Vinh | Innovative Software Development",
    "description": "Blueline Solutions offers cutting-edge custom software development, cloud solutions, and AI integration to drive digital transformation and business growth.",
    "url": "https://blueline.com.vn",
    "siteName": "Blueline Solutions",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/blue-abstract-shape-glowing-grainy-textured_474888-8017.jpg",
        "alt": "Modern software dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Blueline Solutions Vinh | Innovative Software Development",
    "description": "Blueline Solutions offers cutting-edge custom software development, cloud solutions, and AI integration.",
    "images": [
      "http://img.b2bpic.net/free-photo/blue-abstract-shape-glowing-grainy-textured_474888-8017.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

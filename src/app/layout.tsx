import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frames n Spaces — Premium Consultancy & Advisory Solutions",
  description:
    "Frames n Spaces is a premium consultancy and advisory firm specializing in high-performance workspace solutions, partition systems, and project management. Empowering architects and corporate clients with precision-driven expertise across India.",
  keywords:
    "consultancy, advisory, workspace solutions, project management, office partitions, Frames n Spaces, India, premium consultancy",
  openGraph: {
    title: "Frames n Spaces — Premium Consultancy & Advisory",
    description:
      "Premium consultancy and advisory for transformative workspace solutions across India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="grain-overlay" />
      </body>
    </html>
  );
}

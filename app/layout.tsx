import type { Metadata, Viewport } from "next";
import { Archivo, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Arturo Santisteban | Mochumí 2027–2030",
  description:
    "Honestidad, trabajo duro y propuestas medibles para renovar Mochumí.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    apple: "/icon-192.png",
  },
  openGraph: {
    title: "Arturo Santisteban | Mochumí 2027–2030",
    description: "Una propuesta ciudadana que se construye contigo.",
    images: ["/arturo-campaign.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#086fad",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${archivo.variable} ${barlowCondensed.variable}`}>
        {children}
      </body>
    </html>
  );
}


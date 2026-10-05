import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sites de Jogos - Os Melhores Sites de Jogos em Portugal",
  description: "Descubra os melhores sites de jogos online em Portugal. Análises de especialistas e bónus exclusivos.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = "AW-18362020383"; 
  const CONVERSION_LABEL = "AW-18362020383/7YrgCJ-hh9wcEJ_k2LNE";

  return (
    <html lang="pt" className="dark">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank');
                }
              };
              gtag('event', 'conversion', {
                  'send_to': '${CONVERSION_LABEL}',
                  'value': 1.0,
                  'currency': 'USD',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </head>
      <body className="felt-texture min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.infoperumahansemarang.com"),
  title: {
    default: " Beli, Titip Jual, Sewa Rumah dan Properti Anda Semarang dan Sekitarnya",
    template: "%s | Info Perumahan Semarang",
 },
 description: "Beli, titip jual, sewa rumah atau properti Anda di Semarang dan sekitarnya terpercaya, mudah dan aman melalui kami. Dapatkan pembeli potensial lebih cepat dengan layanan titip jual terpercaya di Semarang dan sekitarnya.",
 openGraph: {
    title: "Beli, Titip Jual atau Sewa Rumah dan Properti Semarang dan Sekitarnya",
    description: "Beli, titip jual, sewa rumah atau properti Anda di Semarang dan sekitarnya terpercaya, mudah dan aman melalui kami. Dapatkan pembeli potensial lebih cepat dengan layanan titip jual terpercaya di Semarang dan sekitarnya.",
    images: [
      {
        url: "https://www.infoperumahansemarang.com/illustration/og-image.png",
      },
    ]
  },
  keywords: [
    "jual rumah semarang",
    "beli rumah semarang",
    "info perumahan semarang",
    "agen properti semarang terpercaya",
    "titip jual rumah semarang terpercaya",
    "titip jual properti semarang terpercaya",
    "titip jual properti semarang dan sekitarnya",
    "titip jual rumah semarang dan sekitarnya",
    "rumah murah semarang",
    "properti murah semarang",
    "sewa rumah murah semarang",
    "sewa ruko murah semarang",
    "jual rumah semarang terpercaya",
    "beli rumah semarang terpercaya",
    "sewa rumah semarang terpercaya",
    "jual beli sewa rumah semarang",
    "jual beli sewa properti semarang",
    "jual beli sewa dan properti semarang",
  ],
  alternates: {
    canonical: "https://www.infoperumahansemarang.com/titip-jual",
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
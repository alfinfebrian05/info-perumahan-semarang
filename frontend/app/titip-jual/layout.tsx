import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.infoperumahansemarang.com"),
  title: {
    default: "Titip Sewa dan Jual Properti Semarang",
    template: "%s | Info Perumahan Semarang",
 },
 description: "Titip jual rumah atau properti di Semarang dengan mudah dan aman melalui platform kami. Dapatkan pembeli potensial lebih cepat dengan layanan titip jual terpercaya di Semarang dan sekitarnya.",
 openGraph: {
    title: "Titip Sewa dan Jual Properti Semarang",
    description: "Titip jual rumah atau properti di Semarang dengan mudah dan aman melalui platform kami. Dapatkan pembeli potensial lebih cepat dengan layanan titip jual terpercaya di Semarang dan sekitarnya.",
    images: [
      {
        url: "https://www.infoperumahansemarang.com/illustration/og-image.png",
      },
    ]
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
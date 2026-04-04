import { Metadata, ResolvingMetadata } from "next";
import LandingLayout from "@/components/layouts/landing-layout";

type Props = {
  params: Promise<any>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const sParams = await searchParams;
  const tipe = sParams?.tipe;
  
  let label = "Properti";
  if (tipe === "sewa") label = "Sewa Properti";
  else if (tipe === "iklan") label = "Pasang Iklan Properti";
  else label = "Titip Jual Properti";

  const baseUrl = "https://www.infoperumahansemarang.com";
  const path = "/titip-jual";
  const url = tipe 
    ? `${baseUrl}${path}?tipe=${tipe}` 
    : `${baseUrl}${path}`;

  return {
    title: `${label} Semarang - Cepat & Terpercaya`,
    description: `Layanan ${label.toLowerCase()} di Semarang dan sekitarnya. Dapatkan pembeli potensial lebih cepat dengan bantuan agen profesional kami.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${label} Semarang | Info Perumahan Semarang`,
      url: url,
      images: ["/illustration/og-image.png"],
    }
  };
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LandingLayout>
      {children}
    </LandingLayout>
  );
}
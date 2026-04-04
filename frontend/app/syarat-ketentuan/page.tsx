import LandingLayout from "@/components/layouts/landing-layout";
import LegalPage from "@/components/LegalPage";
import { termsData } from "@/data/terms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan | Infoperumahan Semarang",
  description: termsData.description,
  alternates: {
    canonical: "https://www.infoperumahansemarang.com/syarat-ketentuan",
  },
  openGraph: {
    title: "Syarat dan Ketentuan",
    description: termsData.description,
    url: "https://www.infoperumahansemarang.com/syarat-ketentuan",
    siteName: "Infoperumahan Semarang",
    locale: "id_ID",
    type: "website",
  },
};

export default function Page() {
  return (
    <LandingLayout>
        <LegalPage {...termsData} />
    </LandingLayout>
  );
}
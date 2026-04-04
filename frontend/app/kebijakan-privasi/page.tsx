import LandingLayout from "@/components/layouts/landing-layout";
import LegalPage from "@/components/LegalPage";
import { privacyData } from "@/data/privacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Infoperumahan Semarang",
  description: privacyData.description,
  alternates: {
    canonical: "https://www.infoperumahansemarang.com/kebijakan-privasi",
  },
  openGraph: {
    title: "Kebijakan Privasi",
    description: privacyData.description,
    url: "https://www.infoperumahansemarang.com/kebijakan-privasi",
    siteName: "Infoperumahan Semarang",
    locale: "id_ID",
    type: "website",
  },
};

export default function Page() {
  return (
    <LandingLayout>
        <LegalPage {...privacyData} />
    </LandingLayout>
  );
}
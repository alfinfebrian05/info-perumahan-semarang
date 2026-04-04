import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Heading, Text, Separator } from "@radix-ui/themes";
import FloatingActions from "@/components/FloatingActions";

export async function generateMetadata(
  { params, searchParams }: { params: any, searchParams: { [key: string]: string | string[] | undefined } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const baseUrl = "https://www.infoperumahansemarang.com";
  const tipe = searchParams.tipe;
  const formattedTipe = tipe 
    ? tipe.toString().charAt(0).toUpperCase() + tipe.toString().slice(1).replace("-", " ") 
    : "";

  const dynamicTitle = formattedTipe 
    ? `${formattedTipe} di Semarang`
    : "Beli, Titip Jual, Sewa Rumah dan Properti Semarang";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: dynamicTitle,
      template: `%s | Info Perumahan Semarang`,
    },
    description: "Beli, titip jual, sewa rumah atau properti Anda di Semarang dan sekitarnya terpercaya, mudah dan aman melalui kami.",
    alternates: {
      canonical: tipe ? `/cari-properti?tipe=${tipe}` : "/",
    },
    openGraph: {
      title: dynamicTitle,
      description: "Layanan properti terpercaya di Semarang dan sekitarnya.",
      url: baseUrl,
      siteName: "Info Perumahan Semarang",
      images: [
        {
          url: "/illustration/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: "id_ID",
      type: "website",
    },
  };
}

const footerLinks = [
  {
    heading: "Cari Properti",
    links: [
      { label: "Beli Rumah", href: "/cari-properti?tipe=rumah" },
      { label: "Sewa Rumah", href: "/cari-properti?tipe=sewa-rumah" },
      { label: "Apartemen", href: "/cari-properti?tipe=apartemen" },
      { label: "Tanah", href: "/cari-properti?tipe=tanah" },
      { label: "Ruko", href: "/cari-properti?tipe=ruko" },
      { label: "Kost", href: "/cari-properti?tipe=kost" },
    ]
  },
  {
    heading: "Layanan",
    links: [
      { label: "Titip Jual Properti", href: "/titip-jual" },
      { label: "Titip Sewa Properti", href: "/titip-jual?tipe=sewa" },
      { label: "Pasang Iklan", href: "/titip-jual?tipe=iklan" },
    ]
  },
  {
    heading: "Informasi",
    links: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Kontak", href: "/kontak" },
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    ]
  }
];

export default function LandingLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
      <Box
        as="div"
        style={{ 
          backgroundColor: "var(--gray-1)", 
          borderBottom: "1px solid var(--gray-4)", 
          position: 'sticky', 
          top: 0, 
          zIndex: 50 
        }}
        width="100%"
        py="4"
        px="4"
      >
        <Flex
          align="center"
          justify="between"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Flex align="center" gap="3">
              <Image
                src="/logo-info-perumahan-semarang.png"
                alt="Logo Info Perumahan Semarang"
                width={40}
                height={40}
              />
              <Heading
                size={{ initial: "4", md: "5" }}
                style={{ color: "var(--indigo-11)", letterSpacing: "-0.02em" }}
              >
                Info Perumahan Semarang
              </Heading>
            </Flex>
          </Link>
          
          <Flex gap="5" display={{ initial: 'none', md: 'flex' }}>
             <Link href="/cari-properti" className="text-sm font-medium hover:text-indigo-600 transition-colors no-underline text-slate-700">Cari Properti</Link>
             <Link href="/titip-jual" className="text-sm font-medium hover:text-indigo-600 transition-colors no-underline text-slate-700">Titip Jual</Link>
          </Flex>
        </Flex>
      </Box>

      <Box as="div">
        {children}
      </Box>

      <FloatingActions />

      <Box
        as="div"
        style={{ backgroundColor: "var(--gray-2)", borderTop: "1px solid var(--gray-4)" }}
        pt={{ initial: "8", md: "9" }}
        pb="6"
        px={{ initial: "6", sm: "7", lg: "9" }}
      >
        <Flex
          direction={{ initial: "column", md: "row" }}
          gap={{ initial: "8", md: "6" }}
          justify="between"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <Flex direction="column" gap="4" style={{ maxWidth: "24rem" }}>
            <Flex align="center" gap="3">
              <Image
                src="/logo-info-perumahan-semarang.png"
                alt="Logo"
                width={42}
                height={42}
              />
              <Heading size="4" weight="bold" color="indigo">
                Info Perumahan Semarang
              </Heading>
            </Flex>
            <Text size="2" color="gray" style={{ lineHeight: "1.6" }}>
              Platform properti terpercaya di Semarang dan sekitarnya. Kami membantu Anda menemukan hunian impian atau menjual aset properti dengan proses transparan dan profesional.
            </Text>
          </Flex>

          <Flex
            direction={{ initial: "column", sm: "row" }}
            gap={{ initial: "7", sm: "9" }}
          >
            {footerLinks.map((section) => (
              <Flex key={section.heading} direction="column" gap="3">
                <Text size="3" weight="bold" color="indigo" style={{ marginBottom: '4px' }}>
                  {section.heading}
                </Text>
                <Flex direction="column" gap="2">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-indigo-600 transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Separator size="4" my="6" style={{ opacity: 0.5 }} />

        <Flex
          direction={{ initial: "column", sm: "row" }}
          justify="between"
          align="center"
          gap="4"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <Text size="2" color="gray">
            © {new Date().getFullYear()} Info Perumahan Properti Semarang.
          </Text>

          <Flex gap="5" align="center">
            <Link href="/kebijakan-privasi" className="text-xs text-slate-400 no-underline hover:underline">
              Privacy Policy
            </Link>
            <Link href="/kontak" className="text-xs text-slate-400 no-underline hover:underline">
              Contact Support
            </Link>
          </Flex>
        </Flex>
      </Box>
    </React.Fragment>
  );
}
import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Heading, Text, Separator } from "@radix-ui/themes";
import FloatingActions from "@/components/FloatingActions";

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
]

export default function LandingLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
      <Box
        style={{ backgroundColor: "var(--gray-1)", borderBottom: "2px solid var(--gray-4)", position: 'sticky', top: 0, zIndex: 20 }}
        width="100%"
        py="5"
        px="4"
      >
        <Flex
          align="center"
          justify="center"
          gap="5"
          style={{ maxWidth: "96rem", margin: "0 auto" }}
        >
          <Image
            src="/logo-info-perumahan-semarang.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <Heading
            size={{ initial: "5", md: "6", xl: "8" }}
            style={{ color: "var(--yellow-11)" }}
          >
            Info Perumahan Properti Semarang
          </Heading>
        </Flex>
      </Box>

      {children}

      <FloatingActions />

      <Box
        as="div"
        className="bg-(--amber-1) border-t-2 border-t-(--black-a1)"
        pt={{ initial: "7", md: "9" }}
        pb="6"
        px={{ initial: "6", sm: "7", lg: "9" }}
      >
        <Flex
          direction={{ initial: "column", md: "row" }}
          gap={{ initial: "8", md: "6" }}
          justify="between"
          style={{ maxWidth: "96rem", margin: "0 auto" }}
        >
          <Flex direction="column" gap="4" style={{ maxWidth: "20rem" }}>
            <Flex align="center" gap="3">
              <Image
                src="/logo-info-perumahan-semarang.png"
                alt="Logo Info Perumahan Semarang"
                width={48}
                height={48}
              />
              <Heading size="4" style={{ color: "var(--indigo-11)" }}>
                Info Perumahan Properti Semarang
              </Heading>
            </Flex>
            <Text size="2" style={{ color: "var(--mauve-11)", lineHeight: "1.7" }}>
              Platform properti terpercaya di Semarang dan sekitarnya. Beli, sewa, atau titip jual properti Anda dengan mudah dan aman.
            </Text>
          </Flex>

          <Flex
            direction={{ initial: "column", sm: "row" }}
            gap={{ initial: "6", sm: "9" }}
          >
            {footerLinks.map((section) => (
              <Flex key={section.heading} direction="column" gap="3">
                <Heading size="3" style={{ color: "var(--indigo-11)" }}>
                  {section.heading}
                </Heading>
                <Flex direction="column" gap="2" asChild>
                  <nav aria-label={section.heading}>
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        style={{ color: "var(--mauve-10)", textDecoration: "none", fontSize: "0.875rem" }}
                        className="hover:text-(--indigo-11) transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Separator style={{ backgroundColor: "var(--gray-6)" }} size="4" my="6" />

        <Flex
          direction={{ initial: "column", sm: "row" }}
          justify="between"
          align="center"
          gap="3"
          className="max-w-screen-2xl mx-auto w-full"
        >
          <Text size="3" style={{ color: "var(--mauve-10)" }} className="text-center sm:text-left">
            © {new Date().getFullYear()} Info Perumahan Properti Semarang. Hak cipta dilindungi.
          </Text>

          <Flex gap="4" align="center" justify="center">
            <Link
              href="/kebijakan-privasi"
              style={{ color: "var(--mauve-10)", textDecoration: "none", fontSize: "0.75rem" }}
              className="hover:text-(--indigo-11) transition-colors"
            >
              Kebijakan Privasi
            </Link>

            <Link
              href="/kontak"
              style={{ color: "var(--mauve-10)", textDecoration: "none", fontSize: "0.75rem" }}
              className="hover:text-(--indigo-11) transition-colors"
            >
              Kontak Kami
            </Link>
          </Flex>
        </Flex>
      </Box>
    </React.Fragment>
  )
}
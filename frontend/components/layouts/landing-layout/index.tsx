"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Heading, Text, Separator, IconButton } from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import FloatingActions from "@/components/FloatingActions";
import { Metadata, ResolvingMetadata } from "next";

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

const menuGroups = [
  {
    heading: "Beli",
    links: [
      { label: "Rumah", href: "/cari-properti?tipe=rumah&status=beli" },
      { label: "Apartemen", href: "/cari-properti?tipe=apartemen&status=beli" },
      { label: "Tanah", href: "/cari-properti?tipe=tanah&status=beli" },
      { label: "Ruko", href: "/cari-properti?tipe=ruko&status=beli" },
    ]
  },
  {
    heading: "Sewa",
    links: [
      { label: "Rumah", href: "/cari-properti?tipe=rumah&status=sewa" },
      { label: "Apartemen", href: "/cari-properti?tipe=apartemen&status=sewa" },
      { label: "Tanah", href: "/cari-properti?tipe=tanah&status=sewa" },
      { label: "Kost", href: "/cari-properti?tipe=kost&status=sewa" },
    ]
  },
  {
    heading: "Layanan",
    links: [
      { label: "Titip Jual Properti", href: "/titip-jual" },
      { label: "Estimasi Nilai Properti", href: "/estimasi-harga" },
      { label: "Pasang Iklan", href: "/titip-jual?tipe=iklan" },
    ]
  },
  {
    heading: "Informasi",
    links: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Syarat dan Ketentuan", href: "/syarat-ketentuan" },
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
      { label: "Kontak", href: "/kontak" },
    ]
  }
];

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Box 
        as="div" 
        className="sticky top-0 z-50 w-full bg-white border-b border-gray-200"
        py="3" 
        px="4"
      >
        <Flex align="center" justify="between" className="max-w-[1200px] mx-auto">
          <Link href="/" className="no-underline">
            <Flex align="center" gap="2" py={"2"}>
              <Image 
                src="/logo-info-perumahan-semarang.png" 
                alt="Logo" 
                width={116} 
                height={116} 
              />
            </Flex>
          </Link>

          <Flex gap="6" display={{ initial: 'none', md: 'flex' }} align="center">
            <Link href="/cari-properti" className="no-underline">
              <Text size="2" weight="bold" className="text-gray-700 hover:text-indigo-600 transition-colors">Cari Properti</Text>
            </Link>
            <Link href="/titip-jual" className="no-underline">
              <Text size="2" weight="bold" className="text-gray-700 hover:text-indigo-600 transition-colors">Titip Jual</Text>
            </Link>
          </Flex>

          <Box display={{ initial: 'block', md: 'none' }}>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <IconButton variant="ghost" color="gray" size="3">
                  <HamburgerMenuIcon width="22" height="22" />
                </IconButton>
              </Dialog.Trigger>
              
              <Dialog.Portal>
                <Dialog.Overlay className="RT-DialogOverlay fixed inset-0 z-[100] bg-black/40 backdrop-blur-[4px]" />
                
                <Dialog.Content 
                  className="RT-DialogContent fixed top-0 right-0 bottom-0 z-[101] w-[80%] max-w-[320px] bg-white shadow-[-10px_0_30px_-10px_rgba(0,0,0,0.1)] flex flex-col focus:outline-none"
                >
                  <Box className="p-5 border-b border-gray-100">
                    <Flex justify="between" align="center">
                      <Image src="/logo-info-perumahan-semarang.png" alt="Logo" width={116} height={116} />
                      <Dialog.Close asChild>
                        <IconButton variant="ghost" color="gray" className="cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
                          <Cross2Icon width="24" height="24" />
                        </IconButton>
                      </Dialog.Close>
                    </Flex>
                  </Box>

                  <Dialog.Title className="sr-only">Navigasi Utama</Dialog.Title>

                  <Box className="flex-1 overflow-y-auto py-2">
                    <Accordion.Root type="single" collapsible className="w-full">
                      {menuGroups.map((group, idx) => (
                        <Accordion.Item key={idx} value={`item-${idx}`} className="border-b border-gray-50 last:border-0">
                          <Accordion.Header className="flex">
                            <Accordion.Trigger className="group flex flex-1 items-center justify-between p-5 hover:bg-gray-50 transition-all">
                              <Heading as="h3" size="3" className="text-gray-800">{group.heading}</Heading>
                              <ChevronDownIcon 
                                className="text-gray-400 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-data-[state=open]:rotate-180" 
                                aria-hidden 
                              />
                            </Accordion.Trigger>
                          </Accordion.Header>
                          
                          <Accordion.Content className="RT-AccordionContent bg-gray-50/50">
                            <Flex direction="column" className="px-5 pb-4 gap-1">
                              {group.links.map((link, lIdx) => (
                                <Link 
                                  key={lIdx} 
                                  href={link.href} 
                                  onClick={() => setOpen(false)}
                                  className="py-3 no-underline hover:pl-2 transition-all duration-300"
                                >
                                  <Text size="2" className="text-gray-600 hover:text-indigo-600">
                                    {link.label}
                                  </Text>
                                </Link>
                              ))}
                            </Flex>
                          </Accordion.Content>
                        </Accordion.Item>
                      ))}
                    </Accordion.Root>
                  </Box>

                  <Box className="p-6 bg-white border-t border-gray-100">
                    <Link href="/kontak" onClick={() => setOpen(false)} className="no-underline">
                      <Box 
                        className="w-full bg-blue-600 py-4 rounded-xl shadow-lg shadow-indigo-100 active:scale-[0.98] transition-all"
                        style={{ textAlign: 'center' }}
                      >
                        <Text weight="bold" size="2" className="text-white">Hubungi Kami</Text>
                      </Box>
                    </Link>
                  </Box>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </Box>
        </Flex>
      </Box>

      {children}

      <FloatingActions />

      <Box as="div" className="bg-gray-50 border-t border-gray-200" pt="8" pb="6" px="4">
        <Flex direction={{ initial: "column", md: "row" }} gap="8" justify="between" className="max-w-[1200px] mx-auto">
          <Box className="max-w-sm">
            <Flex align="center" gap="2" mb="4">
              <Image src="/logo-info-perumahan-semarang.png" alt="Logo" width={32} height={32} />
              <Heading size="4" color="indigo">Info Perumahan</Heading>
            </Flex>
            <Text size="2" color="gray" className="leading-relaxed">
              Platform properti terpercaya di Semarang. Membantu Anda menemukan hunian terbaik dengan transparan dan profesional.
            </Text>
          </Box>

          <Flex gap="8" wrap="wrap">
            {menuGroups.map((group) => (
              <Flex key={group.heading} direction="column" gap="2">
                <Heading size="3" weight="bold" color="indigo">{group.heading}</Heading>
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="no-underline transition-colors">
                    <Text size="2" className="text-gray-500 hover:text-indigo-600">{link.label}</Text>
                  </Link>
                ))}
              </Flex>
            ))}
          </Flex>
        </Flex>
        
        <Separator size="4" my="6" className="opacity-10 mx-auto max-w-[1200px]" />
        
        <Flex align="center" justify="center" className="max-w-[1200px] mx-auto">
           <Text size="1" color="gray">© {new Date().getFullYear()} Info Perumahan Properti Semarang.</Text>
        </Flex>
      </Box>
    </React.Fragment>
  );
}
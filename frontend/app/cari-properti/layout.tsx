import LandingLayout from '@/components/layouts/landing-layout'
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({ searchParams }: any): Promise<Metadata> {
  const tipe = searchParams?.tipe || "Properti";
  const url = `https://www.infoperumahansemarang.com/cari-properti?tipe=${tipe}`;

  return {
    title: `Cari ${tipe} Murah di Semarang`,
    alternates: {
      canonical: url,
    },
  };
}

export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LandingLayout>{children}</LandingLayout>
  )
}

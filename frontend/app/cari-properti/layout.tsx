import LandingLayout from '@/components/layouts/landing-layout'
import React from 'react';


export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LandingLayout>{children}</LandingLayout>
  )
}

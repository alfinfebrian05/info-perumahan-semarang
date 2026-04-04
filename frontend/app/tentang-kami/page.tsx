import AboutPage from '@/components/AboutPage'
import LandingLayout from '@/components/layouts/landing-layout'
import { aboutData } from '@/data/about'

export default function page() {
  return (
    <LandingLayout>
        <AboutPage {...aboutData} />
    </LandingLayout>
  )
}
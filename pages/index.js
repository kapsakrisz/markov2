import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import SliderData from '../components/SliderData'
import Slider from '../components/Slider'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Hero heading='KJ painting' message='K.J. Professional Painting & Decorating Based in Belfast - Skilled, reliable painting & decorating services. - Precise work and reasonable prices. - Over 15 years experience. - Friendly service. - Free paint collection and transport. - Free viewing for a quote. - All work guaranteed. '/>
      <Slider slides={SliderData} />
    </div>
  )
}

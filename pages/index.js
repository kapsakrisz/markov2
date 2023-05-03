import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import SliderData from '../components/SliderData'
import Slider from '../components/Slider'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Hero heading='KJ painting' message='ha kell kifestem a kurva anyatokat is '/>
      <Slider slides={SliderData} />
    </div>
  )
}

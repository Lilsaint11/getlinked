
import Faq from './components/faq'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import Intro from './components/intro'
import Prizes from './components/prizes'
import PrivacyPolicy from './components/privacypolicy'
import Rules from './components/rules'
import Timeline from './components/timeline'
import Criteria from './components/criteria'


export default function Home() {
  return (
   <div className='bg-[#150E28] text-white relative montserrat overflow-x-hidden'>
     <Header />
     <Hero />
     <Intro />
     <Rules />
     <Criteria/>
     <Faq />
     <Timeline />
     <Prizes />
     <PrivacyPolicy />
     <Footer />
   </div>
  )
}

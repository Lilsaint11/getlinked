"use client"
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
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <AnimatePresence wait>
      <motion.div
        initial={{x:'100vw'}}
        animate={{x:0 ,transition:{duration:0.1}}}
        exit={{x:'-100vw',transition:{ease:'easeInOut'}}}
          className='bg-[#150E28] text-white relative montserrat overflow-x-hidden'>
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
      </motion.div>
    </AnimatePresence>
  )
}

import React from 'react'
import Hero from '@/components/Layout/Hero'
import Features from '@/components/Layout/Features'
import Properties from '@/components/Layout/properties/Properties'
import Team from '@/components/Layout/Team'
import Footer from '@/components/Layout/Footer'
function page() {
  return (
    <>
      <Hero />
      <Features />
      <Properties />
      <Team />
      <Footer />
    </>
  )
}

export default page
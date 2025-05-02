// app/page.tsx
import React from 'react'
import { Navbar }            from './components/navbar'
import { Hero }              from './components/hero'
import ServicesGrid          from './components/ServicesGrid'
import OpeningStatus         from './components/openingstatus'
import OpeningHoursTable     from './components/otviracidoba'
import { Footer }            from './components/footer'

const Page = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* tady přidáno */}
        <ServicesGrid />
        
        <OpeningStatus />
        <OpeningHoursTable />
      </main>
      <Footer />
    </>
  )
}

export default Page

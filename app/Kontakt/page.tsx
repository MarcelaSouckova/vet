// app/kontakt/page.tsx
import React from "react"
import { Navbar } from "../components/navbar"
import Kontakt    from "../components/Kontakt"
import { Footer } from "../components/footer"

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main>
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}

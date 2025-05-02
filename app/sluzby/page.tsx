// app/sluzby/page.tsx
import React from "react"
import type { Metadata } from "next"
import { Navbar } from "../components/navbar"
import Sluzby     from "../components/sluzby"
import { Footer } from "../components/footer"

export const metadata: Metadata = {
  title: "Služby – Veterinární ordinace VetCare",
  description:
    "Objevte komplexní nabídku služeb veterinární ordinace VetCare: preventivní péče, chirurgické zákroky, diagnostika, dentální péče, výživové poradenství, grooming a mnoho dalšího.",
  keywords: [
    "veterinární služby",
    "preventivní péče",
    "chirurgie",
    "diagnostika",
    "dentální péče",
    "grooming",
    "výživové poradenství",
  ],
  openGraph: {
    title:       "Služby – Veterinární ordinace VetCare",
    description:
      "Kompletní přehled veterinárních služeb VetCare: od očkování až po chirurgii a domácí návštěvy.",
    url:         "https://www.vetcare.cz/sluzby",
    siteName:    "VetCare",
    locale:      "cs_CZ",
    type:        "website",
  },
}

export default function SluzbyPage() {
  return (
    <>
      <Navbar />
      <main>
        <Sluzby />
      </main>
      <Footer />
    </>
  )
}

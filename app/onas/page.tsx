// app/onas/page.tsx
import React from "react"
import type { Metadata } from "next"
import { Navbar } from "../components/navbar"
import Onas       from "../components/onas"
import { Footer } from "../components/footer"

export const metadata: Metadata = {
  title: "O nás – Veterinární ordinace VetCare",
  description:
    "Poznejte tým a filozofii veterinární ordinace VetCare. Naše historie, moderní vybavení a individuální přístup ke každému mazlíčkovi.",
  keywords: [
    "o nás",
    "veterinární klinika",
    "tým veterinářů",
    "historie",
    "kontakty",
    "Praha",
  ],
  openGraph: {
    title:       "O nás – Veterinární ordinace VetCare",
    description:
      "Seznamte se s naší ordinací VetCare: odborníci, přístroje a osobní péče o vaše čtyřnohé přátele.",
    url:         "https://www.vetcare.cz/onas",
    siteName:    "VetCare",
    locale:      "cs_CZ",
    type:        "website",
  },
}

export default function OnasPage() {
  return (
    <>
      <Navbar />
      <main>
        <Onas />
      </main>
      <Footer />
    </>
  )
}

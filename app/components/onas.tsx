// app/components/Onas.tsx
"use client"
import React from "react"
import Image from "next/image"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function Onas() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* — Text Column */}
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-gray-900 pb-2 border-b-4 border-teal-400 inline-block">
              O naší ordinaci
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Veterinární klinika <span className="font-semibold text-gray-900">VetCare</span> poskytuje komplexní
              péči o vaše mazlíčky již od roku 2010. Díky modernímu vybavení a odbornému týmu veterinářů
              nabízíme individuální přístup ke každému čtyřnohému pacientovi.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Naším cílem je, aby se u nás zvířata cítila bezpečně a majitelé měli jistotu, že dostávají
              tu nejlepší možnou péči – ať už jde o běžné očkování, specializovanou operaci nebo domácí
              návštěvu.
            </p>

            {/* — Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-800">
                <MapPin className="w-5 h-5 text-teal-500 mr-3" />
                <span>
                  Vítězná 123, 160 00 Praha 6
                </span>
              </div>
              <div className="flex items-center text-gray-800">
                <Mail className="w-5 h-5 text-teal-500 mr-3" />
                <a href="mailto:info@vetcare.cz" className="hover:underline">
                  info@vetcare.cz
                </a>
              </div>
              <div className="flex items-center text-gray-800">
                <Phone className="w-5 h-5 text-teal-500 mr-3" />
                <a href="tel:+420123456789" className="hover:underline">
                  +420 123 456 789
                </a>
              </div>
              <div className="flex items-center text-gray-800">
                <Clock className="w-5 h-5 text-teal-500 mr-3" />
                <span>
                  Po–Pá 8:00–18:00, So 9:00–12:00, Ne zavřeno
                </span>
              </div>
            </div>
          </div>

          {/* — Image Column */}
          <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/cute-cat.jpg"
              alt="Exteriér veterinární kliniky VetCare"
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

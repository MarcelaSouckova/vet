// components/ServicesGrid.tsx
"use client"
import React from "react"
import {
  Stethoscope,
  Activity,
  HeartPulse,
  CalendarCheck,
  
  Home,
} from "lucide-react"

interface Service {
  title: string
  description: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const services: Service[] = [
  {
    title: "Preventivní péče",
    description: "Očkování, pravidelné prohlídky a preventivní vyšetření.",
    Icon: Stethoscope,
  },
  {
    title: "Chirurgie & pohotovost",
    description: "Nouzové operace a neodkladná péče 24/7.",
    Icon: Activity,
  },
  {
    title: "Dentální péče",
    description: "Čištění zubů, ošetření parodontózy a extrakce.",
    Icon: HeartPulse,
  },
  {
    title: "Diagnostika",
    description: "RTG, ultrazvuk a laboratorní testy na místě.",
    Icon: CalendarCheck,
  },
  {
    title: "Grooming & boarding",
    description: "Stříhání srsti, koupání a dočasné ubytování.",
    Icon: Home,
  },
  {
    title: "Domácí návštěvy",
    description: "Veterinární péče přímo u vás doma.",
    Icon: Home,
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Naše služby
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <Icon className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

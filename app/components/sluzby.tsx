// app/components/Sluzby.tsx
"use client"
import React from "react"
import {
  ShieldCheck,
  Activity,
  CalendarCheck2,
  HeartPulse,
  Cpu,
  
  Scissors,
  Home,
} from "lucide-react"

interface Service {
  title: string
  intro: string
  details: string[]
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const services: Service[] = [
  {
    title: "Preventivní péče",
    intro: "Dlouhodobá ochrana zdraví vašeho mazlíčka.",
    details: [
      "Kompletní očkovací plán",
      "Pravidelné prohlídky",
      "Parazitární prevence",
    ],
    Icon: ShieldCheck,
  },
  {
    title: "Chirurgie & Hospitalizace",
    intro: "Šetrné zákroky a bezpečné zotavení.",
    details: [
      "Moderní operační sál",
      "Pooperační monitoring",
      "Komfortní hospitalizace",
    ],
    Icon: Activity,
  },
  {
    title: "Diagnostika",
    intro: "Rychlé a přesné vyšetření přímo u nás.",
    details: [
      "RTG & ultrazvuk",
      "Laboratorní testy",
      "Močové i krevní rozbory",
    ],
    Icon: CalendarCheck2,
  },
  {
    title: "Dentální péče",
    intro: "Profesionální péče o zuby a dásně.",
    details: [
      "Čištění zubního kamene",
      "Léčba parodontózy",
      "Zubní extrakce",
    ],
    Icon: HeartPulse,
  },
  {
    title: "Výživové poradenství",
    intro: "Strava na míru pro každého pacienta.",
    details: [
      "Dietní plány",
      "Léčba obezity",
      "Doplňky výživy",
    ],
    Icon: Cpu,
  },
  {
    title: "Grooming & Boarding",
    intro: "Úprava srsti a klidné ubytování.",
    details: [
      "Koupání a stříhání",
      "Úprava drápků",
      "Denní vycházky",
    ],
    Icon: Scissors,
  },
]

export default function Sluzby() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading pushed down */}
        <div className="mt-12 mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Naše služby
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, intro, details, Icon }) => (
            <div
              key={title}
              className="group bg-white p-6 rounded-2xl border border-transparent 
                         hover:border-teal-400 transition-shadow duration-300 
                         shadow-sm hover:shadow-lg flex flex-col"
            >
              {/* Icon in circle */}
              <div className="flex justify-center mb-4">
                <div className="bg-teal-100 p-3 rounded-full group-hover:bg-teal-200 transition-colors">
                  <Icon className="w-8 h-8 text-teal-600" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-center mb-4">{intro}</p>

              <ul className="list-disc list-inside text-gray-600 space-y-1 mt-auto">
                {details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

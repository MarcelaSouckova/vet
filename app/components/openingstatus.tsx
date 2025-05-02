// components/OpeningStatus.tsx
"use client"
import React, { useState, useEffect } from "react"
import { Clock }                   from "lucide-react"

interface Slot { open: string; close: string }
type Schedule = Record<number, Slot[] | null>

const schedule: Schedule = {
  0: null,
  1: [
    { open: "08:00", close: "10:00" },
    { open: "16:00", close: "18:00" },
  ],
  2: [{ open: "08:00", close: "10:00" }],
  3: [
    { open: "08:00", close: "10:00" },
    { open: "16:00", close: "18:00" },
  ],
  4: [
    { open: "08:00", close: "10:00" },
    { open: "16:00", close: "18:00" },
  ],
  5: [{ open: "08:00", close: "10:00" }],
  6: null,
}

export default function OpeningStatus() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(timer)
  }, [])

  const todayIdx   = now.getDay()
  const todaySlots = schedule[todayIdx]

  let statusText: string
  let dotColor    = "bg-red-600"

  if (todaySlots) {
    const inSlot = todaySlots.find(slot => {
      const [oh, om] = slot.open.split(":").map(Number)
      const [ch, cm] = slot.close.split(":").map(Number)
      const openTime  = new Date(now); openTime.setHours(oh, om, 0, 0)
      const closeTime = new Date(now); closeTime.setHours(ch, cm, 0, 0)
      return now >= openTime && now < closeTime
    })

    if (inSlot) {
      statusText = `Momentálně otevřeno do ${inSlot.close}`
      dotColor    = "bg-green-600"
    } else {
      // find next opening...
      const laterToday = todaySlots
        .map(s => {
          const [oh, om] = s.open.split(":").map(Number)
          const dt = new Date(now); dt.setHours(oh, om, 0, 0)
          return dt > now ? s : null
        })
        .filter(Boolean) as Slot[]

      if (laterToday.length) {
        statusText = `Momentálně zavřeno, dnes otevřeno v ${laterToday[0].open}`
      } else {
        let found = false
        let offset = 1
        let nextDayName = ""
        let nextOpenTime = ""
        while (!found && offset <= 7) {
          const idx   = (todayIdx + offset) % 7
          const slots = schedule[idx]
          if (slots && slots.length) {
            found        = true
            nextDayName  = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offset)
              .toLocaleDateString("cs-CZ", { weekday: "long" })
            nextOpenTime = slots[0].open
          }
          offset++
        }
        statusText = nextDayName
          ? `Momentálně zavřeno, další otevření ${nextDayName} v ${nextOpenTime}`
          : "Momentálně zavřeno"
      }
    }
  } else {
    statusText = "Momentálně zavřeno"
  }

  const todayString = now.toLocaleDateString("cs-CZ", {
    weekday: "long",
    day:     "numeric",
    month:   "long",
    year:    "numeric",
  })

  return (
    <div className="flex flex-col items-center mb-6">
      {/* Bigger, centered date */}
      <div className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Dnes je {todayString}
      </div>

      {/* Teal card, centered */}
<div className="bg-teal-400 rounded-lg shadow-md px-6 py-4 w-full max-w-md text-center">
  {/* Header – now full-width flex, centered */}
  <div className="bg-white border border-gray-300 rounded-md px-4 py-2 flex items-center justify-center mb-2 w-full">
    <Clock className="mr-2" size={20} />
    <span className="font-semibold text-gray-800">
      Ordinační hodiny
    </span>
  </div>

  


        {/* Status line */}
        <div className="flex items-center justify-center">
          <span className={`inline-block w-3 h-3 rounded-full mr-2 ${dotColor}`} />
          <span className="text-gray-800">{statusText}</span>
        </div>
      </div>
    </div>
  )
}

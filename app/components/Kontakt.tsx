"use client"
import React, { useState } from "react"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function Kontakt() {
  const [name,    setName]    = useState("")
  const [email,   setEmail]   = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        alert("Děkujeme, vaše zpráva byla odeslána!")
        setName(""); setEmail(""); setMessage("")
      } else {
        throw new Error("Chyba serveru")
      }
    } catch (err) {
      console.error(err)
      alert("Něco se pokazilo, zkuste to prosím později.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center md:text-left">
          Kontaktujte nás
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Máte dotaz … napište nám, zavolejte nebo přijďte přímo na kliniku.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: <MapPin className="w-5 h-5" />,
                  text: "Vítězná 123, 160 00 Praha 6",
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  text: <a href="mailto:info@vetcare.cz" className="hover:underline">info@vetcare.cz</a>,
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  text: <a href="tel:+420123456789" className="hover:underline">+420 123 456 789</a>,
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  text: "Po–Pá 8:00–18:00, So 9:00–12:00, Ne zavřeno",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="bg-teal-500 text-white p-2 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <span className="text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md space-y-6"
          >
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
                Jméno
              </label>
              <input
                id="name"
                type="text"
                value={name}
                required
                onChange={e => setName(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
                Zpráva
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                required
                onChange={e => setMessage(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
              {loading ? "Odesílám…" : "Odeslat zprávu"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

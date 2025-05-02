// components/Footer.jsx
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-900 text-green-200 py-8 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">VetClinic</h3>
          <p>1234 Zvířecí Ulice</p>
          <p>Praha, Česká republika</p>
          <p>Tel: +420 123 456 789</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Rychlé odkazy</h4>
          <ul>
            <li><Link href="/" className="hover:text-white">Domů</Link></li>
            <li><Link href="/sluzby" className="hover:text-white">Služby</Link></li>
            <li><Link href="/o-nas" className="hover:text-white">O nás</Link></li>
            <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Sledujte nás</h4>
          <div className="flex space-x-4">
            <a href="#"><Facebook size={20} className="text-green-200 hover:text-white"/></a>
            <a href="#"><Instagram size={20} className="text-green-200 hover:text-white"/></a>
            <a href="#"><Twitter size={20} className="text-green-200 hover:text-white"/></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-sm">
        &copy; {new Date().getFullYear()} VetClinic. Všechna práva vyhrazena.
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { LogoMain } from '../../assets';
import { navLinks } from '../../constants/services';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-surface font-space sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={LogoMain}
              alt="Positivus Logo"
              className="h-8 w-auto max-w-[13.7rem] object-contain md:h-10"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand text-lg font-normal transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="outline">Request a quote</Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-surface border-dark space-y-4 border-b-2 p-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-xl"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="w-full">
            Request a quote
          </Button>
        </div>
      )}
    </nav>
  );
}

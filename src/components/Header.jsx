import React from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dark border-b border-neon-blue/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold neon-glow">VAPES Premium</div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="hover:text-neon-blue transition-smooth">Recursos</a>
          <a href="#products" className="hover:text-neon-blue transition-smooth">Produtos</a>
          <a href="#about" className="hover:text-neon-blue transition-smooth">Sobre</a>
          <a href="#contact" className="hover:text-neon-blue transition-smooth">Contato</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neon-blue"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-dark/95 border-t border-neon-blue/20 p-4 space-y-4">
          <a href="#features" className="block hover:text-neon-blue transition-smooth">Recursos</a>
          <a href="#products" className="block hover:text-neon-blue transition-smooth">Produtos</a>
          <a href="#about" className="block hover:text-neon-blue transition-smooth">Sobre</a>
          <a href="#contact" className="block hover:text-neon-blue transition-smooth">Contato</a>
        </nav>
      )}
    </header>
  )
}

export default Header

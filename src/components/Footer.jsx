import React from 'react'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="bg-dark border-t border-neon-blue/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold neon-glow mb-4">VAPES Premium</h3>
            <p className="text-gray-400">Design system moderno e elegante</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-neon-blue transition-smooth">Documentação</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-smooth">Componentes</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-smooth">Exemplos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4 text-neon-blue">
              <a href="#" className="hover:text-neon-purple transition-smooth"><FiGithub size={24} /></a>
              <a href="#" className="hover:text-neon-purple transition-smooth"><FiTwitter size={24} /></a>
              <a href="#" className="hover:text-neon-purple transition-smooth"><FiLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neon-blue/20 pt-8 text-center text-gray-400">
          <p>&copy; 2024 VAPES Premium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

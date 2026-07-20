import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow">
          VAPES Premium Design System
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Componentes modernos e elegantes para sua aplicação
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-neon-blue text-dark px-8 py-3 rounded-lg font-bold hover:bg-neon-blue/80 transition-smooth neon-glow-box">
            Começar
          </button>
          <button className="border-2 border-neon-blue text-neon-blue px-8 py-3 rounded-lg font-bold hover:bg-neon-blue/10 transition-smooth">
            Documentação
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

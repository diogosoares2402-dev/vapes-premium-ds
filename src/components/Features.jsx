import React from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiCode, FiBox, FiSettings } from 'react-icons/fi'

function Features() {
  const features = [
    {
      icon: <FiZap size={32} />,
      title: 'Rápido & Responsivo',
      description: 'Componentes otimizados para performance máxima'
    },
    {
      icon: <FiCode size={32} />,
      title: 'Fácil de Usar',
      description: 'API simples e intuitiva para desenvolvedores'
    },
    {
      icon: <FiBox size={32} />,
      title: 'Customizável',
      description: 'Totalmente personalizável com Tailwind CSS'
    },
    {
      icon: <FiSettings size={32} />,
      title: 'Bem Documentado',
      description: 'Documentação completa e exemplos práticos'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-glow">Características</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-lg border border-neon-blue/30 hover:border-neon-blue/70 transition-smooth hover:neon-glow-box"
          >
            <div className="text-neon-blue mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features

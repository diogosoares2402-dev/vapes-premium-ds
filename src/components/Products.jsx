import React from 'react'
import { motion } from 'framer-motion'

function Products() {
  const products = [
    {
      name: 'Button',
      description: 'Botões com várias variações e estados',
      color: 'neon-blue'
    },
    {
      name: 'Card',
      description: 'Componentes de cartão elegantes e flexíveis',
      color: 'neon-purple'
    },
    {
      name: 'Input',
      description: 'Campos de entrada com validação integrada',
      color: 'neon-blue'
    },
    {
      name: 'Modal',
      description: 'Diálogos e modais responsivos',
      color: 'neon-purple'
    }
  ]

  return (
    <section id="products" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-glow">Componentes</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="h-48 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 p-6 flex flex-col justify-between border border-neon-blue/30 hover:border-neon-blue/70 transition-smooth group-hover:neon-glow-box">
              <div>
                <h3 className="text-2xl font-bold text-neon-blue mb-2">{product.name}</h3>
                <p className="text-gray-400">{product.description}</p>
              </div>
              <button className="text-neon-blue hover:text-neon-purple transition-smooth font-bold">
                Ver mais →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Products

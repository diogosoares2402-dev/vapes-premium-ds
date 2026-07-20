import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiX } from 'react-icons/fi';
import ProductCard from './ProductCard';

const Catalog = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAvailability, setFilterAvailability] = useState('all');
  const [editingPrices, setEditingPrices] = useState({});

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAvailability =
      filterAvailability === 'all' ||
      (filterAvailability === 'available' && product.available) ||
      (filterAvailability === 'unavailable' && !product.available);
    return matchesSearch && matchesAvailability;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-dark-bg py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-neon-blue via-white to-neon-purple bg-clip-text text-transparent">
            Catálogo
          </h2>
          <p className="text-gray-400 text-lg">Descobre a nossa seleção premium de sabores</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue w-5 h-5" />
            <input
              type="text"
              placeholder="Pesquisar sabores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all"
            />
          </div>

          {/* Availability Filter */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-gray-400">
              <FiFilter className="w-5 h-5" />
              <span>Filtro:</span>
            </div>
            {['all', 'available', 'unavailable'].map((filter) => (
              <button
                key={filter}
                onClick={() => setFilterAvailability(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filterAvailability === filter
                    ? 'bg-neon-blue text-dark-bg'
                    : 'glass text-gray-300 hover:text-neon-blue'
                }`}
              >
                {filter === 'all' && 'Todos'}
                {filter === 'available' && 'Disponível'}
                {filter === 'unavailable' && 'Indisponível'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-8"
        >
          {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard
                  product={product}
                  onPriceEdit={(newPrice) =>
                    setEditingPrices({
                      ...editingPrices,
                      [product.id]: newPrice,
                    })
                  }
                  editingPrice={editingPrices[product.id] || product.price}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-400">Nenhum produto encontrado</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Catalog;

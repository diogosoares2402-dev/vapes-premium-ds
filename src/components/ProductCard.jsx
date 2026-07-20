import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiEdit2, FiCheck } from 'react-icons/fi';

const ProductCard = ({ product, onPriceEdit, editingPrice }) => {
  const [isEditingPrice, setIsEditingPrice] = useState(false);
  const [tempPrice, setTempPrice] = useState(editingPrice);

  const handleSavePrice = () => {
    onPriceEdit(tempPrice);
    setIsEditingPrice(false);
  };

  const handleOrder = () => {
    window.open('https://instagram.com/vapes_premium_ds', '_blank');
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full"
    >
      <div className="glass rounded-2xl overflow-hidden h-full flex flex-col backdrop-blur-xl bg-opacity-5 hover:bg-opacity-10 transition-all duration-300">
        {/* Image Container */}
        <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-neon-blue/10 to-neon-purple/10">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Availability Badge */}
          <div className="absolute top-4 right-4">
            {product.available ? (
              <div className="px-3 py-1 bg-neon-blue text-dark-bg text-xs font-bold rounded-full">
                Disponível
              </div>
            ) : (
              <div className="px-3 py-1 bg-gray-600 text-white text-xs font-bold rounded-full">
                Indisponível
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          {/* Product Info */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-gray-400 mb-3">{product.puffs} Puffs</p>
          </div>

          {/* Price Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Preço:</span>
              <button
                onClick={() => setIsEditingPrice(!isEditingPrice)}
                className="text-neon-blue hover:text-neon-purple transition-colors"
              >
                <FiEdit2 className="w-4 h-4" />
              </button>
            </div>
            
            {isEditingPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-400">€</span>
                <input
                  type="number"
                  value={tempPrice}
                  onChange={(e) => setTempPrice(parseFloat(e.target.value))}
                  className="flex-1 bg-dark-bg border border-neon-blue rounded px-2 py-1 text-white text-sm"
                  step="0.01"
                  min="0"
                />
                <button
                  onClick={handleSavePrice}
                  className="text-neon-blue hover:text-neon-purple transition-colors"
                >
                  <FiCheck className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <p className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                €{editingPrice.toFixed(2)}
              </p>
            )}
          </div>

          {/* Order Button */}
          <motion.button
            onClick={handleOrder}
            disabled={!product.available}
            whileHover={product.available ? { scale: 1.05 } : {}}
            whileTap={product.available ? { scale: 0.95 } : {}}
            className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
              product.available
                ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-lg hover:shadow-neon-blue/50'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
            }`}
          >
            <FiShoppingCart className="w-5 h-5" />
            {product.available ? 'ENCOMENDAR' : 'INDISPONÍVEL'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

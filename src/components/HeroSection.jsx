import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram } from 'react-icons/fi';

const HeroSection = ({ onCatalogClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative w-full h-screen bg-dark-bg overflow-hidden flex items-center justify-center">
      {/* Animated Background Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
              <span className="text-xl font-bold">VP</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-neon-blue via-white to-neon-purple bg-clip-text text-transparent mb-2">
            VAPES PREMIUM DS
          </h1>
        </motion.div>

        {/* Slogan */}
        <motion.div variants={itemVariants}>
          <p className="text-2xl md:text-4xl font-light text-gray-300 mb-8 tracking-wide">
            Premium em Cada Nuvem.
          </p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants}>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Descobre a excelência em cada tragada. Produtos premium, design minimalista e qualidade internacional.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={onCatalogClick}
            className="group relative px-8 py-4 text-lg font-semibold text-dark-bg bg-neon-blue rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/50"
          >
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">Ver Catálogo</span>
          </button>

          <a
            href="https://instagram.com/vapes_premium_ds"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 text-lg font-semibold text-neon-blue border-2 border-neon-blue rounded-lg hover:bg-neon-blue hover:text-dark-bg transition-all duration-300"
          >
            <FiInstagram className="w-6 h-6" />
            Instagram
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex items-center justify-center">
          <motion.div
            className="w-1 h-2 bg-neon-blue rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

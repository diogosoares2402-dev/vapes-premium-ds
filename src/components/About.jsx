import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiTrendingUp, FiUsers, FiHeart } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: FiAward,
      title: 'Qualidade Premium',
      description: 'Produtos de alta qualidade com os melhores sabores internacionais',
    },
    {
      icon: FiTrendingUp,
      title: 'Inovação Constante',
      description: 'Acompanhamos as tendências globais em vaping premium',
    },
    {
      icon: FiUsers,
      title: 'Comunidade Global',
      description: 'Milhares de clientes satisfeitos em todo o mundo',
    },
    {
      icon: FiHeart,
      title: 'Dedicação ao Cliente',
      description: 'Suporte excepcional e experiência de compra premium',
    },
  ];

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
    <section className="relative min-h-screen bg-dark-bg py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-10 transform -translate-x-1/2"
          animate={{
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-neon-blue via-white to-neon-purple bg-clip-text text-transparent">
            Sobre Nós
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça a história por trás do Vapes Premium DS
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Vapes Premium DS é mais do que uma marca de vapes. Somos uma filosofia de vida dedicada à excelência,
              inovação e à criação de experiências memoráveis para os nossos clientes.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Cada produto é cuidadosamente selecionado e testado para garantir que apenas o melhor chega às mãos
              dos nossos clientes. Com sabores internacionais e design minimalista, criamos a experiência de vaping premium.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              A nossa missão é simples: "Premium em Cada Nuvem." Acreditamos que todos merecem a melhor qualidade,
              design excepcional e atendimento de classe mundial.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '20+', label: 'Sabores Premium' },
              { number: '5000+', label: 'Clientes Felizes' },
              { number: '50', label: 'Países' },
              { number: '24/7', label: 'Suporte' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-6 text-center"
              >
                <h3 className="text-3xl font-black bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass rounded-xl p-6 text-center"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-neon-blue" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Os Nossos Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-neon-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">01</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Qualidade</h4>
              <p className="text-gray-400 text-sm">
                Apenas os melhores materiais e sabores internacionais
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-neon-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">02</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Inovação</h4>
              <p className="text-gray-400 text-sm">
                Seguimos as tendências globais e criamos novas experiências
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-neon-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">03</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Sustentabilidade</h4>
              <p className="text-gray-400 text-sm">
                Comprometidos com práticas responsáveis e éticas
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'info@vapespremium.ds',
      href: 'mailto:info@vapespremium.ds',
    },
    {
      icon: FaInstagram,
      title: 'Instagram',
      value: '@vapes_premium_ds',
      href: 'https://instagram.com/vapes_premium_ds',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '+351 912 345 678',
      href: 'https://wa.me/351912345678',
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
          className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
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
            Contacto
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tem alguma dúvida? Contacte-nos e responderemos o mais brevemente possível
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-white font-medium mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all"
                  placeholder="seu.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white font-medium mb-2">Assunto</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all"
                  placeholder="Assunto da mensagem"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-medium mb-2">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all resize-none"
                  placeholder="Sua mensagem aqui..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
              >
                <FiSend className="w-5 h-5" />
                Enviar Mensagem
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-neon-blue/20 border border-neon-blue rounded-lg text-neon-blue text-center font-medium"
                >
                  ✓ Mensagem enviada com sucesso!
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="glass rounded-xl p-6 block hover:bg-opacity-20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
                      <p className="text-gray-400">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* Opening Hours */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-xl p-6 bg-neon-blue/10"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FiMapPin className="w-5 h-5 text-neon-blue" />
                Horário de Funcionamento
              </h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Seg - Sex: 09:00 - 18:00</p>
                <p>Sábado: 10:00 - 16:00</p>
                <p>Domingo: Fechado</p>
                <p className="text-neon-blue font-medium mt-4">Atendimento 24/7 via Instagram</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

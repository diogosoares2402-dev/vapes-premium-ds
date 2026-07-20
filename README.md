# Vapes Premium DS 🌫️

**Premium em Cada Nuvem**

Um website premium para a marca Vapes Premium DS, desenvolvido com React, Vite, Tailwind CSS e Framer Motion.

## 🚀 Funcionalidades

- ✨ **Design Moderno**: Interface minimalista com tema escuro e gradientes neon
- 🎨 **Animações Fluidas**: Animações suaves com Framer Motion
- 📱 **Responsivo**: Totalmente adaptado para dispositivos móveis
- 🛍️ **Catálogo Premium**: Visualização de produtos com filtros e busca
- 💰 **Edição de Preços**: Possibilidade de editar preços dos produtos em tempo real
- 📋 **Formulário de Contacto**: Sistema de contacto integrado
- 🔗 **Integração Social**: Links diretos para Instagram e WhatsApp
- ⚡ **Performance**: Otimizado com Vite para carregamento rápido

## 🛠️ Stack Tecnológico

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animações**: Framer Motion
- **Icons**: React Icons, Font Awesome
- **Fonts**: Inter (Google Fonts)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/diogosoares2402-dev/vapes-premium-ds.git
cd vapes-premium-ds
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🏗️ Estrutura do Projeto

```
vapes-premium-ds/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Catalog.jsx
│   │   ├── ProductCard.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎯 Páginas

### Home
- Seção hero com animações visuais atraentes
- Call-to-action para catálogo e redes sociais

### Catálogo
- Grid responsivo de 20+ produtos
- Filtro por disponibilidade
- Busca de produtos em tempo real
- Edição de preços
- Botão de encomenda com link direto ao Instagram

### Sobre
- Informações sobre a marca
- Estatísticas (Sabores, Clientes, Países, Suporte)
- Características principais
- Valores da empresa

### Contacto
- Formulário de contacto funcional
- Métodos de contacto diretos (Email, Instagram, WhatsApp)
- Horário de funcionamento
- Atendimento 24/7 via Instagram

## 🎨 Paleta de Cores

- **Fundo Principal**: #090909 (Dark)
- **Neon Azul**: #00BFFF
- **Neon Roxo**: #7B2FFF
- **Cinzento**: #666, #999, #CCC

## 📱 Breakpoints Responsivos

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build para Produção
```bash
npm run build
```

Os ficheiros otimizados serão gerados em `dist/`

### Preview
```bash
npm run preview
```

## 📝 Configuração

### Editar Produtos

Modifique `src/data/products.js` para adicionar, remover ou atualizar produtos:

```javascript
{
  id: 1,
  name: 'Nome do Produto',
  puffs: '15.000',
  price: 25.99,
  available: true,
  image: 'url-da-imagem'
}
```

### Editar Contactos

Modifique o arquivo `src/components/Contact.jsx` para atualizar:
- Email
- Instagram
- WhatsApp
- Horários de funcionamento

## 🔗 Links Importantes

- [Instagram](https://instagram.com/vapes_premium_ds)
- [Website](https://vapes-premium-ds.com)

## 📄 Licença

Este projeto é privado e propriedade da Vapes Premium DS.

## 👨‍💻 Desenvolvedor

**Diogo Soares** - [@diogosoares2402-dev](https://github.com/diogosoares2402-dev)

---

**Premium em Cada Nuvem** ☁️✨

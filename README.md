# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Elements**: Hover effects and micro-interactions
- **SEO Optimized**: Built with Next.js for optimal performance
- **TypeScript**: Full type safety and better development experience

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
personal-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Portfolio projects
│   ├── Experience.tsx     # Work experience
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer component
│   └── ThemeToggle.tsx    # Theme switcher
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **Personal Details**: Edit `components/About.tsx`
- **Skills**: Modify `components/Skills.tsx`
- **Projects**: Update `components/Projects.tsx`
- **Experience**: Edit `components/Experience.tsx`
- **Contact**: Update `components/Contact.tsx`

### Styling

- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update `app/globals.css` for custom typography
- **Layout**: Adjust spacing and layout in individual components

### Content

- **Hero Section**: Update name, title, and description in `components/Hero.tsx`
- **Navigation**: Modify navigation items in `components/Header.tsx`
- **Social Links**: Update social media URLs in `components/Contact.tsx` and `components/Footer.tsx`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🌙 Dark Mode

The website includes a built-in dark mode toggle that:
- Automatically detects user's system preference
- Saves user's choice in localStorage
- Provides smooth transitions between themes
- Maintains consistent styling across both themes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Heroku

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration Files

- **`next.config.js`** - Next.js configuration
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`tsconfig.json`** - TypeScript configuration
- **`postcss.config.js`** - PostCSS configuration

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for better performance
- **Lazy Loading**: Components load as they come into view
- **Optimized Fonts**: Google Fonts with proper loading strategies

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **TypeScript errors**
   ```bash
   # Clear TypeScript cache
   rm -rf .next
   npm run dev
   ```

3. **Tailwind not working**
   ```bash
   # Rebuild CSS
   npm run build
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Contact: your.email@example.com

---

**Happy coding! 🚀** 
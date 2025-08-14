# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a beautiful design system, smooth animations, and comprehensive component architecture.

## 🌟 Features

- **Modern Design System**: Comprehensive theming with semantic color tokens
- **Dark/Light Mode**: Automatic theme switching with smooth transitions
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Modular, reusable components
- **SEO Optimized**: Semantic HTML and proper meta tags
- **Performance Optimized**: Code splitting and optimized bundle

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, etc.)
│   ├── Hero.tsx        # Hero section component
│   ├── About.tsx       # About section component
│   └── ...             # Other page sections
├── config/             # Configuration files
│   └── portfolio.config.ts  # Portfolio data configuration
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── pages/              # Page components
└── lib/                # Utility functions
```

## 🎨 Customization

### Updating Portfolio Data

Edit `src/config/portfolio.config.ts` to update:
- Personal information
- Work experience
- Projects
- Skills
- Education
- Contact details

### Styling & Theming

The design system is defined in:
- `src/index.css` - CSS custom properties and global styles
- `tailwind.config.ts` - Tailwind CSS configuration

All colors use HSL format and are defined as semantic tokens for easy theming.

### Adding New Components

1. Create component in `src/components/`
2. Add proper TypeScript interfaces
3. Include comprehensive JSDoc comments
4. Use semantic design tokens from the design system
5. Add to the main page in `src/pages/Index.tsx`

## 🏗️ Architecture

### Design System

The project uses a comprehensive design system with:
- **Semantic color tokens**: Primary, secondary, accent colors
- **Responsive typography**: Scalable font sizes
- **Consistent spacing**: Standardized margins and padding
- **Animation utilities**: Smooth transitions and hover effects

### Component Guidelines

- **TypeScript interfaces**: All components have proper type definitions
- **JSDoc comments**: Comprehensive documentation for all functions
- **Semantic HTML**: Proper HTML5 semantic elements for SEO
- **Accessibility**: ARIA labels and keyboard navigation support

### State Management

- **React Context**: Global state for portfolio data
- **Custom hooks**: Reusable logic (scroll animations, mobile detection)
- **Local state**: Component-specific state management

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 SEO & Performance

### SEO Features
- Semantic HTML5 structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Clean, crawlable URLs

### Performance Optimizations
- Code splitting with React.lazy
- Optimized images with proper sizing
- Minimal bundle size
- Fast loading with Vite

## 🔧 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deploy to Various Platforms

The built application can be deployed to:
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Any static hosting**: Upload the `dist/` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes with proper documentation
4. Test thoroughly
5. Commit with clear messages: `git commit -m "Add new feature"`
6. Push to your fork: `git push origin feature/new-feature`
7. Create a Pull Request

### Code Style Guidelines

- Use TypeScript for all new code
- Add JSDoc comments for all functions and components
- Follow the existing component structure
- Use semantic design tokens instead of hardcoded values
- Write responsive CSS using Tailwind utilities

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For questions or issues:
1. Check the existing documentation
2. Search for similar issues in the repository
3. Create a new issue with detailed information
4. Include steps to reproduce any bugs

## 🙏 Acknowledgments

Built with:
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Vite](https://vitejs.dev/) - Build tool
- [Radix UI](https://www.radix-ui.com/) - UI primitives
- [Lucide React](https://lucide.dev/) - Icon library
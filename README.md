# Assured Gig MVP

A modern web application built with Next.js, TypeScript, and Tailwind CSS that helps manage and track gig work opportunities.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd assured-gig-mvp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add necessary environment variables:
   ```env
   DATABASE_URL="your-database-url"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
src/
├── app/              # Next.js app directory (pages and layouts)
├── components/       # Reusable UI components
├── context/         # React context providers
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
└── registry/        # Component registry and styles
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- **Database**: [Prisma](https://www.prisma.io/) - Next-generation ORM
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Form validation
- **Data Validation**: [Zod](https://zod.dev/) - TypeScript-first schema validation

## 🔑 Key Features

- Modern, responsive UI with Tailwind CSS
- Type-safe development with TypeScript
- Authentication and authorization
- Form validation and handling
- Database integration with Prisma
- Component-based architecture
- Accessibility-first design

## 🎨 UI Components

The project uses a combination of:
- Radix UI primitives for accessible components
- Custom styled components with Tailwind CSS
- Framer Motion for animations
- Lucide React for icons

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- ESLint for code linting
- TypeScript for type checking
- Prettier for code formatting

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

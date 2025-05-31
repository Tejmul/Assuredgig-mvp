import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AssuredGig - Hire Top Freelancers with Confidence',
  description: 'Connect with verified professionals, manage projects seamlessly, and ensure secure payments all in one place.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen antialiased`}>
        <AuthProvider>
          <div className="min-h-screen w-full flex flex-col bg-black transition-colors duration-300">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
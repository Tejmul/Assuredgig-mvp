import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/ui/shared/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Assured Gig - Freelance Marketplace',
  description: 'Connect with top talent and opportunities in our premium freelance marketplace.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-surface`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
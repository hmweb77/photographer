import Header from '@/components/Header/Header';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Travel',
  description: 'Next travel experience',
  icons: { icon: '/images/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}

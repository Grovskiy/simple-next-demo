import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/app/components/ui/Header';
import { Footer } from '@/app/components/ui/Footer';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Simple app',
  description: 'This app do nothing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col font-[family-name:var(--font-geist-sans)]">
          <Header />
          <main className="flex w-full flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

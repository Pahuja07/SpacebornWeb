import type { Metadata, Viewport } from 'next';
import './globals.css';
import './deryk/mission-control.css';

export const metadata: Metadata = {
  title: 'DERYK | Autonomous Mission System',
  description: 'A mission-control intelligence layer for autonomous operations.',
  icons: {
    icon: '/images/deryk-logo.jpeg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#080b0b',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
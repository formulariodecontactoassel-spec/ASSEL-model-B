import type { Metadata } from 'next';
import './globals.css';
import { ContentProvider } from './components/content-provider';
import { SiteChrome } from './components/site-chrome';

export const metadata: Metadata = {
  metadataBase: new URL('https://assel.cl'),
  applicationName: 'ASSEL SpA',
  title: { default: 'ASSEL SpA | Prevención y seguridad laboral', template: '%s · ASSEL SpA' },
  description: 'Asesoría en prevención de riesgos, seguridad laboral, cumplimiento normativo, cultura preventiva y EPP para empresas en Chile.',
  keywords: ['prevención de riesgos', 'seguridad laboral', 'asesoría en prevención', 'DS 44', 'Ley Karin', 'EPP', 'ASSEL', 'Chile'],
  authors: [{ name: 'ASSEL SpA' }],
  creator: 'ASSEL SpA',
  publisher: 'ASSEL SpA',
  formatDetection: { telephone: false },
  alternates: { canonical: '/' },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'ASSEL SpA | Prevenir con criterio. Avanzar con confianza.',
    description: 'Prevención de riesgos, cumplimiento normativo y seguridad laboral para empresas que quieren avanzar con confianza.',
    url: '/',
    siteName: 'ASSEL SpA',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'ASSEL SpA — Prevención y seguridad laboral' }],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASSEL SpA | Prevención y seguridad laboral',
    description: 'Prevenir con criterio. Gestionar con seguridad.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body><ContentProvider><SiteChrome>{children}</SiteChrome></ContentProvider></body>
    </html>
  );
}

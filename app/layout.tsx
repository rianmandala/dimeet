import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dimeet',
  description: 'Video calling App',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="title"
          content="Dimeet - Seamless Online Meeting Platform"
        />
        <meta
          name="description"
          content="Dimeet is a secure and feature-rich online meeting platform. Easily start, manage, and schedule meetings with real-time functionality and responsive design."
        />
        <meta
          name="keywords"
          content="Dimeet, online meetings, video conferencing, secure meetings, real-time collaboration, meeting recordings, meeting scheduling, personal meeting rooms"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Rian Mandala" />
        <meta
          property="og:title"
          content="Dimeet - Seamless Online Meeting Platform"
        />
        <meta
          property="og:description"
          content="Join or host secure online meetings with Dimeet. Enjoy features like meeting scheduling, real-time collaboration, and more."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dg6ymnwfn/image/upload/v1721423176/portofolio/projects/hnhm0h0aybr7zuxah500.png"
        />
        <meta property="og:url" content="https://dimeet.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dimeet - Seamless Online Meeting Platform"
        />
        <meta
          name="twitter:description"
          content="Experience secure and seamless online meetings with Dimeet. Start, manage, and schedule meetings with ease."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dg6ymnwfn/image/upload/v1721423176/portofolio/projects/hnhm0h0aybr7zuxah500.png"
        />
        <meta name="twitter:url" content="https://dimeet.vercel.app/" />
      </head>
      <ClerkProvider
        appearance={{
          elements: {
            socialButtonsIconButton: {
              backgroundColor: '#252A41',
            },
          },
          layout: {
            socialButtonsVariant: 'iconButton',
            logoImageUrl: '/icons/dimeet-logo.svg',
          },
          variables: {
            colorText: '#fff',
            colorPrimary: '#0E78F9',
            colorBackground: '#1C1F2E',
            colorInputBackground: '#252A41',
            colorInputText: '#fff',
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}

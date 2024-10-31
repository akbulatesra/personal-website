import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/footer';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Frontend Developer Esra Akbulat',
  description: "Frontend Developer Esra Akbulat's Personal Portfolio Website",
};

function getTheme() {
  const cookieStore = cookies();
  const themeCookie = cookieStore.get('theme');
  const theme = themeCookie ? themeCookie.value : 'dark';
  return theme;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = getTheme() as string;
  return (
    <html
      lang="en"
      className={`font-roboto ${theme}`}
      style={{ colorScheme: theme }}
    >
      <body className="dark:bg-special_black dark:text-special_white">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <div className="px-6 py-4 md:px-20 md:py-8 xl:px-36 lg:py-16 dark:bg-special_black dark:text-special_white 2xl:max-w-[1536px] 2xl:mx-auto">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

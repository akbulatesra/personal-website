import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Frontend Developer Esra Akbulat',
  description: "Frontend Developer Esra Akbulat's Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-roboto">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <div className="px-36 py-16 dark:bg-special_black dark:text-special_white">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

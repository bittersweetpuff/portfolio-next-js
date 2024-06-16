import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Website',
  description: 'Example portfolio website with Next.js, Tailwind and other cool stuff.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 ms:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
      <div className='bg-rose-300 dark:bg-purple-900 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
      <div className='bg-blue-400 dark:bg-rose-900 absolute top-[-1rem] -z-10 left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position='top-right' />
          <Footer />
          <ThemeSwitch />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
      </body>
    </html>
  )
}

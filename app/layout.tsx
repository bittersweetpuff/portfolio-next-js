import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';

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
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 ms:pt-36`}>
      <div className='bg-purple-500 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
      <div className='bg-yellow-300 absolute top-[-1rem] -z-10 left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
      <Header />
      {children}
      </body>
    </html>
  )
}

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Adventure Keeper',
  description: 'A place to keep track of your adventures of all kinds of role playing games',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

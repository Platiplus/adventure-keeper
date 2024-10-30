'use client'

import { SunIcon, MoonIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

export const ThemeChooser = () => {
  const { setTheme, theme } = useTheme()

  if (theme === 'dark')
    return (
      <DropdownMenuItem onClick={() => setTheme('light')}>
        <SunIcon className="mr-1" />
        Switch to Light Mode
      </DropdownMenuItem>
    )
  if (theme === 'light')
    return (
      <DropdownMenuItem onClick={() => setTheme('dark')}>
        <MoonIcon className="mr-1" />
        Switch to Dark Mode
      </DropdownMenuItem>
    )

  return null
}

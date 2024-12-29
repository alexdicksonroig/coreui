import { useEffect } from 'react'
import { themes } from '@storybook/theming';
import { Decorator, Parameters } from '@storybook/react'

import '../src/index.css'

type Theme = 'light' | 'dark'

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme as Theme

  useEffect(() => {
    var root = document.getElementsByTagName('html')[0]
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  return <Story />
}

// Decorators array with proper typing
export const decorators: Decorator[] = [withTheme]

// Default parameters with typing (optional but recommended)
export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  darkMode: {
    stylePreview: true,
  }
}

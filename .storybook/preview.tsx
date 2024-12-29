import { useEffect } from 'react'
import { themes } from '@storybook/theming'
import { Decorator, Parameters } from '@storybook/react'

import '../src/index.css'

// Default parameters with typing (optional but recommended)
export const parameters: Parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  darkMode: {
    stylePreview: true,
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' },
  },
}

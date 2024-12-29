import { themes } from '@storybook/theming'
import { Parameters } from '@storybook/react'

import '../src/index.css'

export const parameters: Parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  darkMode: {
    stylePreview: true,
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: 'white' },
  },
  options: {
    storySort: {
      order: ['Components','Collections'],
    }
  },
}

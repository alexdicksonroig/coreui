import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button, buttonStyles } from '@/components/ui/button'
import { hideArgs } from '@/lib/helpers'

export function Component() {
  return <p>Button</p> 
}

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' }, 
      options: Object.keys(buttonStyles.variants.variant), 
    },
    size: {
      control: { type: 'select' }, 
      options: Object.keys(buttonStyles.variants.size), 
    },
    ...hideArgs(['onClick', 'children']),
  },
  args: { onClick: fn(), children: Component()},
} satisfies Meta<typeof Button>

export default meta

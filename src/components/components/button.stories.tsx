import type { Meta } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button, buttonStyles, ButtonProps } from '@/components/ui/button'
import { hideArgs } from '@/lib/helpers'

export function Component({ ...props }: ButtonProps) {
  return (
    <Button {...props}>
      <p>Button</p>
    </Button>
  )
}

const meta = {
  title: 'Components/Button',
  component: Component,
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
    ...hideArgs(['onClick']),
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta

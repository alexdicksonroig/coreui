import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/components/ui/input'

function Component({ ...props}){
  return Input
}
const meta = {
  title: 'Components/Input',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

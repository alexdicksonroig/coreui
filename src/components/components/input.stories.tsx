import type { Meta } from '@storybook/react'

import { Input } from '@/components/components/input'

export function Component({ ...props}){
  return <Input {...props}/>
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

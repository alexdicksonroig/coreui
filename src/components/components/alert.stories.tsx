import { Terminal } from 'lucide-react'
import { Meta } from '@storybook/react'

import { Alert, AlertDescription, alertStyles, AlertTitle } from '@/components/components/alert'

export function Component({ ...props }) {
  return (
    <Alert {...props}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}

const meta = {
  title: 'Components/Alert',
  component: Component,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(alertStyles.variants.variant),
    },
  },
} satisfies Meta<typeof Alert>

export default meta

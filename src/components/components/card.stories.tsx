import type { Meta } from '@storybook/react'

import { Button } from '@/components/components/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/components/card'
import { Input } from '@/components/components/input'

export function Component({ ...props }) {
  return (
    <Card className="w-[350px]" {...props}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5"></div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
const meta = {
  title: 'Components/Card',
  component: Component,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>

export default meta

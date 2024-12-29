import type { Meta } from '@storybook/react'

import { Separator } from '@/components/components/separator'

export function Component({ ...props}){
   return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Separator example</h4>
        <p className="text-sm text-muted-foreground">
          Horizontal and vertical separators
        </p>
      </div>
      <Separator className="my-4" {...props} />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" {...props}/>
        <div>Docs</div>
        <Separator orientation="vertical" {...props}/>
        <div>Source</div>
      </div>
    </div>
  )

}
const meta = {
  title: 'Components/Separator',
  component: Component,
} satisfies Meta<typeof Separator>

export default meta

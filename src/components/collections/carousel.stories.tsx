import { Card, CardContent } from "@/components/ui/card"
import type { Meta, StoryObj } from '@storybook/react'
import { hideArgs } from '@/lib/helpers'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/collections/carousel"

export function Component() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

const meta = {
  title: 'Example/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  argTypes: hideArgs(['children']),
  tags: ['autodocs'],
  args: { children: Component() },
} satisfies Meta<typeof Carousel>

export default meta

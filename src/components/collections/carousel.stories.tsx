import { Card, CardContent } from '@/components/components/card'
import type { Meta } from '@storybook/react'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/collections/carousel'

export function Component() {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
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
  title: 'Collections/Carousel',
  component: Carousel,
} satisfies Meta<typeof Carousel>

export default meta

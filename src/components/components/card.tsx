import * as React from 'react'

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`} {...props} />
)

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
)

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`font-semibold leading-none tracking-tight ${className}`} {...props} />
)

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`text-sm text-muted-foreground ${className}`} {...props} />
)

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
)

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
)

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }


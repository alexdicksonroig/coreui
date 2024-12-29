import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const alertStyles = tv({
  base: 'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type AlertProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>

const Alert: React.FC<AlertProps> = ({ className = '', variant, ...props }) => {
  const classes = `${alertStyles({ variant })} ${className}`
  return <div role="alert" className={classes} {...props} />
}

type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>

const AlertTitle: React.FC<AlertTitleProps> = ({ className = '', ...props }) => {
  const classes = `mb-1 font-medium leading-none tracking-tight ${className}`
  return <h5 className={classes} {...props} />
}

type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>

const AlertDescription: React.FC<AlertDescriptionProps> = ({ className = '', ...props }) => {
  const classes = `text-sm [&_p]:leading-relaxed ${className}`
  return <div className={classes} {...props} />
}

export { Alert, AlertTitle, AlertDescription }

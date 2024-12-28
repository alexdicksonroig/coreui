import React from 'react'
import { ChevronDown } from 'lucide-react'

type AccordionProps = {
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

type AccordionItemProps = {
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

type AccordionTriggerProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  isOpen: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

type AccordionContentProps = {
  children: React.ReactNode
  className?: string
  isOpen: boolean
} & React.HTMLAttributes<HTMLDivElement>

const Accordion: React.FC<AccordionProps> = ({ children, className, ...props }) => {
  return (
    <div className={`accordion ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

const AccordionItem: React.FC<AccordionItemProps> = ({ className, children, ...props }) => {
  return (
    <div className={`border-b ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ className, children, onClick, isOpen, ...props }) => {
  return (
    <div className="flex">
      <button
        className={`flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left ${isOpen ? '[&>svg]:rotate-180' : ''} ${className || ''}`}
        onClick={onClick}
        {...props}>
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </button>
    </div>
  )
}

const AccordionContent: React.FC<AccordionContentProps> = ({ className, children, isOpen, ...props }) => {
  return (
    <div className={`overflow-hidden text-sm transition-[max-height] duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'} ${className || ''}`} {...props}>
      <div className={`pb-4 pt-0 ${className || ''}`}>{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

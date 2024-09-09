import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"


const inputVariants = cva(
  'flex items-center w-[70%] sm:w-full rounded-md border bg-foreground text-black border-input p-2 gap-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none accent-primary focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-foreground text-black',
        outline:
          'border border-input bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground',
        invisible:
          'bg-transparent text-foreground shadow-none outline-none border-none focus-visible:ring-0',
        rounded: 'bg-foreground text-black rounded-full',
        form: 'bg-foreground text-black',
        outlineWhite:
          'border border-input bg-background shadow-sm text-white hover:bg-white hover:text-black',
      },
      inputHeight: {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-10 md:h-12',
        xl: 'h-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputHeight: 'md',
    },
  },
)

const Input = React.forwardRef(({ variant, size, className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={(inputVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }

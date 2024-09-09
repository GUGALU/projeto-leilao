'use client'
import { cn } from '@/lib/utils'
import { forwardRef, useState } from 'react'
import { Button } from '../ui/button'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { cva } from "class-variance-authority";

const inputVariants = cva(
  'relative flex justify-start items-center rounded-md border bg-foreground text-black border-input px-4 gap-3 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none accent-primary focus-within:outline-1 focus-within:outline focus-within:outline-primary focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-foreground text-brand-gray-foreground',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground text-foreground',
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
      variant: 'outline',
      inputHeight: 'lg',
    },
  },
)

const PasswordInput = forwardRef(
  ({ className, variant, inputHeight, children, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
      <label
        className={cn(inputVariants({ variant, inputHeight }), className, '')}
      >
        {children}
        <div className='w-full'>
          {props.value && (
            <div className="text-xs font-bold">{props.placeholder}</div>
          )}
          <input
            type={showPassword ? 'text' : 'password'}
            className={
              'w-full border-none bg-transparent shadow-none outline-none ring-0 focus-visible:ring-0'
            }
            ref={ref}
            {...props}
          />
        </div>
        <Button
          type="button"
          variant="link"
          className="absolute right-3 p-0 text-card-foreground hover:text-card-foreground/80"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <FaEye className="h-5 w-5 text-black"  />
          ) : (
            <FaEyeSlash className="h-5 w-5 text-black" />
          )}
        </Button>
      </label>
    )
  }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput, inputVariants }

'use client'
import * as React from "react";
import { Slot } from "@radix-ui/react-slot"; // Only need Slot
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  { /* ... variants remain the same ... */
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/80",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-border bg-transparent hover:bg-foreground/5 dark:hover:bg-foreground/10 text-primary",
        secondary: "bg-foreground/10 text-foreground hover:bg-foreground/20 dark:bg-foreground/20 dark:hover:bg-foreground/30 dark:text-primary-foreground",
        ghost: "hover:bg-foreground/5 dark:hover:bg-foreground/10 text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ElementType;
  iconPosition?: "left" | "right";
}

const MotionButton = motion.button;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      icon: IconComponent, // Keep props for the non-asChild case
      iconPosition = 'left',
      children,
      ...props
    },
    ref
  ) => {
    const commonClassName = cn(buttonVariants({ variant, size, className }));

    if (asChild) {
      // ** FIX: When asChild is true, only render Slot wrapping children **
      // ** Do NOT render IconComponent here **
      return (
        <Slot
          ref={ref}
          className={commonClassName}
          {...props} // Pass standard props down
        >
          {/* Just render the children passed by the user */}
          {children}
        </Slot>
      );
    } else {
      // When asChild is false, render MotionButton WITH icons
      const motionProps = {
        whileHover: { scale: 1.03, transition: { duration: 0.2 } },
        whileTap: { scale: 0.98 },
      };
      const allPropsForMotionButton = {
        ref,
        className: commonClassName,
        ...props,
        ...motionProps,
      };
      return (
        <MotionButton {...(allPropsForMotionButton as HTMLMotionProps<"button">)}>
          {IconComponent && iconPosition === 'left' && (
            <IconComponent className={cn("h-4 w-4", children ? "mr-2" : "")} aria-hidden="true" />
          )}
          {children}
          {IconComponent && iconPosition === 'right' && (
            <IconComponent className={cn("h-4 w-4", children ? "ml-2" : "")} aria-hidden="true" />
          )}
        </MotionButton>
      );
    }
  }
);
Button.displayName = "Button";

export default Button;
export { buttonVariants };

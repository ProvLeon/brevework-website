import React from "react";
import { cn } from "@/lib/utils";

// Remove the unnecessary interface definition
// interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> { }

// Type the props directly using React.FC and the attributes type
const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn("container mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

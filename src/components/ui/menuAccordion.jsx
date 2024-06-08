"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = ({ defaultOpen = false, children, ...props }) => (
  <AccordionPrimitive.Root
    {...props}
    defaultValue={defaultOpen ? "default" : undefined}
  >
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        value: defaultOpen && index === 0 ? "default" : child.props.value,
      })
    )}
  </AccordionPrimitive.Root>
);

const AccordionItem = React.forwardRef(
  (
    { className, showBottomLine = true, showTopLine = false, ...props },
    ref
  ) => (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        showBottomLine && "border-b",
        showTopLine && "border-t",
        className
      )}
      {...props}
    />
  )
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center gap-2 text-[#3C4859] py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-0",
          className
        )}
        {...props}
      >
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 rotate-180" />
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-1 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

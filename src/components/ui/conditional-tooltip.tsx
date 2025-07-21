import React from 'react'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

interface ConditionalTooltipProps extends React.ComponentProps<typeof Tooltip> {
  /**
   * When true, the tooltip will be shown
   */
  showTooltip: boolean

  /**
   * Content to show in the tooltip
   */
  tooltipContent: React.ReactNode

  /**
   * Element that will trigger the tooltip
   */
  children: React.ReactElement

  /**
   * Optional CSS class for the wrapper div
   */
  className?: string

  /**
   * Alignment of the tooltip
   */
  align?: 'center' | 'end' | 'start'

  /**
   * Side of the tooltip
   */
  side?: 'top' | 'right' | 'bottom' | 'left'
}

/**
 * A component that conditionally wraps its children in a tooltip
 * based on the showTooltip prop.
 */
export const ConditionalTooltip = ({
  showTooltip,
  tooltipContent,
  children,
  className,
  align,
  side,
  ...props
}: ConditionalTooltipProps) => {
  // If we don't need to show the tooltip, just render the children
  if (!showTooltip) {
    return children
  }

  // Otherwise, render the children wrapped in a tooltip
  return (
    <Tooltip {...props}>
      <TooltipTrigger asChild>
        <div className={className}>{children}</div>
      </TooltipTrigger>
      <TooltipContent className="max-w-[45ch]" align={align} side={side}>
        {tooltipContent}
      </TooltipContent>
    </Tooltip>
  )
}

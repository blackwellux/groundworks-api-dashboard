// Allow TypeScript/JSX to recognize Modus web components.
// You can expand the prop types later if needed.
import React from 'react'
// Pull in the auto-generated Stencil types for Modus components (if present)
// They live at dist/types/components per Stencil conventions.
// We fallback to a minimal declaration if not found at type-check time.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ModusButtonProps extends React.HTMLAttributes<HTMLElement> {
  color?: string
  type?: string
  size?: string
  disabled?: boolean
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'modus-button': ModusButtonProps
    }
  }
}

export {}
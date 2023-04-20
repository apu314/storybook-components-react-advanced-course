import { FC } from 'react'
import './myLabel.css'

export interface MyLabelProps {
  /**
   * Text that will be printed
   */
  label: string
  /**
   * How large should be the span
   */
  size: 'normal' | 'h1' | 'h2' | 'h3'
  /**
   * Capitalize all label characters
   */
  allCaps?: boolean
  /**
   * Text color
   */
  color?: 'primary' | 'secondary' | 'tertiary'
  /**
   * Custom color for the font
   */
  fontColor?: string
}

/**
 * Label UI component
 */
export const MyLabel: FC<MyLabelProps> = ({
  label = 'No Label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor
}) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{
        color: fontColor
      }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}

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
  /**
   * Color for the background
   */
  backgroundColor?: string
}

/**
 * Label UI component
 */
export const MyLabel: FC<MyLabelProps> = ({
  label = 'No Label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
  backgroundColor = 'transparent'
}) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{
        color: fontColor,
        backgroundColor
      }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}

export default MyLabel

import { FC } from 'react';
import './myLabel.css';
export interface MyLabelProps {
    /**
     * Text that will be printed
     */
    label: string;
    /**
     * How large should be the span
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize all label characters
     */
    allCaps?: boolean;
    /**
     * Text color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom color for the font
     */
    fontColor?: string;
    /**
     * Color for the background
     */
    backgroundColor?: string;
}
/**
 * Label UI component
 */
export declare const MyLabel: FC<MyLabelProps>;

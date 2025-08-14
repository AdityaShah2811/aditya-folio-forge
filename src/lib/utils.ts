import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function for merging Tailwind CSS classes
 * 
 * Combines clsx for conditional class handling with tailwind-merge
 * to properly handle conflicting Tailwind classes by keeping the last one.
 * This prevents issues like having both 'bg-red-500' and 'bg-blue-500' active.
 * 
 * @param inputs - Array of class values (strings, objects, arrays, etc.)
 * @returns Merged and deduplicated class string
 * 
 * @example
 * cn('bg-red-500', 'bg-blue-500') // Returns: 'bg-blue-500'
 * cn('px-4', undefined, 'py-2') // Returns: 'px-4 py-2'
 * cn('base-class', { 'conditional-class': true }) // Returns: 'base-class conditional-class'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

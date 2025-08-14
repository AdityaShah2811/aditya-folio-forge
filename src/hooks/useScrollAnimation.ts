import { useEffect, useRef } from "react";

/**
 * Custom hook for scroll-based animations
 * 
 * Uses Intersection Observer API to trigger animations when elements
 * enter the viewport. Automatically adds the 'in-view' class to elements
 * with the 'animate-on-scroll' class when they become visible.
 * 
 * The hook creates an observer that:
 * - Triggers at 10% element visibility (threshold: 0.1)
 * - Has a 50px margin from the top/bottom of viewport
 * - Adds 'in-view' class for CSS animations
 * 
 * @returns Ref to the IntersectionObserver instance
 * 
 * @example
 * // In a component:
 * useScrollAnimation();
 * 
 * // In JSX:
 * <div className="animate-on-scroll">This will animate when scrolled into view</div>
 */
export const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element enters viewport
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "-50px 0px", // 50px margin from top/bottom of viewport
      }
    );

    // Find all elements marked for scroll animation
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    // Cleanup observer on component unmount
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return observerRef;
};
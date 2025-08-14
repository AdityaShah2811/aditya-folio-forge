import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Theme Toggle Component
 * 
 * A floating action button that allows users to switch between light and dark themes.
 * Uses next-themes for theme management with smooth transitions and proper SSR handling.
 * 
 * Features:
 * - Smooth icon transitions when switching themes
 * - Fixed positioning for easy access
 * - Backdrop blur effect for modern glass appearance
 * - Accessible with screen reader support
 * - Prevents hydration mismatch with mounted state
 */
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting for client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on server to prevent hydration issues
  if (!mounted) {
    return null;
  }

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border shadow-elegant hover-lift"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 transition-all duration-300 rotate-0 scale-100" />
      ) : (
        <Sun className="h-5 w-5 transition-all duration-300 rotate-0 scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
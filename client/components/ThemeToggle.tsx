import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
}

export default function ThemeToggle({ 
  className, 
  variant = "ghost", 
  size = "icon" 
}: ThemeToggleProps) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        "hover:bg-accent hover:text-accent-foreground",
        "focus:ring-2 focus:ring-primary focus:ring-offset-2",
        isDark 
          ? "bg-primary/10 text-primary hover:bg-primary/20" 
          : "bg-background text-foreground hover:bg-accent",
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-4 h-4">
        {/* Sun Icon */}
        <Sun 
          className={cn(
            "absolute inset-0 w-4 h-4 transition-all duration-500",
            "transform-gpu",
            isDark 
              ? "rotate-90 scale-0 opacity-0" 
              : "rotate-0 scale-100 opacity-100"
          )}
        />
        
        {/* Moon Icon */}
        <Moon 
          className={cn(
            "absolute inset-0 w-4 h-4 transition-all duration-500",
            "transform-gpu",
            isDark 
              ? "rotate-0 scale-100 opacity-100" 
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
      </div>
      
      {/* Energy accent on hover */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300",
          "from-transparent via-energy-cyan/20 to-transparent",
          "group-hover:opacity-100"
        )}
      />
    </Button>
  );
}

// Compact theme toggle for mobile
export function CompactThemeToggle({ className }: { className?: string }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg",
        "text-sm font-medium transition-all duration-300",
        "hover:bg-accent hover:text-accent-foreground",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-4 h-4">
        <Sun 
          className={cn(
            "absolute inset-0 w-4 h-4 transition-all duration-500",
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          )}
        />
        <Moon 
          className={cn(
            "absolute inset-0 w-4 h-4 transition-all duration-500",
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          )}
        />
      </div>
      <span>{isDark ? 'Light' : 'Dark'} Mode</span>
    </button>
  );
}

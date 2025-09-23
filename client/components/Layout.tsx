import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Download, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "My Work", href: "/portfolio" },
    { name: "My Services", href: "/services" },
    { name: "Contact Me", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      const showScroll = window.scrollY > 500;
      setIsScrolled(scrolled);
      setShowScrollTop(showScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to="/"
              className="flex items-center space-x-2 group"
              aria-label="Vickash Shivan - Home"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">VS</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground hidden sm:block">
                Vickash Shivan
              </span>
            </Link>

            <nav
              className="hidden md:flex items-center space-x-1"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary",
                    location.pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                  aria-current={location.pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary/20 hover:border-primary hover:bg-primary/5"
              >
                <a
                  href="https://drive.google.com/file/d/1yU1TQXv9yDIk4tAHmpofyWQ8nL2MeVjR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                className="energy-button shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open mobile menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Link
                      to="/"
                      className="flex items-center space-x-2 group"
                      aria-label="Vickash Shivan - Home"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">VS</span>
                      </div>
                      <span className="font-display font-bold text-lg">
                        Vickash Shivan
                      </span>
                    </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" aria-label="Close mobile menu">
                        <Menu className="w-5 h-5" />
                      </Button>
                    </SheetClose>
                  </div>

                  <nav className="flex-1" aria-label="Mobile navigation">
                    <div className="space-y-2">
                      {navItems.map((item) => (
                        <SheetClose asChild key={item.name}>
                          <Link
                            to={item.href}
                            className={cn(
                              "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary",
                              location.pathname === item.href
                                ? "bg-primary/10 text-primary"
                                : "text-foreground/70"
                            )}
                            aria-current={
                              location.pathname === item.href ? "page" : undefined
                            }
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </nav>

                  <div className="space-y-3 pt-6 border-t border-border">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      <a
                        href="https://drive.google.com/file/d/1yU1TQXv9yDIk4tAHmpofyWQ8nL2MeVjR/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                    <SheetClose asChild>
                      <Button asChild className="w-full energy-button">
                        <Link to="/contact">Get In Touch</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main id="main-content" className="relative pt-16 md:pt-20">
        {children}
      </main>

      <footer
        className="bg-neutral-50 dark:bg-neutral-900 border-t border-border mt-20"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">VS</span>
                </div>
                <span className="font-display font-bold text-xl">
                  Vickash Shivan
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Expert UI/UX Designer dedicated to crafting seamless and
                engaging digital experiences. I transform complex problems into
                intuitive, beautiful, and user-centric solutions that drive
                results.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/vickash-shivan-415139267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Vickash Shivan on LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Vickash Shivan on Dribbble"
                >
                  Dribbble
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Vickash Shivan on Behance"
                >
                  Behance
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-2" aria-label="Footer navigation">
                {navItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Core Services</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>UI/UX Design</p>
                <p>User Research & Analysis</p>
                <p>Interactive Prototyping</p>
                <p>Comprehensive Usability Testing</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Vickash Shivan. All Rights
              Reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 sm:mt-0">
              Crafted with passion and precision
            </p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-lg bg-gradient-to-r from-primary to-primary/80 hover:scale-105 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X, Download, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle, { CompactThemeToggle } from "@/components/ThemeToggle";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    // { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const downloadResume = async () => {
    const { downloadResume: downloadResumeUtil } = await import("@/utils/resume");
    await downloadResumeUtil();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">VS</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground hidden sm:block">
                Vickash Shivan
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
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
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle className="mr-2" />
              <Button
                variant="outline"
                size="sm"
                
                className="border-primary/20 hover:border-primary hover:bg-primary/5"
              >
                <a href="https://drive.google.com/file/d/1yU1TQXv9yDIk4tAHmpofyWQ8nL2MeVjR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex">
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

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-2 mb-8">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">VS</span>
                    </div>
                    <span className="font-display font-bold text-lg">Vickash Shivan</span>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1">
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
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile CTA */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    <CompactThemeToggle className="w-full justify-start" />
                    <Button
                      variant="outline"
                      onClick={downloadResume}
                      className="w-full border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="w-full energy-button"
                      >
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

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">VS</span>
                </div>
                <span className="font-display font-bold text-xl">Vickash Shivan</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                UI/UX Designer passionate about creating intuitive and beautiful digital experiences
                that solve real-world problems and delight users.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/vickash-shivan-415139267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dribbble
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Behance
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>UI/UX Design</p>
                <p>User Research</p>
                <p>Prototyping</p>
                <p>Usability Testing</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Vickash Shivan. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 sm:mt-0">
              Designed & built with 💙
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 animate-fade-in"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}

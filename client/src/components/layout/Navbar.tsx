import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Projects", path: "/#projects" },
    { name: "Blog", path: "/#blog" },
    { name: "Resume", path: "/#resume" },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      // If already on homepage, scroll to section
      if (window.location.pathname === '/') {
        const id = path.substring(2);
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to homepage with hash
        setLocation(path);
      }
    } else {
      // Regular navigation
      setLocation(path);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 ${isScrolled ? 'bg-background/90 backdrop-blur-sm border-b border-muted' : 'bg-transparent'} transition-all duration-200`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <span className="font-mono text-primary font-bold text-xl">&lt;/&gt;</span>
          <span className="ml-2 font-mono font-semibold text-lg">John<span className="text-blue-500">_Doe</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.path)}
              className="text-muted-foreground hover:text-primary transition duration-200"
            >
              {item.name}
            </button>
          ))}
          <Button 
            onClick={() => handleNavClick("/#contact")} 
            variant="outline"
            className="hover:text-primary hover:border-primary transition-colors"
          >
            Contact
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background border-l border-muted">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className="text-left py-2 text-muted-foreground hover:text-primary transition duration-200"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick("/#contact")}
                className="w-full mt-2"
              >
                Contact
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;

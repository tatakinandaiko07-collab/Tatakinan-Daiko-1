import { motion, AnimatePresence } from "motion/react";
import { Instagram, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Início", href: "/" },
    { name: "Agenda", href: "/agenda" },
    { name: "Taiko", href: "/taiko" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== "/" ? "bg-black/90 backdrop-blur-md py-4 border-b border-brand/20" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center font-display font-bold text-xl italic group-hover:scale-110 transition-transform">T</div>
          <span className="text-xl font-display font-bold tracking-tighter uppercase hidden sm:block">
            Tatakinan <span className="text-brand">Daiko</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              className={`text-sm font-medium hover:text-brand transition-colors uppercase tracking-widest ${
                location.pathname === item.href ? "text-brand" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand hover:bg-brand-dark text-white p-2 rounded-full transition-all hover:scale-110"
          >
            <Instagram size={20} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-brand/20 py-6 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium hover:text-brand transition-colors uppercase tracking-widest ${
                    location.pathname === item.href ? "text-brand" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand px-6 py-2 rounded-full font-bold"
              >
                <Instagram size={20} /> Instagram
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

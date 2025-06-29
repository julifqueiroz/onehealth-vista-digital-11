
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { href: "#features", label: "Funcionalidades" },
    { href: "#benefits", label: "Benefícios" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#promotion", label: "Promoções" }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src="/lovable-uploads/652bc1e2-10ef-44a6-b5a8-83b7b1b2053c.png" 
              alt="OneHealth" 
              className="h-10 md:h-12" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                document.getElementById('logo-text')!.style.display = 'block';
              }}
            />
            <div id="logo-text" className="hidden">
              <span className="font-bold text-2xl text-slate-800">
                One<span className="text-red-600">Health</span>
              </span>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </motion.a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="p-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="outline"
              size="sm"
              className="border-slate-300 text-slate-700 hover:bg-slate-50"
              onClick={() => {
                window.open("tel:+5571996073520", "_self");
              }}
            >
              <Phone className="w-4 h-4 mr-2" />
              (71) 99607-3520
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                window.open("https://api.whatsapp.com/send?phone=5571996073520&text=Olá! Estou interessado em conhecer o OneHealth para minha farmácia de manipulação", "_blank");
              }}
            >
              Falar com Consultor
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-2xl mt-4 shadow-lg border border-slate-200">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors px-6 py-3 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="px-6 space-y-3">
              <Button 
                variant="outline"
                className="w-full border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => {
                  window.open("tel:+5571996073520", "_self");
                  setMobileMenuOpen(false);
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                (71) 99607-3520
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold"
                onClick={() => {
                  window.open("https://api.whatsapp.com/send?phone=5571996073520&text=Olá! Estou interessado em conhecer o OneHealth para minha farmácia de manipulação", "_blank");
                  setMobileMenuOpen(false);
                }}
              >
                Falar com Consultor
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is near the top of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
        <motion.nav
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-5xl transition-[padding,margin,background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-in-out ${isScrolled
            ? "bg-gray-900/80 backdrop-blur-md border border-white/10 shadow-lg rounded-full px-6 py-3"
            : "bg-gray-900/90 backdrop-blur-sm border border-white/5 rounded-full px-6 py-4 mt-2"
            }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img src="/logo.png" alt="JoyApp" className="h-10 w-auto object-contain brightness-0 invert" />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative group font-medium text-sm transition-colors duration-300 ${isActive ? "text-white" : "text-gray-300 hover:text-white"
                      }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? "w-full text-primary" : "w-0 group-hover:w-full"
                        }`}
                    ></span>
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${isScrolled
                  ? "bg-primary text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:bg-orange-600"
                  : "bg-white text-primary shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 border border-gray-100"
                  }`}
              >
                Get Started
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-white/60 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 left-4 right-4 bg-white rounded-3xl shadow-xl border border-gray-100 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`text-lg font-semibold transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  );
                })}
                <div className="h-px bg-gray-100 w-full my-2"></div>
                <a
                  href="#pricing"
                  className="btn-primary w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Assuming lucide-react for icons

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-600/80 backdrop-blur-lg shadow-lg py-2"
          : "bg-blue-600 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center px-3 py-2 bg-white rounded-md">

          <img src="/logo.png" alt="Logo" className="md:w-28 h-auto w-20" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white transition-colors"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white transition-colors"
            >
              الخدمات
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white transition-colors"
            >
              من نحن
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-white transition-colors"
            >
              أعمالنا
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white transition-colors"
            >
              تواصل معنا
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Consultation Button (Desktop Only) */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              احصل على استشارة
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col items-center gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white transition-colors"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white transition-colors"
            >
              الخدمات
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white transition-colors"
            >
              من نحن
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-white transition-colors"
            >
              أعمالنا
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white transition-colors"
            >
              تواصل معنا
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FloatingNavbar;
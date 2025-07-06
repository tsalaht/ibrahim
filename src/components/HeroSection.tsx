
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "تطوير المواقع الإلكترونية",
    "تصميم التطبيقات الذكية", 
    "تصميم واجهات المستخدم",
    "الحلول الرقمية المتكاملة"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/10 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mt-2">
          كريبتون
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 mb-8 h-8">
            <span className="inline-block animate-fade-in">
               لخدمات الويب المتكامله
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed animate-fade-in delay-500">
   نحن متخصصون في تقديم الحلول الرقمية المتطورة والمبتكرة التي تساعد عملك على النمو والازدهار في العالم الرقمي
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={scrollToServices}
            >
              اكتشف خدماتنا
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg px-8 py-6 rounded-full transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              تواصل معنا الآن
            </Button>
          </div>
        </div>

        <div className="absolute bottom-[-40px] md:bottom-[-50px] left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-blue-600" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

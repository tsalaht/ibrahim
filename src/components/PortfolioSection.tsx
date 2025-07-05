
import { useEffect, useRef, useState } from "react";

const PortfolioSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "متجر إلكتروني متطور",
      category: "تطوير ويب",
      description: "منصة تجارة إلكترونية متكاملة مع نظام إدارة شامل",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "تطبيق إدارة المشاريع",
      category: "تطبيق موبايل",
      description: "تطبيق ذكي لإدارة المشاريع والفرق بطريقة فعالة",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["React Native", "Firebase", "Redux"]
    },
    {
      title: "موقع شركة طبية",
      category: "تصميم UI/UX",
      description: "موقع طبي بتصميم احترافي وتجربة مستخدم ممتازة",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      tech: ["Figma", "Adobe XD", "Photoshop"]
    },
    {
      title: "نظام إدارة المطاعم",
      category: "حلول رقمية",
      description: "نظام متكامل لإدارة المطاعم والطلبات والمخزون",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      tech: ["Vue.js", "Laravel", "MySQL"]
    },
    {
      title: "منصة تعليمية تفاعلية",
      category: "تطوير ويب",
      description: "منصة تعليم إلكتروني مع أدوات تفاعلية متقدمة",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      tech: ["Angular", "Express", "Socket.io"]
    },
    {
      title: "تطبيق اللياقة البدنية",
      category: "تطبيق موبايل",
      description: "تطبيق شامل لمتابعة اللياقة البدنية والتغذية",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      tech: ["Flutter", "Dart", "Firebase"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems(prev => [...prev, itemIndex]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">معرض </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              أعمالنا
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نفتخر بمجموعة متنوعة من المشاريع الناجحة التي نفذناها لعملائنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform ${
                visibleItems.includes(index) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

import { useEffect, useRef, useState } from "react";

const PortfolioSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "مطعم أبو زغلة",
      category: "تطوير ويب",
      description: "مطاعم أبو زغلة: موقع ويب لمطاعم تقدم مأكولات طازجة",
      image: "/1.png",
      tech: ["React", "Node.js", "tailwindcss"],
      link: "https://abuzaghleh.com/"
    },
    {
      title: "Acolux Smart",
      category: "تطوير ويب",
      description: "Acolux Smart: موقع ويب لإضاءة ذكية مبتكرة",
      image: "/2.png",
      tech: ["React", "Redux", "tailwindcss"],
      link: "https://acoluxsmart.com/"
    },
    {
      title: "سكني جو",
      category: " تطوير ويب",
      description: "سكني جو: موقع ويب لعقارات فاخرة متنوعة",
      image: "/3.png",
      tech: ["wordPress", "Node.js", "css"],
      link: "https://alqudsestate.com/%d8%b3%d9%83%d9%86%d9%8a-%d8%ac%d9%88/"
    },
    {
      title: "Russian Center Clinics",
      category: " تطوير ويب",
      description: "Russian Center Clinics: موقع ويب لعيادات طبية متخصصة",
      image: "/4.png",
      tech: ["Next js", "Node.js", "tailwindcss"],
      link: "https://russiancenterclinics.com/"
    },
    {
      title: "Ashley Perfume",
      category: "تطوير ويب",
      description: "Ashley Perfume: موقع ويب لعطور فاخرة متنوعة",
      image: "/5.png",
      tech: ["React", "Express", "Socket.io"],
      link: "https://ashleyperfume.shop/"
    },
    {
      title: "Al Shafi Dairy",
      category: "تطوير ويب",
      description: "Al Shafi Dairy: موقع ويب لمنتجات ألبان طازجة",
      image: "/6.png",
      tech: ["Next js", "Node.js", "tailwindcss"],
      link: "https://alshafidairy.com/"
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
              
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
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
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  زيارة الموقع
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
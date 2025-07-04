
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "تطوير المواقع الإلكترونية",
    description: "نصمم ونطور مواقع إلكترونية حديثة وسريعة ومتجاوبة مع جميع الأجهزة",
    icon: "🌐",
    features: ["تصميم متجاوب", "سرعة عالية", "أمان متقدم", "SEO محسن"]
  },
  {
    title: "تطوير التطبيقات الذكية",
    description: "نبني تطبيقات ذكية للهواتف المحمولة بأحدث التقنيات والمعايير",
    icon: "📱",
    features: ["iOS & Android", "واجهة سهلة", "أداء سريع", "تحديثات دورية"]
  },
  {
    title: "تصميم UI/UX",
    description: "نصمم واجهات مستخدم جذابة وتجربة مستخدم مميزة ومريحة",
    icon: "🎨",
    features: ["تصميم جذاب", "تجربة سلسة", "اختبار المستخدمين", "تحليل البيانات"]
  },
  {
    title: "الحلول الرقمية",
    description: "نقدم حلول رقمية متكاملة لتطوير أعمالك ووصولها للعالمية",
    icon: "💼",
    features: ["استشارات تقنية", "تحليل الأعمال", "خطط رقمية", "دعم مستمر"]
  }
];

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCards(prev => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">خدماتنا </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              المميزة
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الرقمية المتطورة لتلبية جميع احتياجاتك التقنية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100 transform ${
                visibleCards.includes(index) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full ml-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "50+", label: "مشروع مكتمل" },
    { number: "30+", label: "عميل راضي" },
    { number: "5+", label: "سنوات خبرة" },
    { number: "24/7", label: "دعم فني" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-800">من نحن؟</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                قصة نجاحنا
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
كريبتون علامة تجارية مملوكة لمؤسسة ابراهيم اسعد لخدمات الانترنت هي مؤسسة رائدة في مجال تقديم الحلول الرقمية المبتكرة. نحن نجمع بين الخبرة التقنية العميقة والإبداع في التصميم لنقدم لعملائنا أفضل الخدمات.

            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
      نؤمن بأن التكنولوجيا يجب أن تكون في خدمة الإنسان، ولذلك نركز على تطوير حلول تقنية تلبي احتياجات عملائنا الفعلية وتساعدهم على تحقيق أهدافهم.


            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 bg-white rounded-xl shadow-lg transform transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">لماذا نحن مختلفون؟</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">خبرة متميزة</h4>
                      <p className="text-gray-600">فريق من المتخصصين ذوي الخبرة العالية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">حلول مبتكرة</h4>
                      <p className="text-gray-600">نستخدم أحدث التقنيات والأدوات</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">دعم مستمر</h4>
                      <p className="text-gray-600">نقدم الدعم والمتابعة حتى بعد التسليم</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">جودة عالية</h4>
                      <p className="text-gray-600">نضمن أعلى معايير الجودة في كل مشروع</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

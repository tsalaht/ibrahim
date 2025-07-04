
import { useEffect, useRef, useState } from "react";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "أحمد محمد",
      position: "مدير شركة التقنيات المتقدمة",
      content: "تعاملت مع مؤسسة إبراهيم أسعد في تطوير موقعنا الإلكتروني، والنتيجة فاقت كل توقعاتي. فريق محترف ومبدع.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "فاطمة العلي",
      position: "مالكة متجر الأزياء الراقية",
      content: "تطبيق المتجر الذي طوروه لي ساعدني كثيراً في زيادة المبيعات وتحسين تجربة العملاء. أنصح بالتعامل معهم.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "خالد السعيد",
      position: "مؤسس شركة الحلول الذكية",
      content: "تصميم الواجهات الذي قدموه كان رائعاً وعملياً. تجربة المستخدم أصبحت أفضل بكثير من قبل.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "مريم أحمد",
      position: "مديرة العمليات - شركة الخدمات الطبية",
      content: "النظام الذي طوروه لإدارة العيادة وفر علينا الكثير من الوقت والجهد. دعمهم الفني ممتاز ومستمر.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">آراء </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              عملائنا
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نفتخر بثقة عملائنا ورضاهم عن خدماتنا المتميزة
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-20 h-20 bg-blue-600/10 rounded-full -translate-x-10 -translate-y-10"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full translate-x-16 translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonials[activeTestimonial].position}
                    </p>
                  </div>
                  <div className="mr-auto flex gap-1">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-8">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                <div className="flex justify-center gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial 
                          ? "bg-blue-600 w-8" 
                          : "bg-blue-200 hover:bg-blue-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

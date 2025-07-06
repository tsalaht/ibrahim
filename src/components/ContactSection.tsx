
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "اتصل بنا",
      details: "00962782950000",
      subDetails: "من السبت إلى الخميس 9ص - 6م"
    },
    {
      icon: "📧",
      title: "راسلنا",
      details: "info@kn-jo.com",
      subDetails: "سنرد خلال 24 ساعة"
    },
    {
      icon: "📍",
      title: "موقعنا",
      details: "الرصيفه الجبل الشمالي مجمع عمار موبايل الطابق الاول ، المملكة الأردنية ",
      subDetails: "يمكنك زيارتنا بموعد مسبق"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">تواصل </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              معنا
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            هل لديك مشروع في ذهنك؟ دعنا نساعدك في تحويل أفكارك إلى واقع رقمي
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                دعنا نبدأ مشروعك القادم
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
         كريبتون لخدمات الويب المتكامله 
نحن متخصصون في تقديم الحلول الرقمية المتطورة والمبتكرة التي تساعد عملك على النمو والازدهار في العالم الرقمي.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-3xl">{info.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-blue-600 font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {info.subDetails}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الكامل *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  البريد الإلكتروني *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الهاتف
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  رسالتك *
                </label>
            <Textarea
  id="message"
  required
  rows={5}
  value={formData.message}
  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-0 focus:shadow-none transition-colors resize-none"
  placeholder="أخبرنا عن مشروعك أو استفسارك..."
/>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                إرسال الرسالة
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

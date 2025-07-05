import { Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "واتساب", url: "#", icon: <MessageCircle size={24} /> },
    { name: "تويتر", url: "#", icon: <Twitter size={24} /> },
    { name: "لينكد إن", url: "#", icon: <Linkedin size={24} /> },
    { name: "إنستغرام", url: "#", icon: <Instagram size={24} /> }
  ];

  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "الخدمات", href: "#services" },
    { name: "من نحن", href: "#about" },
    { name: "أعمالنا", href: "#portfolio" },
    { name: "تواصل معنا", href: "#contact" }
  ];

  const services = [
    "تطوير المواقع الإلكترونية",
    "تطوير التطبيقات الذكية",
    "تصميم UI/UX",
    "الحلول الرقمية"
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              مؤسسة إبراهيم أسعد
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              نحن متخصصون في تقديم الحلول الرقمية المتطورة والمبتكرة التي تساعد 
              عملك على النمو والازدهار في العالم الرقمي.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-right">
              © 2024 مؤسسة إبراهيم أسعد لخدمات الإنترنت. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-white transition-colors">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
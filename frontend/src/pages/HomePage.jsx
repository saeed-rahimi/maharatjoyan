import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Star,
  Wrench,
  Home,
  User,
  LogIn,
  Mail,
  Phone,
} from "lucide-react";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // لیست دسته‌بندی‌های خدمات
  const serviceCategories = [
    { id: 1, name: "برق‌کاری", icon: <Wrench className="w-8 h-8" /> },
    { id: 2, name: "لوله‌کشی", icon: <Wrench className="w-8 h-8" /> },
    { id: 3, name: "نقاشی ساختمان", icon: <Wrench className="w-8 h-8" /> },
    { id: 4, name: "نجاری", icon: <Wrench className="w-8 h-8" /> },
    { id: 5, name: "بنایی", icon: <Wrench className="w-8 h-8" /> },
    { id: 6, name: "کاشی‌کاری", icon: <Wrench className="w-8 h-8" /> },
  ];

  // لیست متخصصان برتر
  const topExperts = [
    {
      id: 1,
      name: "علی محمدی",
      job: "برق‌کار",
      rating: 4.8,
      projects: 53,
      city: "تهران",
    },
    {
      id: 2,
      name: "رضا احمدی",
      job: "لوله‌کش",
      rating: 4.7,
      projects: 38,
      city: "تهران",
    },
    {
      id: 3,
      name: "محمد کریمی",
      job: "نقاش ساختمان",
      rating: 4.9,
      projects: 64,
      city: "اصفهان",
    },
  ];

  // لیست پروژه‌های اخیر
  const recentProjects = [
    {
      id: 1,
      title: "نصب کلید و پریز",
      price: "۳۵۰,۰۰۰",
      location: "تهران، شهرک غرب",
      date: "۲ ساعت پیش",
    },
    {
      id: 2,
      title: "رفع گرفتگی لوله",
      price: "۵۰۰,۰۰۰",
      location: "تهران، نارمک",
      date: "۵ ساعت پیش",
    },
    {
      id: 3,
      title: "نقاشی اتاق ۱۲ متری",
      price: "۲,۵۰۰,۰۰۰",
      location: "کرج، مهرشهر",
      date: "۱ روز پیش",
    },
  ];

  return (
    <div dir="rtl" className="bg-gray-100 min-h-screen font-sans">
      {/* هدر سایت */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* لوگو */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <Wrench className="h-8 w-8 text-yellow-500" />
                  <span className="ml-2 text-xl font-bold text-gray-800">
                    مهارت‌جویان
                  </span>
                </div>
              </div>
            </div>

            {/* منوی دسکتاپ */}
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <a
                href="#"
                className="text-gray-600 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                خدمات
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                متخصصین
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                درباره ما
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                تماس با ما
              </a>
            </nav>

            {/* دکمه‌های ورود و ثبت‌نام */}
            <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              <Link to="/login" className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium flex items-center">
                <LogIn className="w-4 h-4 ml-1" />
                ورود
              </Link>
              <Link to="/register-client" className="bg-yellow-500 text-navy-800 hover:bg-yellow-600 px-4 py-2 rounded-md text-sm font-medium">
                ثبت‌نام کارفرما
              </Link>
              <Link to="/register-professional" className="bg-yellow-500 text-navy-800 hover:bg-yellow-600 px-4 py-2 rounded-md text-sm font-medium">
                ثبت‌نام متخصص
              </Link>
            </div>

            {/* دکمه منو در موبایل */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* منوی موبایل */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-yellow-500 hover:bg-gray-100"
              >
                خدمات
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-yellow-500 hover:bg-gray-100"
              >
                متخصصین
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-yellow-500 hover:bg-gray-100"
              >
                درباره ما
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-yellow-500 hover:bg-gray-100"
              >
                تماس با ما
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 space-x-reverse px-4">
                <Link to="/login" className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium w-full mb-2">
                  ورود
                </Link>
                <Link to="/register-client" className="bg-yellow-500 text-navy-800 hover:bg-yellow-600 px-4 py-2 rounded-md text-sm font-medium w-full mb-2">
                  ثبت‌نام کارفرما
                </Link>
                <Link to="/register-professional" className="bg-yellow-500 text-navy-800 hover:bg-yellow-600 px-4 py-2 rounded-md text-sm font-medium w-full mb-2">
                  ثبت‌نام متخصص
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* بخش هیرو */}
      <section className="relative bg-navy-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              خدمات ساختمانی با بهترین متخصصین
            </h1>
            <p className="text-xl mb-8">
              سریع‌ترین راه برای یافتن متخصصین حرفه‌ای ساختمان
            </p>

            {/* جستجو */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="bg-gray-100 text-gray-800 w-full pl-4 pr-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="چه خدمتی نیاز دارید؟"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="bg-gray-100 text-gray-800 w-full pl-4 pr-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="منطقه شما"
                  />
                </div>
                <button className="bg-yellow-500 text-navy-800 py-3 px-6 rounded-md font-medium hover:bg-yellow-600 transition-colors">
                  جستجو
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* بخش دسته‌بندی خدمات */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            خدمات ساختمانی
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-50 hover:bg-yellow-50 rounded-lg p-6 text-center transition-colors cursor-pointer border border-gray-200 hover:border-yellow-300"
              >
                <div className="mb-4 text-navy-800 mx-auto w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full">
                  {category.icon}
                </div>
                <h3 className="font-medium text-gray-800">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* بخش متخصصین برتر */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            متخصصین برتر
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topExperts.map((expert) => (
              <div
                key={expert.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {expert.name.charAt(0)}
                    </div>
                    <div className="mr-4">
                      <h3 className="font-medium text-gray-800">
                        {expert.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{expert.job}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="mr-1 text-gray-800">
                        {expert.rating}
                      </span>
                    </div>
                    <div className="text-gray-600 text-sm">
                      {expert.projects} پروژه موفق
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 ml-1" />
                    {expert.city}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <button className="w-full bg-navy-800 text-white py-2 rounded-md hover:bg-navy-900 transition-colors">
                    مشاهده پروفایل
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* بخش پروژه‌های اخیر */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            پروژه‌های اخیر
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="font-medium text-lg text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-yellow-600 font-bold mb-4">
                    {project.price} تومان
                  </p>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 ml-1" />
                    {project.location}
                  </div>
                  <div className="text-gray-500 text-sm">{project.date}</div>
                </div>
                <div className="bg-gray-100 p-4 border-t border-gray-200">
                  <button className="w-full bg-yellow-500 text-navy-800 py-2 rounded-md hover:bg-yellow-600 transition-colors font-medium">
                    ارسال درخواست
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* بخش مزایا */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">
            چرا مهارت‌جویان؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-navy-800" />
              </div>
              <h3 className="text-xl font-medium mb-2">متخصصین با تجربه</h3>
              <p className="text-gray-300">
                تمامی متخصصین ما دارای مهارت و تجربه کافی هستند و مورد ارزیابی
                قرار گرفته‌اند.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-navy-800" />
              </div>
              <h3 className="text-xl font-medium mb-2">خدمات با کیفیت</h3>
              <p className="text-gray-300">
                تمام خدمات ارائه شده دارای ضمانت کیفیت هستند و با بهترین کیفیت
                انجام می‌شوند.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-navy-800" />
              </div>
              <h3 className="text-xl font-medium mb-2">قیمت منصفانه</h3>
              <p className="text-gray-300">
                قیمت‌های خدمات ما منصفانه و شفاف هستند و از قبل به شما اعلام
                می‌شوند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Wrench className="h-8 w-8 text-yellow-500" />
                <span className="ml-2 text-xl font-bold">مهارت‌جویان</span>
              </div>
              <p className="text-gray-400 mb-4">
                سریع‌ترین راه برای یافتن متخصصین حرفه‌ای ساختمان
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">دسترسی سریع</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    صفحه اصلی
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    خدمات
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    متخصصین
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    تماس با ما
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">خدمات</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    برق‌کاری
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    لوله‌کشی
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    نقاشی ساختمان
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    نجاری
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    بنایی
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">تماس با ما</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 ml-2 text-blue-400" />
                  <span className="text-gray-400">
                    تهران، خیابان آزادی، پلاک 123
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail
                    className="h-5 w-5 ml-2 text-blue-400"
                  />
                  <a href="mailto:info@maharatjoyan.com" className="text-gray-400 hover:text-white">
                    info@maharatjoyan.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone
                    className="h-5 w-5 ml-2 text-blue-400"
                  />
                  <a href="tel:02112345678" className="text-gray-400 hover:text-white">
                    021-12345678
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© ۱۴۰۴ مهارت‌جویان. تمام حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>

      {/* نمایش دکمه تماس سریع در موبایل */}
      <div className="md:hidden fixed bottom-6 left-6 z-50">
        <a
          href="tel:02112345678"
          className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default HomePage;

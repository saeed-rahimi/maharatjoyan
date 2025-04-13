import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-[500px] flex items-center"
      style={{
        backgroundImage: 'url("/construction-image.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* لایه تیره روی تصویر برای بهتر دیده شدن متن‌ها */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 text-white">
            خدمات مهارت جویان، راهکاری آسان برای نیازهای روزمره
          </h1>
          <p className="text-lg mb-6 text-white">
            بهترین متخصصین در خدمت شما هستند. هم‌اکنون سفارش خود را ثبت کنید.
          </p>

          <div className="flex space-x-4 space-x-reverse">
            <Link
              to="/register-client"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark"
            >
              ثبت درخواست
            </Link>
            <Link
              to="/register-expert"
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-primary"
            >
              مشاهده خدمات
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

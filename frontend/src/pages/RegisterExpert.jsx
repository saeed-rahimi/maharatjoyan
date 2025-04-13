import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterExpert = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    city: "",
    expertise: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          ثبت نام متخصص
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow-lg rounded-lg border border-red-500">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 ml-2 w-32"
                >
                  نام و نام خانوادگی
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-right"
                />
              </div>

              <div className="flex items-center">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 ml-2 w-32"
                >
                  ایمیل
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-right"
                />
              </div>

              <div className="flex items-center">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 ml-2 w-32"
                >
                  شماره موبایل
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-right"
                />
              </div>

              <div className="flex items-center">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 ml-2 w-32"
                >
                  رمز عبور
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-right"
                />
              </div>

              <div className="flex items-center">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 ml-2 w-32"
                >
                  تکرار رمز عبور
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-right"
                />
              </div>

              <div className="flex items-center">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 ml-2 w-32"
                >
                  شهر
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-right"
                />
              </div>

              <div className="flex items-center">
                <label
                  htmlFor="expertise"
                  className="block text-sm font-medium text-gray-700 ml-2 w-32"
                >
                  تخصص
                </label>
                <input
                  id="expertise"
                  name="expertise"
                  type="text"
                  required
                  value={formData.expertise}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-right"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                ثبت نام
              </button>
            </div>

            <div className="text-center">
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                قبلاً ثبت نام کرده‌اید؟ وارد شوید
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterExpert;

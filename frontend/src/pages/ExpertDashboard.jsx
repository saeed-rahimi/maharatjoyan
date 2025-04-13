import React, { useState } from "react";

const ExpertDashboard = () => {
  const [showChat, setShowChat] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [filters, setFilters] = useState({
    city: "",
    priceRange: "",
    projectType: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChatClick = (client) => {
    setSelectedClient(client);
    setShowChat(true);
  };

  const handleLocationClick = (client) => {
    setSelectedClient(client);
    setShowMap(true);
  };

  const handleProposalClick = (client) => {
    setSelectedClient(client);
    setShowProposalModal(true);
  };

  // نمونه داده‌ها
  const projects = [
    {
      id: 1,
      title: "نقاشی ساختمان",
      clientName: "رضا احمدی",
      location: "تهران، منطقه 2",
      description: "نقاشی داخلی و خارجی یک ساختمان 3 طبقه",
      budget: "5,000,000 تومان",
      deadline: "2 هفته",
      status: "open",
      clientImage: "/profile-placeholder.jpg",
    },
    // ... سایر پروژه‌ها
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* هدر با فیلترها */}
      <header className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 items-center">
            <select
              name="city"
              value={filters.city}
              onChange={handleFilterChange}
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            >
              <option value="">انتخاب شهر</option>
              <option value="tehran">تهران</option>
              <option value="karaj">کرج</option>
              <option value="isfahan">اصفهان</option>
            </select>

            <select
              name="priceRange"
              value={filters.priceRange}
              onChange={handleFilterChange}
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            >
              <option value="">محدوده قیمت</option>
              <option value="0-2">0-2 میلیون</option>
              <option value="2-5">2-5 میلیون</option>
              <option value="5+">بیش از 5 میلیون</option>
            </select>

            <select
              name="projectType"
              value={filters.projectType}
              onChange={handleFilterChange}
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            >
              <option value="">نوع پروژه</option>
              <option value="painting">نقاشی</option>
              <option value="carpentry">نجاری</option>
              <option value="electrical">برقکاری</option>
              <option value="plumbing">لوله‌کشی</option>
              <option value="tiling">کاشی‌کاری</option>
            </select>
          </div>
        </div>
      </header>

      {/* محتوای اصلی */}
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* لیست پروژه‌ها */}
            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <img
                        src={project.clientImage}
                        alt={project.clientName}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {project.title}
                        </h3>
                        <p className="text-gray-600">{project.clientName}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          {project.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-primary font-bold">
                        {project.budget}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {project.deadline}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{project.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex space-x-2 space-x-reverse">
                      <button
                        onClick={() => handleLocationClick(project)}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                      >
                        موقعیت
                      </button>
                      <button
                        onClick={() => handleChatClick(project)}
                        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
                      >
                        چت
                      </button>
                    </div>
                    <button
                      onClick={() => handleProposalClick(project)}
                      className="bg-secondary text-gray-900 px-4 py-2 rounded-md hover:bg-secondary-dark"
                    >
                      ارسال پیشنهاد
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* بخش چت یا نقشه */}
            <div className="bg-white rounded-lg shadow-md p-6">
              {showChat && (
                <div className="h-[600px] flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">
                      چت با {selectedClient?.clientName}
                    </h3>
                    <button
                      onClick={() => setShowChat(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-y-auto">
                    {/* پیام‌ها اینجا نمایش داده می‌شوند */}
                  </div>
                  <div className="mt-4">
                    <div className="flex space-x-2 space-x-reverse">
                      <input
                        type="text"
                        placeholder="پیام خود را بنویسید..."
                        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      />
                      <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">
                        ارسال
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {showMap && (
                <div className="h-[600px]">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">
                      موقعیت {selectedClient?.clientName}
                    </h3>
                    <button
                      onClick={() => setShowMap(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="h-[calc(100%-3rem)] bg-gray-100 rounded-lg">
                    {/* نقشه اینجا نمایش داده می‌شود */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      نقشه
                    </div>
                  </div>
                </div>
              )}

              {!showChat && !showMap && (
                <div className="h-[600px] flex items-center justify-center text-gray-500">
                  برای مشاهده چت یا نقشه، روی دکمه‌های مربوطه کلیک کنید
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* مودال ارسال پیشنهاد */}
      {showProposalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">
                ارسال پیشنهاد برای {selectedClient?.title}
              </h3>
              <button
                onClick={() => setShowProposalModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  قیمت پیشنهادی
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  placeholder="مبلغ را به تومان وارد کنید"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  مدت زمان انجام کار
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  placeholder="مثال: 3 روز"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  توضیحات
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  rows="4"
                  placeholder="توضیحات خود را وارد کنید"
                />
              </div>
              <div className="flex justify-end space-x-2 space-x-reverse">
                <button
                  type="button"
                  onClick={() => setShowProposalModal(false)}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
                >
                  ارسال پیشنهاد
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertDashboard;

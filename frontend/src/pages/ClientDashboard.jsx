import React, { useState } from "react";
import { useAuth } from '../context/AuthContext';

const ClientDashboard = () => {
  const { user } = useAuth();
  const [showChat, setShowChat] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [filters, setFilters] = useState({
    profession: "",
    city: "",
    experience: "",
    distance: "nearest",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChatClick = (expert) => {
    setSelectedExpert(expert);
    setShowChat(true);
  };

  const handleLocationClick = (expert) => {
    setSelectedExpert(expert);
    setShowMap(true);
  };

  // نمونه داده‌ها
  const experts = [
    {
      id: 1,
      name: "علی محمدی",
      profession: "نقاش",
      experience: "5 سال",
      rating: 4.8,
      price: "2,500,000 تومان",
      duration: "3 روز",
      location: "تهران، منطقه 1",
      profileImage: "/profile-placeholder.jpg",
    },
    // ... سایر متخصصین
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">داشبورد کارفرما</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="mb-4">به داشبورد کارفرما خوش آمدید!</p>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">اطلاعات شخصی</h2>
          <p><span className="font-medium">نام:</span> {user?.firstName} {user?.lastName}</p>
          <p><span className="font-medium">ایمیل:</span> {user?.email}</p>
          <p><span className="font-medium">شماره تماس:</span> {user?.phone}</p>
        </div>
        {/* اینجا محتوای داشبورد کارفرما را اضافه کنید */}
        </div>
    </div>
  );
};

export default ClientDashboard;

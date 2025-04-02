import React from "react";


const Carousel = () => {
  const items = [
    // { title: "45-day move-in guarantee", icon: "📅" },
    { title: "146 quality checks", icon: "✅" },
    { title: "1,00,000+ happy homes", icon: "🏡" },
    { title: "60+ cities", icon: "🌆" },
    // { title: "3 countries", icon: "🌍" },
    // { title: "20+ Awards", icon: "🏆" },
  ];

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        {/* Duplicate slides for infinite effect */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="icon">{item.icon}</div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

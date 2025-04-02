import React from "react";


const Carousel = () => {
  const items = [
    { title: "75 days move-in guarantee", icon: "📅" },
    { title: "146 quality checks", icon: "✅" },
    { title: "25,000+ happy homes", icon: "🏡" },
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

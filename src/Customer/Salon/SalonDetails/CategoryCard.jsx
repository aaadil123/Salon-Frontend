import React from "react";

const CategoryCard = ({
  item,
  selectedCategory,
  handleCategoryClick,
}) => {
  const categoryId = item.id ?? item._id;
  const active = selectedCategory === categoryId;

  return (
    <div
      onClick={handleCategoryClick}
      className={`flex cursor-pointer items-center gap-4 rounded-[22px] border p-4 duration-300 ${
        active
          ? "border-transparent bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg"
          : "border-[#EDE8DF] bg-white text-[#111827] hover:-translate-y-1 hover:shadow-md"
      }`}
    >
      <img
        src={
          item.image ||
          "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg"
        }
        alt={item.name || "Service category"}
        className="h-14 w-14 rounded-2xl object-cover"
      />

      <h1 className="font-semibold">
        {item.name || "Category"}
      </h1>
    </div>
  );
};

export default CategoryCard;
import React from "react";

const Category = ({ categories }: { categories: string[] }) => {
  return (
    <div>
      <select className="form-select mt-4" aria-label="Default select example">
        <option></option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;

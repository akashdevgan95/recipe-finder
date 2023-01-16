import Link from "next/link";
import React from "react";

const fetchRecipeAreas = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const response = await res.json();
  return response.meals.map((area) => area.strArea);
};

const page = async () => {
  const areas = await fetchRecipeAreas();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 server">
      {areas.map((area, idx) => (
        <Link
          key={idx}
          className="server shadow-gray-50 bg-gray-300 capitalize text-center rounded text-2xl py-10 cursor-pointer font-bold hover:bg-blue-500 hover:text-white"
          href={`/types/${area}`}
        >
          {area}
        </Link>
      ))}
    </div>
  );
};

export default page;

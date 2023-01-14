import React from "react";

//components
import RecipeList from "../../../components/RecipeList";

const fetchRecipeAreas = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const response = await res.json();
  return response.meals.map((area) => area.strArea);
};

async function getRecipes(type = "indian") {
  // await new Promise((r) => setTimeout(r, 5000));
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
  );
  const response = await res.json();
  return response.meals;
}

export default async function RecipeListContainer({ params }) {
  const recipes = await getRecipes(params.type);

  return <RecipeList recipes={recipes} type={params.type || ""} />;
}

// export async function generateStaticParams() {
//   const types = await fetchRecipeAreas();

//   return types.map((type) => ({
//     type: type,
//   }));
// }

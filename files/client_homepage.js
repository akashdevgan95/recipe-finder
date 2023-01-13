"use client";

import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

//components
import RecipeList from "../components/RecipeList";
import Sidebar from "../components/Sidebar";

async function getRecipes(query) {
  await new Promise((r) => setTimeout(r, 5000));
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`
  );
  return res.json();
}

export default function Home() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("indian");

  useEffect(() => {
    (async () => {
      const recipes = await getRecipes(selectedCuisine);
      setAllRecipes(recipes.meals);
    })();
  }, [selectedCuisine]);

  return (
    <section className="h-screen flex">
      <Sidebar
        selectedCuisine={selectedCuisine}
        setSelectedCuisine={setSelectedCuisine}
      />
      <main className="h-screen overflow-y-auto">
        <RecipeList recipes={allRecipes} />
      </main>
    </section>
  );
}

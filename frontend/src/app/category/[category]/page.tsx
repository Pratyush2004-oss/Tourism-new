"use client";
import PageLanding from "@/components/shared/PageLanding";
import { CATEGORIES } from "@/constants/Categories";
import { CATEGORYTYPE } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import FilterSection from "../_components/FilterSection";
import PackagesList from "../_components/PackagesList";

const CategoryPage = () => {
  const { category } = useParams();
  const [Category, setCategory] = useState<CATEGORYTYPE | null>(null);
  useEffect(() => {
    const filteredCategory = CATEGORIES.filter((c) => c.name === category);
    setCategory(filteredCategory[0]);
  }, [category]);
  return (
    Category && (
      <div className="w-full max-w-7xl mx-auto">
        <PageLanding image={Category.image} title={Category.name} />
        <div className="my-20">
          <h1 className="text-2xl md:text-3xl text-center font-black bg-gradient-to-l from-blue-600 via-blue-400 to-blue-700 text-transparent bg-clip-text">
            {Category.name.replaceAll("-", " ")}
          </h1>

          <FilterSection />

          <PackagesList packages={Category.Packages} />
        </div>
      </div>
    )
  );
};

export default CategoryPage;

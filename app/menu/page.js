'use client';

import React, { useState, useMemo } from "react";
import menuData from "../lib/menu";

export default function MenuPage() {
  const [filter, setFilter] = useState("All");

  // Collect unique subcategories across all categories
  const categories = useMemo(() => {
    const subcatsSet = new Set();
    menuData.forEach((category) => {
      category.items.forEach((item) => {
        if (item.subcategory) {
          subcatsSet.add(item.subcategory);
        } else {
          // Items without subcategory (e.g. cocktails)
          subcatsSet.add(category.category); // fallback to category name
        }
      });
    });
    return ["All", ...Array.from(subcatsSet)];
  }, []);

  const filteredMenu = useMemo(() => {
    if (filter === "All") return menuData;

    // Filter logic for when filter matches subcategory or category fallback
    return menuData
      .map((category) => {
        // Case 1: items have subcategory
        const filteredSubcats = category.items.filter(
          (item) => item.subcategory === filter
        );

        if (filteredSubcats.length > 0) {
          return { ...category, items: filteredSubcats };
        }

        // Case 2: category without subcategories, check if category name matches filter
        if (
          category.category === filter &&
          category.items.length > 0 &&
          !category.items[0].subcategory
        ) {
          return category;
        }

        return null;
      })
      .filter(Boolean);
  }, [filter]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="text-center sticky top-0 bg-black py-8 border-b border-gray-700">
        <h1 className="text-4xl font-serif tracking-wide">Our Menu</h1>
        <p className="mt-2 text-gray-400 italic">Exquisite dishes & curated wines</p>
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6  bg-black z-10">
        <select
          aria-label="Filter menu by category or subcategory"
          className="w-full sm:w-60 bg-black border border-gray-600 rounded-md px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f5ac26]"
          value={filter}
           onChange={(e) => {
    setFilter(e.target.value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      </header>

     

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredMenu.map((category, catIdx) => (
          <div key={catIdx} className="mb-12">
            <h2 className="text-2xl font-semibold text-[#f5ac26] mb-6 border-b border-gray-700 pb-2">
              {category.category}
            </h2>

            {/* If items have subcategories */}
            {category.items[0]?.subcategory ? (
              category.items.map((subcat, subcatIdx) => (
                <section key={subcatIdx} className="mb-8">
                  <h3 className="text-xl text-[#f5ac26] font-medium mb-4 border-b">{subcat.subcategory}</h3>
                  <div className="space-y-6">
                    {subcat.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex sm:flex-row justify-between items-center"
                      >
                        <div>
                          <p className="text-lg font-medium">{item.name}</p>
                          {item.description && (
                            <p className="text-sm text-gray-400">{item.description}</p>
                          )}
                        </div>
                        <span className="mt-2 sm:mt-0 text-lg font-semibold text-end text-[#f5ac26]">
                          {item.price} RSD
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              ))
            ) : (
              /* Else, render items directly (no subcategories) */
              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-start"
                  >
                    <div>
                      <h4 className="text-lg font-medium">{item.name}</h4>
                      {item.description && (
                        <p className="text-sm text-gray-400">{item.description}</p>
                      )}
                    </div>
                    <span className="mt-2 sm:mt-0 text-lg font-semibold text-[#f5ac26]">
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}

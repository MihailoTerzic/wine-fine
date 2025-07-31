'use client';

import React, { useState, useMemo } from "react";
import menuData from "../lib/menu";

export default function MenuPage() {
  const [filter, setFilter] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...menuData.map((category) => category.category)];
  }, []);

  const filteredMenu = useMemo(() => {
    if (filter === "All") return menuData;
    return menuData.filter((category) => category.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="text-center sticky top-0 bg-black py-8 border-b border-gray-700 z-20">
        <h1 className="text-4xl font-serif tracking-wide">Our Menu</h1>
        <p className="mt-2 text-gray-400 italic">
          Exquisite dishes & curated wines
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-black">
          <select
            aria-label="Filter menu by category"
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

      {/* Main Menu */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredMenu.map((category, catIdx) => (
          <div key={catIdx} className="mb-12">
            <h2 className="text-2xl font-semibold text-[#f5ac26] mb-6 border-b  pb-2">
              {category.category}
            </h2>

            {/* Items */}
            {category.items && category.items.length > 0 ? (
              category.items[0]?.subcategory ? (
                /* Render Subcategories */
                category.items.map((subcat, subcatIdx) => (
                  <section key={subcatIdx} className="mb-8">
                    <h3 className="text-xl text-[#f5ac26] font-medium mb-4 border-b border-gray-700 ">
                      {subcat.subcategory}
                    </h3>
                    <div className="space-y-6">
                      {subcat.items?.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-2 gap-x-4"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-lg font-medium">{item.name}</p>
                            {item.description && (
                              <p className="text-sm text-gray-400">{item.description}</p>
                            )}
                          </div>
                          <div className="text-lg font-semibold text-[#f5ac26] sm:text-right sm:w-40 flex-shrink-0">
                            {item.price && <span>{item.price} RSD</span>}
                            {item.priceGlass && (
                              <span className="block">
                                {item.priceGlass} | {item.priceBottle} RSD
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))
              ) : (
                /* Render items directly if no subcategories */
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-2 gap-x-4"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-medium">{item.name}</h4>
                        {item.description && (
                          <p className="text-sm text-gray-400">{item.description}</p>
                        )}
                      </div>
                      <div className="text-lg font-semibold text-[#f5ac26] sm:text-right sm:w-40 flex-shrink-0">
                        {item.price && <span>{item.price} RSD</span>}
                        {item.priceGlass && (
                          <span className="block">
                            {item.priceGlass} | {item.priceBottle} RSD
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <p className="text-gray-400 italic">No items available.</p>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}

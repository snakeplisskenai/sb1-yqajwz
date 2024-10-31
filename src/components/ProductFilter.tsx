import React, { useState } from 'react';

interface FilterProps {
  categories: string[];
  priceRange: { min: number; max: number };
  onFilterChange: (filters: {
    category?: string;
    priceRange?: { min: number; max: number };
    sortBy?: string;
  }) => void;
}

export const ProductFilter: React.FC<FilterProps> = ({
  categories,
  priceRange,
  onFilterChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRange);
  const [sortBy, setSortBy] = useState<string>('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange({ category, priceRange: selectedPriceRange, sortBy });
  };

  const handlePriceChange = (min: number, max: number) => {
    setSelectedPriceRange({ min, max });
    onFilterChange({ category: selectedCategory, priceRange: { min, max }, sortBy });
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    onFilterChange({ category: selectedCategory, priceRange: selectedPriceRange, sortBy: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-lg mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
                className="text-secondary focus:ring-secondary"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg mb-3">Price Range</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={selectedPriceRange.min}
              onChange={(e) =>
                handlePriceChange(Number(e.target.value), selectedPriceRange.max)
              }
              className="w-24 border-gray-300 rounded-md"
            />
            <span>to</span>
            <input
              type="number"
              value={selectedPriceRange.max}
              onChange={(e) =>
                handlePriceChange(selectedPriceRange.min, Number(e.target.value))
              }
              className="w-24 border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg mb-3">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="w-full border-gray-300 rounded-md"
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
};
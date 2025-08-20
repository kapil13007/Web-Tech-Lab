import React from 'react';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

// The data is now a constant, defined right in the component file.
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function App() {
  return (
    <div>
      {}
      <SearchBar />

      {}
      <ProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";



const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products") // Example open API
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      });
  }, []);

  const handleSort = (type) => {
    const sortedProducts = [...filteredProducts].sort((a, b) =>
      type === "price-asc" ? a.price - b.price : b.price - a.price
    );
    setSortType(type);
    setFilteredProducts(sortedProducts);
  };

  const handleFilter = (category) => {
    if (category) {
      setFilteredProducts(products.filter((product) => product.category === category));
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div class="product">
      <h2 >Available products:</h2>
      <div>
        <button onClick={() => handleSort("price-asc")}>Sort by Price: Low to High</button>
        <button onClick={() => handleSort("price-desc")}>Sort by Price: High to Low</button>
        <button onClick={() => handleFilter("electronics")}>Filter Electronics</button>
        <button onClick={() => handleFilter("")}>Clear Filters</button>
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

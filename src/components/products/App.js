import React from "react";
import productsData from "./vschoolProducts";
import Product from "./Product";
import "./App.css";

function App(){

	const productList = productsData.map(item => <Product key={item.id} product={item} />)

	return (
		<main>
			{productList}
		</main>
	)
}

export default App
import React from "react";

function Product(props){
	return(
		<div className="product-item">
			<div className="product-name"><strong>Product Name:</strong>&nbsp;{props.product.name}</div>
			<div className="product-price"><strong>Price:</strong>&nbsp;{props.product.price.toLocaleString("en-CA", { style: "currency", currency: "CAD"})}</div>
			<div className="product-desc"><strong>Description:</strong>&nbsp;{props.product.desc}</div>
		</div>
	)
}

export default Product
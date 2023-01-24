import React from "react";

export default function ShopCard({ card }) {
  return (
    <div className="shop-card">
      <h3 className="card-title">{card.name}</h3>
      <div className="card-color">{card.color}</div>
      <div className="card-img">
        <img src={card.img} alt={card.name}/>
      </div>
      <div className="card-payment">
        <div className="payment-price">${card.price}</div>
        <button className="payment-button">Add to cart</button>
      </div>    
    </div>
  )
}
import React from "react";

export default function ShopItem({ item }) {
  return (
    <div className="shop-item">
      <div className="item-img">
        <img src={item.img} alt={item.name} />
      </div>
      <h3 className="item-title">{item.name}</h3>
      <div className="item-color">{item.color}</div>
      <div className="item-price">${item.price}</div>
      <button className="item-button">Add to cart</button>
    </div>
  )
}
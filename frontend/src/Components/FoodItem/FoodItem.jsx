import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ item }) => {
  const { id, name, price, description, image } = item;

  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={item.image} alt={item.name} />
        {!cartItem[item._id] ? (
          <img
            className="add"
            onClick={() => addToCart(item._id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(item._id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItem[item._id]}</p>
            <img
              onClick={() => addToCart(item._id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{item.name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{item.description}</p>
        <p className="food-item-price">${item.price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

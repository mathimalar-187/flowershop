import React from "react";
import "./about.css";
import { Element } from 'react-scroll'

const products = [
  {
    id: 1,
    name: "Red Rose Bouquet",
    price: 499,
    image: "https://api.floraindia.com/upload/xc3VgGz2eL1737096477076.webp"
  },
  {
    id: 2,
    name: "White Lily",
    price: 699,
    image: "https://cdn.flowersnfruits.com/uploads/product/flowers_n_fruits/1687350686_12.png"
  },
  {
    id: 3,
    name: "Sunflower",
    price: 299,
    image: "https://www.atfleurs.com/cdn/shop/files/Gemini_Generated_Image_q2c7fbq2c7fbq2c7.png?v=1761644843&width=1100"
  },
  {
    id: 4,
    name: "Pink Rose Bouquet",
    price: 499,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKYgvQZw6C1YpEtcw-lwFHuGP4EfBDdK5c-A&s"
  },
  {
    id: 5,
    name: "Blue Blush",
    price: 699,
    image: "https://flowerlab.in/cdn/shop/files/BlushingBlueHandBouquet_1024x1024@2x.jpg?v=1750049789"
  },
  {
    id: 6,
    name: "Custamized bouquet",
    price: 299,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyuNNRs7PmlOadN40jxoOuTR6ycrJCquSgMg&s"
  }
];

function about() {
  return (
    <Element name="about" className="cart-container">
      {products.map((item) => (
        <div className="cart-card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>₹ {item.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </Element>
  );
}

export default about;

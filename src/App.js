import React from "react";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const pizzaLength = pizzaData.length;
console.log(pizzaLength);

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>FAST REACT PIZZA CO.</h1>
      </div>
      <div className="menu">
        <h2>Our Menu</h2>
        {pizzaLength > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
              {pizzaData.map((item) => (
                <Pizza key={item.name} item={item} />
              ))}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu. Please come back later</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

function Pizza({ item }) {
  return (
    <li className={`pizza ${item.soldOut ? "sold-out" : ""}`}>
      <div>
        <img src={item.photoName} alt={item.name} />
      </div>
      <div>
        <h3>{item.name}</h3>
        <p>{item.ingredients}</p>
        <span>{item.soldOut ? "Sold Out" : `€${item.price}`}</span>
      </div>
    </li>
  );
}
function Footer() {
  const openHour = 6;
  const closeHour = 23;
  const hours = new Date().getHours();
  const isOpen = hours >= openHour && hours <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open from 0{openHour}:00 to {closeHour}:00. Come visit us or
            order online
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          {" "}
          We're happy to welcome you between 0{openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
export default App;

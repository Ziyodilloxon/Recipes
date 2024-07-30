import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";

const formatTime = (time) => {
  if (time > 59) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours} ${hours > 1 ? "hours" : "hour"} ${minutes} ${
      minutes > 1 ? "minutes" : "minute"
    }`;
  }
  return `${time} ${time > 1 ? "minutes" : "minute"}`;
};

function RecipeDetail() {
  const [counter, setCounter] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const { document: recipe } = useDocument("recipes", id);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleAddToPurchase = () => {
    const storedPurchases = JSON.parse(localStorage.getItem("purchases")) || [];
    const existingItemIndex = storedPurchases.findIndex(
      (item) => item.name === recipe.title
    );

    if (existingItemIndex !== -1) {
      storedPurchases[existingItemIndex].quantity += counter;
    } else {
      storedPurchases.push({
        name: recipe.title,
        quantity: counter,
        price: recipe.price,
      });
    }

    localStorage.setItem("purchases", JSON.stringify(storedPurchases));
    navigate("/purchases");
  };

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="">
        <button className="btn btn-outline btn-info w-24 text-center">Back to Home</button>
      </Link>
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {recipe.images && recipe.images.length > 0 ? (
          recipe.images.map((imageURL, index) => (
            <img
              key={index}
              src={imageURL}
              alt={`Recipe ${index}`}
              className="w-full h-48 object-cover border rounded-lg"
            />
          ))
        ) : (
          <img
            src="https://via.placeholder.com/400x300?text=No+Image+Available"
            alt="No Images Available"
            className="w-full h-48 object-cover border rounded-lg"
          />
        )}
      </div>
      <div>
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
            <ul className="list-disc list-inside pl-5">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Cooking Time:</h3>
            <p>{formatTime(recipe.time)}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Description:</h3>
            <p>{recipe.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="badge badge-primary">{recipe.category}</span>
            <span className="badge badge-secondary">{recipe.price} $</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <button className="btn btn-primary" onClick={incrementCounter}>
            +
          </button>
          <h1>{counter}</h1>
          <button className="btn btn-secondary" onClick={decrementCounter}>
            -
          </button>
        </div>
        <button
          className="btn btn-accent mt-4"
          onClick={handleAddToPurchase}
          disabled={counter === 0}
        >
          Add to Purchase
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;

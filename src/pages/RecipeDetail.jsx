import React from "react";
import { useParams } from "react-router-dom";
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
  const { id } = useParams();
  const { document: recipe } = useDocument("recipes", id);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <div className="flex flex-wrap gap-3 mb-4 justify-center">
        {recipe.images && recipe.images.length > 0 ? (
          recipe.images.map((imageURL, index) => (
            <img
              key={index}
              src={imageURL}
              alt={`Recipe ${index}`}
              className="w-full sm:w-1/2 md:w-1/4 h-48 object-cover border rounded-lg"
            />
          ))
        ) : (
          <img
            src="https://via.placeholder.com/400x300?text=No+Image+Available"
            alt="No Images Available"
            className="w-full sm:w-1/2 md:w-1/4 h-48 object-cover border rounded-lg"
          />
        )}
      </div>
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
  );
}

export default RecipeDetail;

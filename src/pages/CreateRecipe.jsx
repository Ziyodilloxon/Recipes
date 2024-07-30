import React, { useState, useEffect } from "react";
// firebase
import { useCollection } from "../hooks/useCollection";
// rrd imports
import { Form, useActionData, useNavigate } from "react-router-dom";
// redux imports
import { useSelector } from "react-redux";
// components
import { RecipeInput } from "../components";
// custom hooks
import { useFirestore } from "../hooks/useFirestore";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let time = formData.get("time");
  let ingredients = formData.getAll("ingredients"); // O'zgarish: getAll() metodi
  let images = formData.getAll("images"); // O'zgarish: getAll() metodi
  let description = formData.get("description");
  let category = formData.get("category");
  let price = formData.get("price");

  return { title, time, ingredients, images, description, category, price };
};

function CreateRecipe() {
  const [ingredient, setIngredient] = useState(""); // Ingredient input qiymati
  const [ingredientsList, setIngredientsList] = useState([]); // Ingredientlar ro'yxati
  const [image, setImage] = useState(""); // Image input qiymati
  const [imagesList, setImagesList] = useState([]); // Rasmlar ro'yxati
  const { addNewDoc } = useFirestore(); // Firestore'ga yangi hujjat qo'shish uchun hook
  const userData = useActionData(); // Forma yuborilganidan keyin olingan ma'lumotlar
  const { user } = useSelector((state) => state.user); // Redux orqali foydalanuvchi ma'lumotlari
  const navigate = useNavigate(); // Sahifalar orasida navigatsiya qilish uchun hook

  useEffect(() => {
    if (userData && user) {
      const newDoc = {
        ...userData,
        uid: user.uid, // Foydalanuvchi identifikatori qo'shiladi
        ingredients: ingredientsList, // Ingredientlar ro'yxati qo'shiladi
        images: imagesList, // Rasmlar ro'yxati qo'shiladi
      };
      addNewDoc(newDoc); // Firestore'ga yangi hujjat qo'shish
      navigate("/"); // Home sahifasiga qaytish
    }
  }, [userData]);

  const handleAddIngredient = () => {
    if (ingredient.trim() === "") return; // Bo'sh qiymatlarni qo'shishni oldini olish
    if (ingredientsList.includes(ingredient.trim())) return; // Ingredient allaqachon mavjudligini tekshirish

    setIngredientsList((prevList) => [...prevList, ingredient.trim()]); // Ingredient qo'shish
    setIngredient(""); // Inputni tozalash
  };

  const handleAddImage = () => {
    if (image.trim() === "") return; // Bo'sh qiymatlarni qo'shishni oldini olish
    if (imagesList.length >= 4) return; // 4 ta rasmdan ko'p qo'shishni oldini olish
    if (imagesList.includes(image.trim())) return; // Rasm allaqachon mavjudligini tekshirish

    setImagesList((prevList) => [...prevList, image.trim()]); // Rasm qo'shish
    setImage(""); // Inputni tozalash
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://t4.ftcdn.net/jpg/02/99/78/83/360_F_299788342_zZuxKx2fLt8Ji2uZVFYuXM33wk5Vgy6W.jpg")',
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-lg p-6 bg-white bg-opacity-70 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-6 text-center">
            Add New Recipe
          </h1>
          <Form method="post" className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700"></label>
              <RecipeInput
                name="title"
                type="text"
                label="Enter your meal name..."
                labelText="Title :"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Category :
              </label>
              <select name="category" className="select select-bordered w-full">
                <option value="Uzbek Meal">Uzbek Meal</option>
                <option value="Europe Meal">Europe Meal</option>
                <option value="Street Food">Street Food</option>
                <option value="American Food">Japanese Food</option>
                <option value="American Food">American Food</option>
                <option value="American Food">Chinese Food</option>
                <option value="American Food">Mexican Food</option>
                <option value="American Food">Italian Food</option>
              </select>
            </div>
            <RecipeInput
              name="time"
              type="number"
              label="Enter preparation time of your meal..."
              className="w-full"
              labelText="Time :"
            />
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Ingredients :
              </label>
              <div className="flex items-end gap-4">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => setIngredient(e.target.value)} // Input qiymatini yangilash
                  placeholder="Enter an ingredient..."
                  className="input input-bordered w-full"
                />
                <button
                  type="button"
                  onClick={handleAddIngredient} // Ingredient qo'shish
                  className="btn btn-info mt-2"
                >
                  Add
                </button>
              </div>
              <div className="mt-2">
                ingredient :
                {ingredientsList.map((item, index) => (
                  <div key={index} className="badge badge-outline">
                    {item} {/* Qo'shilgan ingredientlarni ko'rsatish */}
                  </div>
                ))}
              </div>
              <input
                type="hidden"
                name="ingredients"
                value={ingredientsList.join(",")} // Ingredientsni vergul bilan ajratilgan stringga aylantirish
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Images :
              </label>
              <div className="flex items-end gap-4">
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)} // Input qiymatini yangilash
                  placeholder="Enter image URL..."
                  className="input input-bordered w-full"
                />
                <button
                  type="button"
                  onClick={handleAddImage} // Rasm qo'shish
                  className="btn btn-info mt-2"
                >
                  Add
                </button>
              </div>
              <div className="mt-2 flex gap-3">
                {imagesList.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Image ${index + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                ))}
              </div>
              <input type="hidden" name="images" value={imagesList.join(",")} />
            </div>
            <RecipeInput
              name="price"
              type="number"
              label="Write the price of your meal"
              className="w-full"
              labelText="Price :"
            />
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Method :
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter Method..."
                className="input input-bordered w-full h-32"
                required
              />
            </div>
            <div className="mt-4 flex gap-4">
              <button className="btn btn-info flex-1">Preview recipe</button>
              <button className="btn btn-success flex-1">Add recipe</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipe;

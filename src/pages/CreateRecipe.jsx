// firebase
import { useCollection } from "../hooks/useCollection";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// rrd imports
import { Form, useActionData } from "react-router-dom";

// redux imports
import { useSelector } from "react-redux";

// components
import { RecipeInput } from "../components";

// react hooks
import { useEffect } from "react";
import toast from "react-hot-toast";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let time = formData.get("time");

  return { title, time };
};

function CreateRecipe() {
  const userData = useActionData();
  const { user } = useSelector((state) => state.user);

  const deleteItem = (id) => {
    deleteDoc(doc(db, "recipes", id));
  };

  useEffect(() => {
    if (userData && user) {
      const newDoc = {
        ...userData,
        uid: user.uid,
        createdAt: serverTimestamp(),
      };
      addDoc(collection(db, "recipes"), newDoc).then(() => {
        toast.success("🎉Great, you just made your own recipe.");
      });
    }
  }, [userData, user]);

  const { data: recipes } = useCollection(
    "recipes",
    ["uid", "==", user?.uid],
    ["createdAt"]
  );

  return (
    <div>
      <div>
        <Form
          method="post"
          className="flex flex-col items-center gap-5 card bg-base-100 w-96 shadow-xl p-5"
        >
          <h1>Add New Recipe</h1>
          <RecipeInput
            name="title"
            type="text"
            label="Enter your meal name..."
          />
          <RecipeInput
            name="time"
            type="number"
            label="Enter preparation time of your meal..."
          />
          <div>
            <button className="btn btn-outline btn-info">Add</button>
          </div>
        </Form>
      </div>
      {recipes &&
        recipes.reverse().map((recipe) => {
          return (
            <div key={recipe.id}>
              <h1>{recipe.title}</h1>
              <h2>{recipe.time}</h2>
              <div>
                <button
                  className="btn btn-outline btn-error"
                  onClick={() => deleteItem(recipe.id)}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CreateRecipe;

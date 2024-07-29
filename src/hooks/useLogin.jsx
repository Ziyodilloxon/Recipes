// firebase imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// slices
import { login } from "../features/userSlice";

// react-redux
import { useDispatch } from "react-redux";

// react-toast
import toast from "react-hot-toast";

// react imports
import { useState } from "react";

const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const signInWithEmail = async (email, password) => {
    setIsPending(true);
    console.log("Email: ", email);
    console.log("Password: ", password);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User: ", user);
      dispatch(login(user));
      toast.success(
        <div>
          <h4 className="text-xl font-semibold ">
            👋 Assalomu alaykum! {user.displayName}{" "}
          </h4>
          <p>Xush kelibsiz, siz muvaffaqiyatli tizimga kirdingiz.</p>
        </div>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setIsPending(false);
    } catch (error) {
      console.error("Error: ", error.message);
      toast.error(
        <div>
          <h4>❌ Xatolik!</h4>
          <p>Login yoki parol noto'g'ri. Iltimos, qaytadan urinib ko'ring.</p>
        </div>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setIsPending(false);
    }
  };

  return { signInWithEmail, isPending };
};

export default useLogin;

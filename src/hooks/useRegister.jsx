// firebase imports
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// slices
import { login } from "../features/userSlice";

// react-redux
import { useDispatch } from "react-redux";

// react-toast
import toast from "react-hot-toast";

// react imports
import { useState } from "react";

const useRegister = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const registerWithEmail = async (email, displayName, password, photoURL) => {
    setIsPending(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
      const user = userCredential.user;
      dispatch(login(user));
      toast.success(
        <div>
          <h4>🎉 Tabriklaymiz!</h4>
          <p>
            Siz muvaffaqiyatli ro'yxatdan o'tdingiz. Endi tizimga kirishingiz
            mumkin.
          </p>
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
      setIsPending(false);
      toast.error(
        <div>
          <h4>❌ Xatolik!</h4>
          <p>{error.message}</p>
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
    }
  };

  const registerWithGoogle = async () => {
    setIsPending(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(login(user));
      toast.success(
        <div>
          <h4>🎉 Tabriklaymiz!</h4>
          <p>
            Siz muvaffaqiyatli ro'yxatdan o'tdingiz. Endi tizimga kirishingiz
            mumkin.
          </p>
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
    } catch (error) {
      setIsPending(false);
      toast.error(
        <div>
          <h4>❌ Xatolik!</h4>
          <p>{error.message}</p>
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
    }
    setIsPending(false);
  };

  return { registerWithEmail, registerWithGoogle, isPending };
};

export { useRegister };

// rrd imports
import { Form, Link, useActionData } from "react-router-dom";

// custom hooks
import { useRegister } from "../hooks/useRegister";

// react imports
import { useEffect } from "react";

// components
import { FormInput } from "../components";

// react icons
import { MdEmail } from "react-icons/md";
import { FaImage, FaKey, FaUser, FaGoogle } from "react-icons/fa";

// Action function
export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let displayName = formData.get("displayName");
  let password = formData.get("password");
  let photoURL = formData.get("photoURL");

  return { email, password, photoURL, displayName };
};

function Register() {
  const userData = useActionData();
  const { isPending, registerWithEmail, registerWithGoogle } = useRegister();

  useEffect(() => {
    if (userData) {
      registerWithEmail(
        userData.email,
        userData.displayName,
        userData.password,
        userData.photoURL
      );
    }
  }, [userData]);

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 auth-left bg-[url('https://picsum.photos/800/1200')] bg-center bg-no-repeat bg-cover"></div>
      <div className="flex-1 grid place-items-center min-h-screen">
        <Form
          method="post"
          className="flex flex-col items-center gap-5 card bg-base-100 w-96 shadow-xl p-5"
        >
          <h1 className="text-4xl font-bold italic">Register</h1>
          <div className="w-full relative mb-4">
            <MdEmail
              style={{ position: "absolute", top: "51px", left: "11.3px" }}
              className="text-xl"
            />
            <FormInput type="email" name="email" label="Write your email..." />
          </div>
          <div className="w-full relative mb-4">
            <FaUser
              style={{ position: "absolute", top: "51px", left: "11.3px" }}
              className="text-xl"
            />
            <FormInput
              type="text"
              name="displayName"
              label="Write your first name..."
            />
          </div>
          <div className="w-full relative mb-4">
            <FaKey
              style={{ position: "absolute", top: "51px", left: "11.3px" }}
              className="text-xl"
            />
            <FormInput
              type="password"
              name="password"
              label="Write your password..."
            />
          </div>
          <div className="w-full relative mb-4">
            <FaImage
              style={{ position: "absolute", top: "51px", left: "11.3px" }}
              className="text-xl"
            />
            <FormInput
              type="url"
              name="photoURL"
              label="Put your image url..."
            />
          </div>
          <div className="w-full px-5">
            {!isPending && (
              <button className="btn btn-primary btn-block">Register</button>
            )}
            {isPending && (
              <button disabled className="btn btn-primary btn-block">
                Loading...
              </button>
            )}
          </div>
          <div className="w-full p-5">
            <button
              onClick={registerWithGoogle}
              className="btn btn-secondary btn-block"
              disabled={isPending}
            >
              <FaGoogle className="mr-2" />
              {isPending ? "Loading..." : "Sign up with Google"}
            </button>
          </div>
          <div className="text-center">
            Already registered?{" "}
            <Link className="link link-primary pl-2" to="/login">
              Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;

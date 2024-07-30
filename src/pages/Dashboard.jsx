import React from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-bold italic  text-gray-800 text-center mb-4">
            Profile
          </h2>
          <div className="avatar flex justify-center mb-4">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src={user.photoURL} alt="User Avatar" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold text-gray-700 mb-2">
              <span className="font-bold">User Name: </span>
              {user.displayName}
            </h1>
            <h2 className="text-lg text-gray-600 mb-2">
              <span className="font-bold">E-Mail: </span>
              {user.email}
            </h2>
            <h2 className="text-lg text-gray-600">
              <span className="font-bold">Phone Number: </span>
              {user.phoneNumber
                ? user.phoneNumber
                : "You don't have phone number :("}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

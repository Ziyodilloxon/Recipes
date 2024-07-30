import React, { useEffect, useState } from "react";

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};

function Purchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const storedPurchases = JSON.parse(localStorage.getItem("purchases")) || [];
    setPurchases(storedPurchases);
  }, []);

  useEffect(() => {
    localStorage.setItem("purchases", JSON.stringify(purchases));
  }, [purchases]);

  const incrementQuantity = (index) => {
    const updatedPurchases = [...purchases];
    updatedPurchases[index].quantity += 1;
    setPurchases(updatedPurchases);
  };

  const decrementQuantity = (index) => {
    const updatedPurchases = [...purchases];
    updatedPurchases[index].quantity -= 1;
    if (updatedPurchases[index].quantity === 0) {
      updatedPurchases.splice(index, 1);
    }
    setPurchases(updatedPurchases);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Purchases</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-left">Title</th>
              <th className="text-left">Price</th>
              <th className="text-left">Quantity</th>
              <th className="text-left">Total</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.quantity * item.price}</td>
                <td>
                  <button
                    className="btn btn-primary btn-xs mx-1"
                    onClick={() => incrementQuantity(index)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-secondary btn-xs mx-1"
                    onClick={() => decrementQuantity(index)}
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3" className="text-right">
                Total Price
              </th>
              <th colSpan="2" className="text-right">
                ${calculateTotalPrice(purchases)}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Purchases;

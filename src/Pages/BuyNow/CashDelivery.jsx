import React from "react";
import { toast } from "react-toastify";

export default function CashDelivery({ product, quantity, finalTotal, onClose, onConfirm }) {

  const deliveryCharge = finalTotal - product.price * quantity;

  const handleConfirmCOD = () => {
    toast.success(
      `Order placed for ${quantity} x ${product.name} via Cash on Delivery. Total: Rs ${finalTotal}`
    );
    onConfirm();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="p-6 rounded-lg w-11/12 md:w-1/2 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-semibold mb-4">Cash on Delivery</h2>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md mb-4">
          <p>Delivery Charge: Rs {deliveryCharge}</p>
          <p className="font-semibold">Final Amount: Rs {finalTotal}</p>
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmCOD}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Confirm COD Order
          </button>
        </div>
      </div>
    </div>
  );
}

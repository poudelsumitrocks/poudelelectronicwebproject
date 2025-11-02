import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Navbar from "../../Component/Header/Navbar";
import Footer from "../../Component/Footer/Footer";
import { ThemeContext } from "../../Component/useContext/Toggle";
import { toast } from "react-toastify";
import CashDelivery from "./CashDelivery";
import { useForm } from "react-hook-form";

export default function BuyNowPage() {
  const { isDark } = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardPin, setCardPin] = useState("");
  const [showCODInfo, setShowCODInfo] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const user = JSON.parse(localStorage.getItem("data"));

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("data"));
    if (savedUser) {
      setFormData((prev) => ({
        ...prev,
        fullName: savedUser.fullName || "",
        email: savedUser.email || "",
      }));
    }
  }, []);

  const esewaQR = "/Esewa.png";
  const khaltiQR = "/Khalti.png";

  const { product, quantity } = location.state || {};

  if (!product) {
    return (
      <div className="p-10 text-red-500 text-xl">
        No product selected. Go back to products.
      </div>
    );
  }

  const totalPrice = product.price * quantity;
  const deliveryCharge = totalPrice < 500 ? 50 : 0;
  const finalTotal = totalPrice + deliveryCharge;

  const handleOrder = (e, method) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login to continue your purchase!");
      navigate("/landing");
      return;
    }

    const { fullName, email, address, phone } = formData;

    if (!fullName || !email || !address || !phone) {
      toast.error("Please fill in all the details!");
      return;
    }

    if (method === "Pay Online") {
      setShowModal(true);
      return;
    }

    if (method === "Cash on Delivery") {
      setShowCODInfo(true);
    }
  };

  const handlePlatformClick = (platform) => {
    setSelectedPlatform(platform);
    setPaymentScreenshot(null);
    setCardNumber("");
    setCardPin("");
  };

  const handleScreenshotUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPaymentScreenshot(file);
      toast.success("Payment screenshot uploaded successfully!");
    }
  };

  const handleConfirmPayment = () => {
    if (selectedPlatform === "Card") {
      if (!cardNumber || !cardPin) {
        toast.error("Please enter card number and PIN!");
        return;
      }
      toast.success(`Payment of Rs ${totalPrice} successful via Card`);
      setShowModal(false);
      setTimeout(() => navigate("/"), 2000);
      return;
    }

    if (!paymentScreenshot) {
      toast.error("Please upload the payment screenshot!");
      return;
    }

    toast.success(
      `Payment successfully done for ${quantity} x ${product.name} via ${selectedPlatform}`
    );
    setShowModal(false);
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div
      className={`${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen`}
    >
      <Navbar />

      {/* Main Checkout Container */}
      <div
        className={`max-w-4xl mx-auto p-6 mt-20 rounded-lg shadow-lg ${
          isDark ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {/* Product summary */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div
            className={`flex-1 flex justify-center items-center rounded-lg p-4 ${
              isDark ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-xl text-yellow-500">Rs {product.price}</p>
            <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Quantity: {quantity}
            </p>
            <p className="text-lg font-semibold mt-2">Total: Rs {totalPrice}</p>
          </div>
        </div>

        {/* Checkout form */}
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => handleOrder(e, "Pay Online")}
        >
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className={`p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              isDark
                ? "border-gray-600 bg-gray-700 text-white"
                : "border-gray-300 bg-white text-gray-900"
            }`}
          />
          {errors.fullName && (
            <span className="text-red-500">This field is required</span>
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              isDark
                ? "border-gray-600 bg-gray-700 text-white"
                : "border-gray-300 bg-white text-gray-900"
            }`}
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}

          <input
            name="address"
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className={`p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              isDark
                ? "border-gray-600 bg-gray-700 text-white"
                : "border-gray-300 bg-white text-gray-900"
            }`}
          />
          {errors.address && (
            <span className="text-red-500">This field is required</span>
          )}

          <input
            name="phone"
            type="tel" 
            pattern="[0-9]*" 
            inputMode="numeric" 
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, phone: value });
            }}
            className={`p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              isDark
                ? "border-gray-600 bg-gray-700 text-white"
                : "border-gray-300 bg-white text-gray-900"
            }`}
          />
          {errors.phone && (
            <span className="text-red-500">Enter the number</span>
          )}

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button
              type="submit"
              className="flex-1 bg-yellow-500 text-gray-900 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Pay Online
            </button>
            <button
              type="button"
              onClick={() =>
                handleOrder(new Event("click"), "Cash on Delivery")
              }
              className="flex-1 bg-gray-500 text-white py-3 rounded-md font-semibold hover:bg-gray-600 transition"
            >
              Cash on Delivery
            </button>
          </div>
        </form>
      </div>

      {/* Online Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`p-6 rounded-lg w-11/12 md:w-1/2 ${
              isDark ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Choose Online Payment Platform
            </h2>

            <div className="flex flex-col gap-3 mb-4">
              <button
                onClick={() => handlePlatformClick("eSewa")}
                className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
              >
                eSewa
              </button>
              <button
                onClick={() => handlePlatformClick("Khalti")}
                className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Khalti
              </button>
              <button
                onClick={() => handlePlatformClick("Card")}
                className="bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 transition"
              >
                Card Payment
              </button>
            </div>

            {(selectedPlatform === "eSewa" ||
              selectedPlatform === "Khalti") && (
              <div className="mb-4 flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                <p className="mb-2 font-semibold">
                  {selectedPlatform} QR Code:
                </p>
                <img
                  src={selectedPlatform === "eSewa" ? esewaQR : khaltiQR}
                  alt={`${selectedPlatform} QR`}
                  className="h-48 w-48 object-contain"
                />
                <div className="mt-4 w-full">
                  <label className="block mb-2">
                    Upload Payment Screenshot:
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleScreenshotUpload}
                    className="w-full"
                  />
                  {paymentScreenshot && (
                    <p className="mt-2 text-green-600">
                      {paymentScreenshot.name} uploaded
                    </p>
                  )}
                </div>
              </div>
            )}

            {selectedPlatform === "Card" && (
              <div className="mb-4 flex flex-col gap-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                <label className="font-semibold">Enter Card Details</label>
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="password"
                  placeholder="PIN"
                  value={cardPin}
                  onChange={(e) => setCardPin(e.target.value)}
                  className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <p className="text-lg font-semibold mt-2">
                  Amount: Rs {totalPrice}
                </p>
              </div>
            )}

            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPayment}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {showCODInfo && (
        <CashDelivery
          product={product}
          quantity={quantity}
          finalTotal={finalTotal}
          formData={formData}
          onClose={() => setShowCODInfo(false)}
          onConfirm={() => {
            setShowCODInfo(false);
            setTimeout(() => navigate("/"), 1500);
          }}
        />
      )}

      <Footer />
    </div>
  );
}

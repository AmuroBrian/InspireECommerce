"use client";

import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../../script/firebaseConfig"; // Ensure this path is correct
import { useRouter } from "next/navigation";

export default function LoginModal({ onClose }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const router = useRouter();

  // Button color logic
  const isFormFilled = formData.email.trim() !== "" && formData.password.trim() !== "";

  useEffect(() => {
    if (loading) {
      const text = "Logging In...";
      let index = 0;
      const interval = setInterval(() => {
        setAnimatedText(text.slice(0, index + 1));
        index = (index + 1) % (text.length + 1);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [loading]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setSuccess("Login successful! Redirecting...");

      setTimeout(() => {
        onClose(); // Close modal after success
        router.push("/main");
      }, 3000); // Show loading for 3 seconds before redirecting
    } catch (err) {
      setError(getFriendlyErrorMessage(err.code));
      setLoading(false);
    }
  };

  const getFriendlyErrorMessage = (errorCode) => {
    const errorMessages = {
      "auth/invalid-email": "Invalid email format.",
      "auth/user-not-found": "No account found with this email.",
      "auth/wrong-password": "Incorrect password. Please try again.",
      "auth/too-many-requests": "Too many login attempts. Try again later.",
      "auth/network-request-failed": "Network error. Check your internet connection.",
    };
    return errorMessages[errorCode] || "Login failed. Please try again.";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Modal Header */}
        <div className="relative border-b pb-2">
          <h2 className="text-xl font-semibold text-gray-800 text-center">Login</h2>
          <button
            onClick={onClose}
            className="absolute right-2 top-1 text-gray-600 hover:text-gray-900 text-lg"
            disabled={loading}
          >
            ✕
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-black">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondaryColor"
            required
            disabled={loading}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondaryColor"
            required
            disabled={loading}
          />

          {/* Login Button with Dynamic Color */}
          <button
            type="submit"
            className={`w-full text-white p-2 rounded flex items-center justify-center transition-colors ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : isFormFilled
                ? "bg-secondaryColor"
                : "bg-backgroundColor"
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                <span>{animatedText}</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

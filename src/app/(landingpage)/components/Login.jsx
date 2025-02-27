"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../../script/firebaseConfig"; // Ensure this path is correct
import { useRouter } from "next/navigation";

export default function LoginModal({ onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      }, 1500);
    } catch (err) {
      setError(getFriendlyErrorMessage(err.code));
      setLoading(false); // Re-enable button only if login fails
    }
  };

  // Convert Firebase error codes to user-friendly messages
  const getFriendlyErrorMessage = (errorCode) => {
    const errorMessages = {
      "auth/invalid-email": "Invalid email format.",
      "auth/user-not-found": "No account found with this email.",
      "auth/wrong-password": "Incorrect password. Please try again.",
      "auth/too-many-requests": "Too many login attempts. Try again later.",
      "auth/network-request-failed":
        "Network error. Check your internet connection.",
    };
    return errorMessages[errorCode] || "Login failed. Please try again.";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <div className="relative border-b pb-2">
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            Login
          </h2>
          <button
            onClick={onClose}
            className="absolute right-2 top-1 text-gray-600 hover:text-gray-900 text-lg"
            disabled={loading} // Prevent closing modal while logging in
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-black">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
            disabled={loading} // Disable input while logging in
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
            disabled={loading} // Disable input while logging in
          />
          <button
            type="submit"
            className={`w-full text-white p-2 rounded ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

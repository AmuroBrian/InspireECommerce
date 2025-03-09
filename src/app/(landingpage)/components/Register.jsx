"use client";

import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../../script/firebaseConfig";
import { useRouter } from "next/navigation";

export default function RegisterModal({ onClose }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    address: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("Weak");
  const router = useRouter();

  useEffect(() => {
    setPasswordMismatch(formData.password !== formData.confirmPassword);
  }, [formData.password, formData.confirmPassword]);

  const checkPasswordStrength = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password.length >= 8;

    const score = [hasUpperCase, hasNumber, hasSpecialChar].filter(Boolean).length;
    if (score === 3 && isValidLength) return "Strong";
    if (score === 2 && isValidLength) return "Moderate";
    return "Weak";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (passwordMismatch) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    if (passwordStrength !== "Strong") {
      setError("Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        contact: formData.contact,
        address: formData.address,
        uid: userCredential.user.uid
      });

      setSuccess("Registration successful! Redirecting...");
      setTimeout(() => {
        onClose();
        router.push("/main");
      }, 1500);
    } catch (err) {
      setError(getFriendlyErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  const getFriendlyErrorMessage = (errorCode) => {
    const errorMessages = {
      "auth/email-already-in-use": "Email is already registered.",
      "auth/invalid-email": "Invalid email format.",
      "auth/weak-password": "Password must be at least 6 characters.",
      "auth/network-request-failed": "Network error. Check your connection."
    };
    return errorMessages[errorCode] || "Registration failed. Please try again.";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <div className="relative border-b pb-2">
          <h2 className="text-xl font-semibold text-gray-800 text-center">Register</h2>
          <button onClick={onClose} className="absolute right-2 top-1 text-gray-600 hover:text-gray-900 text-lg">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-black">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <div className="grid grid-cols-2 gap-2">
            <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
            <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
          </div>

          {Object.keys(formData).map((field) => (
            !["password", "confirmPassword", "firstname", "lastname"].includes(field) ? (
              <input key={field} type="text" name={field} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} value={formData[field]} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
            ) : null
          ))}

          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className={`w-full p-2 border ${passwordMismatch ? "border-red-500" : "border-gray-300"} rounded`} required />
          {passwordMismatch && <p className="text-red-500 text-sm">Passwords do not match.</p>}
           {/* Password Strength Indicator */}
           <div className="flex space-x-1 mt-2 mb-1">
            <div className={`w-1/3 h-2 rounded ${ passwordStrength === "Weak" ? "bg-red-500" : passwordStrength === "Moderate" ? "bg-yellow-500" : "bg-green-500" }`}></div>
            <div className={`w-1/3 h-2 rounded ${ passwordStrength === "Weak" ? "bg-gray-300" : passwordStrength === "Moderate" ? "bg-yellow-500" : "bg-green-500" }`}></div>
            <div className={`w-1/3 h-2 rounded ${ passwordStrength === "Strong" ? "bg-green-500" : "bg-gray-300" }`}></div>
          </div>
          <p className="text-sm text-gray-600">(Min 8 chars, 1 uppercase, 1 number, 1 special char)</p>
          <button type="submit" className={`w-full text-white p-2 rounded ${loading ? "bg-secondaryColor cursor-not-allowed" : "bg-secondaryColor"}`} disabled={loading}>{loading ? "Registering..." : "Register"}</button>
        </form>
      </div>
    </div>
  );
}

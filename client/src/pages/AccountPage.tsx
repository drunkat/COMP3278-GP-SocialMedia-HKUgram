import React, { useEffect, useState } from "react";

// Define a TypeScript interface for the user object
interface User {
  username: string;
  email: string;
  bio: string;
}

const BASE_URL = "http://127.0.0.1:8000"; // FastAPI backend URL
const USER_ID = 2; // Example user ID, replace with logged-in user ID

export default function AccountPage() {
  // State with type safety: user must match the User interface
  const [user, setUser] = useState<User>({ username: "", email: "", bio: "" });

  // Load user info when component mounts
  useEffect(() => {
    async function loadAccount() {
      try {
        const response = await fetch(`${BASE_URL}/users/${USER_ID}`);
        const data = await response.json();
        setUser({
          username: data.username,
          email: data.email,
          bio: data.bio || "",
        });
      } catch (error) {
        console.error("Error loading account:", error);
      }
    }
    loadAccount();
  }, []);

  // Update user info (only bio in this example)
  async function updateAccount() {
    try {
      const response = await fetch(`${BASE_URL}/users/${USER_ID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bio: user.bio }),
      });
      const data = await response.json();
      alert("Account updated successfully!");
      console.log(data);
    } catch (error) {
      console.error("Error updating account:", error);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">My Account</h2>

      {/* Username field (read-only) */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Username</label>
        <input
          type="text"
          value={user.username}
          readOnly
          className="w-full border rounded px-3 py-2 bg-gray-100"
        />
      </div>

      {/* Email field (read-only) */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Email</label>
        <input
          type="text"
          value={user.email}
          readOnly
          className="w-full border rounded px-3 py-2 bg-gray-100"
        />
      </div>

      {/* Editable Bio field */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Bio</label>
        <textarea
          value={user.bio}
          onChange={(e) => setUser({ ...user, bio: e.target.value })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Update button */}
      <button
        onClick={updateAccount}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Update
      </button>
    </div>
  );
}

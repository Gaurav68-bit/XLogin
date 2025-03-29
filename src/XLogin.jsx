

import { useState } from "react";

export default function XLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let newError = { username: "", password: "" };
    
    if (!username) newError.username = "Please fill out this field";
    if (!password) newError.password = "Please fill out this field";
    
    setError(newError);
    if (newError.username || newError.password) return;

    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {error.username && <p className="text-red-500 text-sm">{error.username}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
      </form>
      {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
    </div>
  );
}


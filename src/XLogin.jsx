import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill out both fields.");
      return;
    }
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {isLoggedIn ? (
        <div>
        <h1 className="text-xl font-bold mb-4">Login Page</h1>
        <h3 className="text-2xl font-bold">Welcome, user!</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-5 border rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-4">Login Page</h1>

          <div className="mb-3">
            <label className="block font-semibold">Username</label>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border p-2 rounded w-full"
            />
          </div>

          <div className="mb-3">
            <label className="block font-semibold">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border p-2 rounded w-full"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-3">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

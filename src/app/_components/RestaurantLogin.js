"use client";
import { useState } from "react";

const RestaurantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    console.log(email, password);

    setEmail(" ");
    setPassword(" ");
  };

  return (
    <section className="w-[80vw] sm:max-w-md 2xl:max-w-xl flex flex-col items-center justify-center mx-auto px-4 h-full">
      <div className="w-full">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Email"
            className="input-field"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <div>
          <button className="submit-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </section>
  );
};
export default RestaurantLogin;

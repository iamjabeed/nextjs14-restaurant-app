"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const RestaurantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    if (!email || !password) {
      toast.error("please fill all the input fields");
      return;
    }
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      // console.log(response);
      const data = response?.data?.result;
      if (data) {
        toast.success("successfully Login!");
      }
      localStorage.setItem("restaurantInfo", JSON.stringify(data));
      router.push("/restaurant/dashboard");
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.message);
    }
    setEmail("");
    setPassword("");
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

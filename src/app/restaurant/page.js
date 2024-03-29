"use client";

import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import RestaurantHeader from "../_components/RestaurantHeader";
import Footer from "../_components/Footer";

const page = () => {
  const [login, setLogin] = useState(true);
  return (
    <section className="">
      <div>
        <RestaurantHeader />
        <div>
          <div>
            {/* <h2 className="mb-4 font-semibold text-xl">Login</h2> */}
            {login ? <RestaurantLogin /> : <RestaurantSignUp />}
          </div>
          <div className="flex items-center justify-center text-lg">
            <button onClick={() => setLogin(!login)}>
              {login
                ? "Don't have an account? Signup"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};
export default page;

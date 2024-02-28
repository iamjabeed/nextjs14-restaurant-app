"use client";

import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import RestaurantHeader from "../_components/RestaurantHeader";
import Footer from "../_components/Footer";

const page = () => {
  const [login, setLogin] = useState(true);
  return (
    <section>
      <div>
        <RestaurantHeader />

        <div>
          <h2>Login/signup page</h2>
          {login ? <RestaurantLogin /> : <RestaurantSignUp />}
        </div>
        <div>
          <button onClick={() => setLogin(!login)}>
            {login
              ? "Don't have an account? Signup"
              : "Already have an account? Login"}
          </button>
        </div>
        <Footer />
      </div>
    </section>
  );
};
export default page;

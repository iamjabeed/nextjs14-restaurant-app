import { useState } from "react";

const RestaurantSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(email, password, confirmPassword, name, city, address, contact);

    const result = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({ email, password, name, city, address, contact }),
    });

    const data = await result.json();
    console.log(data);
    if (result.success) {
      alert("Restaurant Registered successfully");
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setCity(" ");
    setAddress("");
    setContact("");
  };
  return (
    <div className="w-[80vw] sm:max-w-md 2xl:max-w-xl mx-auto px-4 gap-2">
      {/* <h4>SignUp</h4> */}
      <div className="w-full flex flex-col gap-2">
        <div>
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
          <input
            type="password"
            placeholder="confirm Password"
            className="input-field"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Restaurant name"
            className="input-field"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="City"
            className="input-field"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            value={city}
          />
        </div>
        <div>
          <input
            type="textarea"
            placeholder="Full address"
            className="input-field"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Contact no."
            className="input-field"
            onChange={(e) => {
              setContact(e.target.value);
            }}
            value={contact}
          />
        </div>
        <div>
          <button className="submit-btn" onClick={handleSignUp}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};
export default RestaurantSignUp;

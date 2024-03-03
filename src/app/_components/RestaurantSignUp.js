const RestaurantSignUp = () => {
  return (
    <div className="w-[80vw] sm:max-w-md 2xl:max-w-xl mx-auto px-4 gap-2">
      {/* <h4>SignUp</h4> */}
      <div className="w-full flex flex-col gap-2">
        <div>
          <input type="text" placeholder="Email" className="input-field" />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="confirm Password"
            className="input-field"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Restaurant name"
            className="input-field"
          />
        </div>
        <div>
          <input type="text" placeholder="City" className="input-field" />
        </div>
        <div>
          <input
            type="textarea"
            placeholder="Full address"
            className="input-field"
          />
          {/* <textarea
            name="Full address"
            id="FullAddress"
            cols="40"
            rows="4"
          ></textarea> */}
        </div>
        <div>
          <input
            type="number"
            placeholder="Contact no."
            className="input-field"
          />
        </div>
        <div>
          <button className="submit-btn">Signup</button>
        </div>
      </div>
    </div>
  );
};
export default RestaurantSignUp;

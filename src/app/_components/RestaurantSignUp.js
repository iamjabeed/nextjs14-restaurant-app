const RestaurantSignUp = () => {
  return (
    <div>
      <h4>SignUp</h4>
      <div>
        <div>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <input type="password" placeholder="confirm Password" />
        </div>
        <div>
          <input type="text" placeholder="Restaurant name" />
        </div>
        <div>
          <input type="text" placeholder="City" />
        </div>
        <div>
          {/* <input type="textarea" placeholder="Full address" /> */}
          <textarea
            name="Full address"
            id="FullAddress"
            cols="40"
            rows="4"
          ></textarea>
        </div>
        <div>
          <input type="number" placeholder="Contact no." />
        </div>
        <div>
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
};
export default RestaurantSignUp;

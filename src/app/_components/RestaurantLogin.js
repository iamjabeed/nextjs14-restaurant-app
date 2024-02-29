const RestaurantLogin = () => {
  return (
    <section className="w-full sm:max-w-md 2xl:max-w-xl flex flex-col items-center justify-center mx-auto px-4">
      {/* <h4>Login</h4> */}
      <div className="w-full">
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
          <button className="submit-btn">Login</button>
        </div>
      </div>
    </section>
  );
};
export default RestaurantLogin;

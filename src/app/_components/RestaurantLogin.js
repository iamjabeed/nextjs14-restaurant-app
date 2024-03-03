const RestaurantLogin = () => {
  return (
    <section className="w-[80vw] sm:max-w-md 2xl:max-w-xl flex flex-col items-center justify-center mx-auto px-4 h-full">
      {/* <h4>Login</h4> */}
      <div className="w-full">
        <div className="mb-2">
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

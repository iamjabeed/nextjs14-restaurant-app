import Link from "next/link";
const RestaurantHeader = () => {
  return (
    <div className="">
      <div className="logo">
        <h4>Logo</h4>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Login/SignUp</Link>
        </li>
        <li>
          <Link href="/">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantHeader;

import Link from "next/link";
const RestaurantHeader = () => {
  return (
    <div className="flex justify-between items-center mx-4 h-16">
      <div className="logo">
        <h4>Logo</h4>
      </div>
      <ul className="flex gap-4">
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

import bcrypt from "bcryptjs";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";
import { Restaurant } from "@/models/restaurantsModel";

export async function GET() {
  await connectDB();
  // await mongoose.connect(process.env.MONGO_URI);
  try {
    const data = await Restaurant.find();
    // console.log("Fetched restaurant data:", data);

    return NextResponse.json({ result: data });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("Internal Server Error");
  }
}
//* SIGNUP
export async function POST(req) {
  const { email, password, name, city, address, contact } = await req.json();
  await connectDB();
  // await mongoose.connect(process.env.MONGO_URI);

  const existingUser = await Restaurant.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newRestaurant = new Restaurant({
    name,
    email,
    password: hashedPassword,
    city,
    address,
    contact,
  });

  try {
    await newRestaurant.save();
    // console.log("New restaurant created:", newRestaurant);
    return NextResponse.json(
      {
        result: {
          name,
          email,
          city,
          address,
          contact,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse(error, { status: 500 });
  }
}

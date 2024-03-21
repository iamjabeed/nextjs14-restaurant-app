import bcrypt from "bcryptjs";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";
import { Restaurant } from "@/models/restaurantsModel";

export async function GET() {
  await connectDB();

  try {
    const data = await Restaurant.find();
    return NextResponse.json({ result: data });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("Internal Server Error");
  }
}

export const POST = async (req) => {
  const { email, password } = await req.json();
  console.log(email, password);

  await connectDB();
  const existingRestaurant = await Restaurant.findOne({ email });

  //verify user exists
  if (existingRestaurant) {
    const validPassword = await bcrypt.compare(
      password,
      existingRestaurant.password
    );

    if (validPassword) {
      return NextResponse.json({
        result: {
          name: existingRestaurant.name,
          email: existingRestaurant.email,
          city: existingRestaurant.city,
          address: existingRestaurant.address,
          contact: existingRestaurant.contact,
        },
      });
    } else {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }
  } else {
    return NextResponse.json(
      { error: "Restaurant not found" },
      { status: 400 }
    );
  }
};

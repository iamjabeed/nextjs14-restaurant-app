import { connectDB } from "@/app/lib/db";
import { Restaurant } from "@/models/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(connectDB);
    console.log("Connected to MongoDB");

    const data = await Restaurant.find();
    console.log("Fetched restaurant data:", data);

    return NextResponse.json({ result: data });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("Internal Server Error");
  }
}

export async function POST(req) {
  const { email, password, name, city, address, contact } = await req.json();
  try {
    await mongoose.connect(connectDB);
    console.log("Connected to MongoDB");
    const newRestaurant = new Restaurant({
      name,
      email,
      password,
      city,
      address,
      contact,
    });

    await newRestaurant.save();
    console.log("New restaurant created:", newRestaurant);
    return NextResponse.json({ result: newRestaurant });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("Internal Server Error");
  }
}

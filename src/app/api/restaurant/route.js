import { connectDB } from "@/app/lib/db";
import { restaurantSchema } from "@/models/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(connectDB);
    console.log("Connected to MongoDB");

    const data = await restaurantSchema.find();
    console.log("Fetched restaurant data:", data);

    return NextResponse.json({ result: data });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("Internal Server Error");
  }
}

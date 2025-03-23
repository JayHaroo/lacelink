import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Shoe from "@/models/shoe"; // Import the Mongoose model

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export async function POST(req) {
  await connectDB();

  try {
    const { image, name, brand, description } = await req.json();

    // Validate required fields
    if (!image || !name || !brand || !description) {
      return NextResponse.json({ message: "All fields are required!" }, { status: 400 });
    }

    // Create a new shoe entry using the Mongoose model
    const newShoe = new Shoe({ image, name, brand, description });
    await newShoe.save();

    return NextResponse.json({ message: "Shoe added successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error saving shoe:", error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}

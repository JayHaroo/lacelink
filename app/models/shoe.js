import mongoose from "mongoose";

const shoeSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
});

const Shoe = mongoose.models.Shoe || mongoose.model("Shoe", shoeSchema);
export default Shoe;

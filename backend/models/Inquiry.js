import mongoose from "mongoose";

const inquirySchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  visitedAt: { type: Date, default: Date.now } // tracks when the form was submitted
});

export default mongoose.model("Inquiry", inquirySchema);

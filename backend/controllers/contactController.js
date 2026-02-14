import Inquiry from "../models/Inquiry.js";

export const submitInquiry = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const inquiry = new Inquiry({ name, email, message });
    await inquiry.save();

    res.status(201).json({ message: "Thank you! Your inquiry has been submitted." });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
};

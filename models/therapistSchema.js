import mongoose from "mongoose";

const therapistschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    languages: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const therapistmodel = mongoose.model("therapist", therapistschema);
export default therapistmodel;

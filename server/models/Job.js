import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    company: { type: String, required: true, maxlength: 15 },
    position: { type: String, required: true, maxlength: 15 },
    wages: { type: Number, required: true },
    description: { type: String, required: true, maxlength: 25 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
export default Job;

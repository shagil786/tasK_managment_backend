import mongoose from "./index.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    datecreated: Date,
    dateUpdated: Date,
  },
  {
    collection: "users",
    versionKey: false,
    timestamps: true,
  },
);
const userModel = mongoose.model("users", userSchema);

export default userModel;

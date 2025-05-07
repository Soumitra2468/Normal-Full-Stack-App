import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      //   select: false, // Exclude password from queries by default
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods = {
  // Compare password with hashed password
  comparePassword: async function (password) {
    return await bcrypt.compare(password, this.password);
  },
  // Generate JWT token
  generateAuthToken: function () {
    return jwt.sign(
      { id: this._id, emali: this.emali },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
  },
};

export const User = mongoose.model("User", userSchema);

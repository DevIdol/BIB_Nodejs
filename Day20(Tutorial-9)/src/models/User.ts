import { Schema, SchemaType, model } from "mongoose";
import bcrypt from "bcrypt";
import { CreateUser } from "../interface/UserInterface";

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const passwordHash = await bcrypt.hash(this.password, salt);
  this.password = passwordHash;
  next();
});

UserSchema.methods.isValidPassword = async function (password: any) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

export default model<CreateUser>("user", UserSchema);

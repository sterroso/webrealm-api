import { Schema, model } from "mongoose";
import MongooseDelete from "mongoose-delete";
import MongoosePaginate from "mongoose-paginate-v2";

import USER_GENDERS, { DEFAULT_USER_GENDER } from "../../config/constants/UserGenders.js";

const USER_GENDERS_ENUM = Object.values(USER_GENDERS);

export const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 3
    },
    firstName: {
      type: String,
      required: true,
      minLength: 3
    },
    middleName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 3
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: USER_GENDERS_ENUM,
      required: false,
      default: DEFAULT_USER_GENDER
    },
    dateOfBirth: {
      type: Date,
      required: false
    },
    role: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Role"
    }
  },
  {
    timestamps: true
  }
);

userSchema.plugin(MongoosePaginate);

userSchema.plugin(
  MongooseDelete,
  {
    indexFields: ["deleted", "deletedAt"],
    overrideMethods: "all"
  }
);

const User = model("User", userSchema);

export default User;
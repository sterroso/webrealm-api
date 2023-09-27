import { Schema, model } from "mongoose";
import MongooseDelete from "mongoose-delete";
import MongoosePaginate from "mongoose-paginate-v2";

export const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minLength: 3
    },
    permissions: [{ type: String, minLength: 3 }],
    isBuiltin: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

roleSchema.plugin(MongoosePaginate);

roleSchema.plugin(
  MongooseDelete,
  {
    indexFields: ["deleted", "deletedAt"],
    overrideMethods: "all"
  }
);

const Role = model("Role", roleSchema);

export default Role;
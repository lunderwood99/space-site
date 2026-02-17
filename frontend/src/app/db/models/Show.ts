import { Document, Schema, model, Model } from "mongoose";

export interface IShow extends Document {
  venue: string;
  location: string;
  date: number;
  link: string;
}

const showSchema: Schema = new Schema({
  venue: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

let Show: Model<IShow, {}, {}, {}>;

try {
  Show = model<IShow>("Show");
} catch (e) {
  Show = model<IShow>("Show", showSchema);
}

export default Show;

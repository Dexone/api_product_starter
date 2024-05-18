import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: String,
  power: String,
  kuzov: String,
  transmission: String,
  engine: String,
  color: String,
  price: Number,
  image: Object,
});

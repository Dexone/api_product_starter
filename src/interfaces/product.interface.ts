import { Document } from 'mongoose';

export interface Product extends Document {
  readonly brand: string;
  readonly car_model: string;
  readonly year: string;
  readonly power: string;
  readonly kuzov: string;
  readonly transmission: string;
  readonly engine: string;
  readonly color: string;
  readonly price: number;
  readonly image: string;
}

import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  aadhar: string;
  role: 'farmer' | 'contractor' | 'officer';
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  location: {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
  };
}
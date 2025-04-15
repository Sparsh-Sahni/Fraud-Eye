import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  cardNumber: { type: String },
  cardExpiry: { type: Date },
});

export default mongoose.model('UserProfile', userProfileSchema);  // This is the model for profile information

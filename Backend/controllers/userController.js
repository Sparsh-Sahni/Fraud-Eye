import User from '../models/userProfile.js';

export const submitUserForm = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user', error });
  }
};


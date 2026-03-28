const User = require('../models/UserModel');
const { generateToken } = require('../services/authService');
const { success, error } = require('../utils/apiResponse');

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json(error('User already exists'));

    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);
    res.status(201).json(success('Registration successful', {
      user: { id: user._id, name: user.name, email: user.email },
      token
    }));
  } catch (err) { next(err); }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json(error('Invalid email or password'));
    }
    const token = generateToken(user._id);
    res.json(success('Login successful', {
      user: { id: user._id, name: user.name, email: user.email },
      token
    }));
  } catch (err) { next(err); }
};

exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json(error('User not found'));
    res.json(success('User fetched', { id: user._id, name: user.name, email: user.email }));
  } catch (err) { next(err); }
};

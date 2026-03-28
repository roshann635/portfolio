const { verifyToken } = require('../services/authService');
const User = require('../models/UserModel');
const { error } = require('../utils/apiResponse');

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return res.status(401).json(error('Not authorized, no token'));
    }
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json(error('Not authorized, user not found'));
    }
    req.user = { id: user._id, name: user.name, email: user.email };
    next();
  } catch (err) {
    return res.status(401).json(error('Not authorized, token failed'));
  }
};

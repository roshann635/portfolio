exports.success = (message, data = null) => ({
  success: true,
  message,
  data
});

exports.error = (message, errors = null) => ({
  success: false,
  message,
  errors
});

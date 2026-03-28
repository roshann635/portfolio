const path = require('path');
const dotenv = require('dotenv');

const loadEnv = () => {
  dotenv.config({ path: path.join(__dirname, '..', '.env') });
};

module.exports = { loadEnv };

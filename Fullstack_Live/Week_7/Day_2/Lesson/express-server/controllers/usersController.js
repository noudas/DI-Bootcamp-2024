const {users} = require('../config/data.js');

const getAllUsers = (req, res) => {
    res.json(users);
  }

  module.exports = {
    getAllUsers
  }
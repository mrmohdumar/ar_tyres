const UserModel = require("../models/userModel");

const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);

  console.log(user, 'user ---- ----');
  console.log(newUser, ' ----- ----- newUser');

  try {

    await newUser.save();
    res.status(201).json({
      message: "User created successfully!",
      result: newUser,
    });
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }
};



module.exports = {
  createUser,
};
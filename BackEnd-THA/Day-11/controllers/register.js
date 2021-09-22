const User = require("../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email, password, fullName } = req.body;
  try {
    const alreadyEmail = await User.findOne({ where: { email } });
    if (alreadyEmail) {
      res.status(401).send("Email already exists");
    }
    let saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({
      email: email.toLowerCase(),
      password: hash,
      fullName: fullName,
    });
    const savedUser = await newUser.save();
    return res.status(201).send({ "User Registered": savedUser });
  } catch (err) {
    console.error(err);
    return res.status(500).send("User Registeration failed");
  }
};

module.exports = register;

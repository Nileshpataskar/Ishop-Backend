const User_db = require("../model/user_structure");

const registerUser = async (req, res) => {
  try {
    const { Email, Name } = req.body;
    console.log(Email, Name);
    const existingUser = await User_db.findOne({ Email: Email });

    console.log(existingUser);
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    // Create a new user document
    const newUser = new User_db({ Email, Name });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  registerUser,
};

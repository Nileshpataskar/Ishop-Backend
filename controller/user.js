const User_db = require("../model/user_structure");

const registerUser = async (req, res) => {
  try {
    const { Email, Name } = req.body;

    const existingUser = await User_db.findOne({ Email: Email });

    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    // Create a new user document (using atomic operation)
    const newUser = new User_db({ Email, Name });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.Email) {
      return res.status(400).json({ message: "User with this email already exists" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  registerUser,
};

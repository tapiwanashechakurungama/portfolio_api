import bcryptjs from "bcryptjs";
import UserModel from "./../models/userModel.js";
import express from "express";

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json("The user with the same email already exists.");
    } else {
      const hashedPassword = await bcryptjs.hash(password, 10);
      const createUser = await UserModel.create({
        username,
        email,
        password: hashedPassword,
      });
      return res.status(201).json(createUser);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    // Find user by email
    const foundUser = await UserModel.findOne({ email });

    if (foundUser) {
      // Compare passwords
      const passwordMatch = await bcryptjs.compare(
        password,
        foundUser.password
      );

      if (passwordMatch) {
        return res.status(200).json("You logged in successfully.");
      } else {
        return res.status(400).json("Incorrect password.");
      }
    } else {
      return res.status(404).json("User not found.");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const allUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteUser = await UserModel.findByIdAndDelete(id);
    if (deleteUser) {
      res.status(200).json("User successfully deleted");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
export { registerUser, loginUser, allUsers, updateUserById, deleteUserById };

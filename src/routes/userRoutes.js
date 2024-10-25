import express from "express";
import {
  allUsers,
  deleteUserById,
  loginUser,
  registerUser,
  updateUserById,
} from "../controllers/userController.js";

const router = express.Router();

//register router

router.post("/register", registerUser);

//login router

router.post("/login", loginUser);

router.get("/all", allUsers);

//update a specific user by id

router.put("/:id", updateUserById);

//delete a specific user by id

router.delete("/:id", deleteUserById);
export default router;

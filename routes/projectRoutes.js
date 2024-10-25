import express from "express";
import {
  allProjects,
  createProject,
} from "../controllers/projectControllers.js";

const router = express.Router();

router.post("/create", createProject);
router.get("/all", allProjects);

export default router;

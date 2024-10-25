import ProjectModel from "../models/projectsModel.js";

const createProject = async (req, res) => {
  try {
    const { name, description, image, demoLink, githubLink } = req.body;
    if (!name || !description || !image || !demoLink || !githubLink) {
      return res.status(400).json("All fields are required");
    }

    const existingProject = await ProjectModel.findOne({ name, demoLink });
    if (existingProject) {
      return res.status(400).json("The project already exists");
    }

    const createProjectOne = await ProjectModel.create(req.body);
    if (createProjectOne) {
      return res.status(201).json(createProjectOne);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const allProjects = async (req, res) => {
  try {
    const Projects = await ProjectModel.find({});
    if (Projects) {
      return res.status(200).json(Projects);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export { createProject, allProjects };

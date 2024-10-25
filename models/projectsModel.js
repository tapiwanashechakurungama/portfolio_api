import mongoose from "mongoose"


const projectSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  demoLink:{
    type:String,
    required:true
  },
  githubLink:{
    type:String,
    required:true
  },

},{timestamps:true})

const ProjectModel = new mongoose.model("Project", projectSchema)

export default ProjectModel
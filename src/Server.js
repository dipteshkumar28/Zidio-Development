const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const teamProfilesConnection = mongoose.createConnection(
  "mongodb://localhost:27017/teamProfiles",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const TeamMemberSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Expertise: { type: String, required: true },
  Image: { type: String },
  Linkedin: { type: String },
});

const TeamMember = teamProfilesConnection.model("TeamMember", TeamMemberSchema);

app.post("/api/teammember", async (req, res, send) => {
  const newMember = new TeamMember(req.body);
  try {
    await newMember.save();
    res.status(201).send(newMember);
  } catch (err) {
    res.status(404).send("User not saved");
  }
});

// API to get all team members
app.get("/api/teammember", async (req, res, send) => {
  const members = await TeamMember.find();
  res.send(members);
});

const jobListingsConnection = mongoose.createConnection(
  "mongodb://localhost:27017/jobListings",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: String, required: true },
  type: {
    type: String,
    enum: ["Full-time", "Part-time", "Internship"],
    required: true,
  },
  applicationLink: { type: String, required: true },
});

const Job = jobListingsConnection.model("Job", jobSchema);

app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/jobs", async (req, res) => {
  const job = new Job({
    title: req.body.title,
    description: req.body.description,
    requirements: req.body.requirements,
    type: req.body.type,
    applicationLink: req.body.applicationLink,
  });

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

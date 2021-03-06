const StudentController = require("./controllers/StudentController");
const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "Visual Thiking Api welcome!" });
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});
app.get("/v1/students", (req, res) => {
    console.log(`Visual Thinking Api GET getAllStudents ${new Date()}`);
    res
        .status(200)
        .json(StudentController.getAllStudents());
});
app.get("/v1/students/certificateds", (req, res) => {
  console.log(`Visual Thinking Api GET getStudentsHaveCertification ${new Date()}`);
  res
      .status(200)
      .json(StudentController.getStudentsHaveCertification());
});
app.get("/v1/students/creditsover500", (req, res) => {
  console.log(`Visual Thinking Api GET getStudentsHaveCreditsOver500 ${new Date()}`);
  res
      .status(200)
      .json(StudentController.getStudentsHaveCreditsOver500());
});
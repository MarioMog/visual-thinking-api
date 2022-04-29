const StudentController = require("./controllers/StudentController");
const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "Visual Thiking Api welcome!" });
});

app.listen(port, () => {
    console.log(`Visual Thiking API in localhost:${port}`);
});
app.get("/v1/students", (req, res) => {
    console.log(`Visual Thiking Api GET getAllStudents ${new Date()}`);
    res
        .status(200)
        .json(StudentController.getAllStudents());
});
app.get("/v1/students/certificateds", (req, res) => {
  console.log(`Visual Thiking Api GET getStudents ${new Date()}`);
  res
      .status(200)
      .json(StudentController.getStudentsHaveCertification());
});
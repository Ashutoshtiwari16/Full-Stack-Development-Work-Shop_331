
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

let students = [];
let nextId = 1;

// Home route
app.get("/", (req, res) => {
    res.send("Student Management Backend is running!");
});
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Get all students
app.get("/api/students", (req, res) => {
    res.json({
        success: true,
        students: students
    });
});

// Add a student
app.post("/api/students", (req, res) => {
    const { name, email, course, age } = req.body;

    if (!name || !email || !course || age === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name, email, course and age are required"
        });
    }

    const student = {
        id: nextId++,
        name: name,
        email: email,
        course: course,
        age: age
    };

    students.push(student);

    res.status(201).json({
        success: true,
        message: "Student added successfully",
        student: student
    });
});

// Get student by ID
app.get("/api/students/:id", (req, res) => {
    const student = students.find(
        (s) => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.json({
        success: true,
        student: student
    });
});

// Update student
app.put("/api/students/:id", (req, res) => {
    const student = students.find(
        (s) => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const { name, email, course, age } = req.body;

    if (name !== undefined) student.name = name;
    if (email !== undefined) student.email = email;
    if (course !== undefined) student.course = course;
    if (age !== undefined) student.age = age;

    res.json({
        success: true,
        message: "Student updated successfully",
        student: student
    });
});

// Delete student
app.delete("/api/students/:id", (req, res) => {
    const index = students.findIndex(
        (s) => s.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        success: true,
        message: "Student deleted successfully"
    });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

import e from "express";

import courseRoutes from "./course.js";
import profileRoutes from "./profile.js";
import scheduleRoutes from "./schedule.js";
import mentorRoutes from "./mentorship.js";

import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = e();

app.use(e.json());
app.use(cors());

app.use("/courses", courseRoutes);
app.use("/profile", profileRoutes);
app.use("/schedule", scheduleRoutes);
app.use("/mentors", mentorRoutes);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Welcome to the server");
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});

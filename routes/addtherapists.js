import express from "express";
import verifyToken from "../middlewares/authentication.js";
import { addTherapist } from "../controllers/therapist.controller.js";
const router = express.Router();

router.post("/add-therapist", verifyToken, addTherapist);
export default router;

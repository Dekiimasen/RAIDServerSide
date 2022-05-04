import express from "express";
import { getUserInputs, createUserInput } from "../controllers/UserInput.js";
import UserInput from "../models/UserInput.js";
const router = express.Router();

router.get('/', getUserInputs);
router.post('/', createUserInput);

export default router;
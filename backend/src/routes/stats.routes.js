import express from "express";
import { isAdmin, isLoggedIn } from "../middlewares/auth.middleware.js";
import { getStatics } from "../controllers/stats.controller.js";

const router = express.Router();

// GET /api/users
router.get("/", isLoggedIn, isAdmin, getStatics);
export default router;
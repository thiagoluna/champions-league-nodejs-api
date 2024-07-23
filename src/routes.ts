import { Router } from  "express";
import * as playerController from "./controllers/playerController";

const router = Router();

router.get("/players", playerController.getPlayer);

export default router;
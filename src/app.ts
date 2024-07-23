import express from "express";
import router from "./routes";
import { getPlayer } from "./controllers/playerController";

function createApp() {
    const app = express();

    app.use(express.json());
    app.get("/api", getPlayer);

    return app;
}

export default createApp();

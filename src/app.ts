import express, { Request, Response } from "express";
//import router from "./routes";
//import { getPlayer } from "./controllers/playerController";

function createApp() {
    const app = express();

    app.use(express.json());

    // app.get("/", (req, res) => {
    //     res.status(200).json({ message: "Hello World" });
    // });

    return app;
}

export default createApp();

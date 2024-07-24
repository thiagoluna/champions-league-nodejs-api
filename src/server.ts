import express, { Request, Response } from "express";
import router from "./routes";
import {getPlayer} from "./controllers/playerController";

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
    console.log(`Server is running at ${port} port`);
});

import { Request, Response } from "express";
import * as playerService from "../services/playerService";
import {ok} from "../utils/httpHelper";

export const getPlayer = async (req: Request, res: Response) => {
    const data = await playerService.getPlayerData();

    res.status(data.statusCode).json(data.body);
}

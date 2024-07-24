import { Request, Response } from "express";
import * as playerService from "../services/playerService";

export const getPlayer = async (req: Request, res: Response) => {
    const data = await playerService.getPlayerData();

    res.status(data.statusCode).json(data.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const data = await playerService.getPlayerById(id);

    res.status(data.statusCode).json(data.body);
};
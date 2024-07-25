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

export const storePlayer = async (req: Request, res: Response) => {
    const playerData = req.body;
    const data = await playerService.storePlayer(playerData);

    res.status(data.statusCode).json(data.body);
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const data = await playerService.deletePlayer(id);

    res.status(data.statusCode).json(data.body);
}
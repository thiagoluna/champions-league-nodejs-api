import { Request, Response } from "express";

export const getPlayer = (req: Request, res: Response) => {
    res.json({ message: "Hello World" }).status(200);
};

import {noContent, ok} from "../utils/httpHelper";
import * as playerRepository from "../repositories/playerRepository";

export const getPlayerData = async () => {
    const data = await playerRepository.findAll();

    if (data) return await ok(data);

    if (!data) return await noContent();
}
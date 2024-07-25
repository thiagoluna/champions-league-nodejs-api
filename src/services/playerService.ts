import * as HttpResponse from "../utils/httpHelper";
import * as playerRepository from "../repositories/playerRepository";
import {PlayerModel} from "../models/playerModel";

export const getPlayerData = async () => {
    const data = await playerRepository.findAll();

    if (data) return await HttpResponse.ok(data);

    if (!data) return await HttpResponse.noContent();
}

export const getPlayerById = async (id: number) => {
    const data = await playerRepository.findPlayerById(id);

    if (data) return await HttpResponse.ok(data);

    if (!data) return await HttpResponse.noContent();
}

export const storePlayer = async (playerData: PlayerModel) => {
    if (Object.keys(playerData).length === 0) return HttpResponse.badRequest();

    await playerRepository.storePlayer(playerData);

    return await HttpResponse.created();
}

export const deletePlayer = async (id: number) => {
    const result = await playerRepository.deletePlayer(id);

    return result ? await HttpResponse.ok({ message: "data deleted" }) : await HttpResponse.notFound();
}
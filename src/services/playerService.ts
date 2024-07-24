import * as HttpResponse from "../utils/httpHelper";
import * as playerRepository from "../repositories/playerRepository";

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
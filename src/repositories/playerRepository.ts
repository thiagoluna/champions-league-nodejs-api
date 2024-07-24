import {PlayerModel} from "../models/playerModel";

const database: PlayerModel[] = [
    { id:1, name: "Messi"},
    { id:2, name: "CR7"},
];

export const findAll = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id );
};
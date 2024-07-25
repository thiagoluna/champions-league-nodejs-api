import {PlayerModel} from "../models/playerModel";

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Rodrygo",
        club: "Real Madrid",
        nationality: "Brazilian",
        position: "Attacking",
        statistics: {
            Overall: 88,
            Pace: 78,
            Shooting: 76,
            Passing: 89,
            Dribbling: 88,
            Defending: 80,
            Physical: 82
        },
    },
    {
        id: 2,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "French",
        position: "Attacking",
        statistics: {
            Overall: 91,
            Pace: 96,
            Shooting: 86,
            Passing: 79,
            Dribbling: 92,
            Defending: 36,
            Physical: 76
        },
    },
    {
        id: 3,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentinian",
        position: "Attacking",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 92,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        },
    },
    {
        id: 4,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgian",
        position: "Midfield",
        statistics: {
            Overall: 91,
            Pace: 76,
            Shooting: 86,
            Passing: 93,
            Dribbling: 88,
            Defending: 64,
            Physical: 78
        },
    },
    {
        id: 5,
        name: "Robert Lewandowski",
        club: "Barcelona",
        nationality: "Polish",
        position: "Attacking",
        statistics: {
            Overall: 92,
            Pace: 78,
            Shooting: 92,
            Passing: 79,
            Dribbling: 86,
            Defending: 44,
            Physical: 82
        },
    },
    {
        id: 6,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Dutch",
        position: "Defending",
        statistics: {
            Overall: 89,
            Pace: 74,
            Shooting: 60,
            Passing: 71,
            Dribbling: 70,
            Defending: 91,
            Physical: 86
        },
    },
    {
        id: 7,
        name: "Cristiano Ronaldo",
        club: "Manchester United",
        nationality: "Portuguese",
        position: "Attacking",
        statistics: {
            Overall: 91,
            Pace: 87,
            Shooting: 93,
            Passing: 82,
            Dribbling: 88,
            Defending: 35,
            Physical: 77
        },
    },
    {
        id: 8,
        name: "N'Golo Kanté",
        club: "Chelsea",
        nationality: "French",
        position: "Midfield",
        statistics: {
            Overall: 90,
            Pace: 78,
            Shooting: 66,
            Passing: 75,
            Dribbling: 82,
            Defending: 87,
            Physical: 82
        },
    },
    {
        id: 9,
        name: "Luka Modrić",
        club: "Real Madrid",
        nationality: "Croatian",
        position: "Midfield",
        statistics: {
            Overall: 87,
            Pace: 74,
            Shooting: 76,
            Passing: 89,
            Dribbling: 89,
            Defending: 70,
            Physical: 66
        },
    },
    {
        id: 10,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egyptian",
        position: "Attacking",
        statistics: {
            Overall: 90,
            Pace: 93,
            Shooting: 86,
            Passing: 81,
            Dribbling: 90,
            Defending: 45,
            Physical: 75
        }
    }
];


export const findAll = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id );
};

export const storePlayer = async (playerData: PlayerModel) => {
    database.push(playerData);
}

export const deletePlayer = async (id: number): Promise<boolean> => {
    const index = database.findIndex((player) => player.id === id );
    if (index !== -1) {
        database.splice(index,1);

        return true;
    }

    return false;
};
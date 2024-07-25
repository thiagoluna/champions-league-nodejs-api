import {HttpResponse} from "../interfaces/httpResponseInterface";

export const ok = async (data:any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data,
    }
}

export const created = async (): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: { message: "successful"},
    }
}

export const noContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null,
    }
}

export const badRequest = async (): Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: { message: "Error to save data"},
    }
}

export const notFound = async (): Promise<HttpResponse> => {
    return {
        statusCode: 404,
        body: { message: "Not Found"},
    }
}
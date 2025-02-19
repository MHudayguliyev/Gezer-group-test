import { Pagination } from "@app/types";
import { api } from "../services/api_helper";
import Character from "../QueryReturnTypes/Character";
import { getQueryParams } from "@app/utils/helpers";

export const GetCharacters = async (params: {
    page?: number
    name?: string
    status?: string 
    species?: string
    type?: string 
    gender?: string
}): Promise<Pagination<Character[]>> => {
    const url = getQueryParams(params, "/character");
    return api.get<Pagination<Character[]>>({ url });
}
export const GetCharacter = async (id: number): Promise<Character> => {
    return api.get<Character>({ url: `/character${id}` });
}
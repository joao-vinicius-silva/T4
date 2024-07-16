import axios from "axios";
import { contact } from "../../App";

const api = axios.create({
    baseURL: "https://localhost:7159/api/Contact",
})

export const getContats = async () => {
    const response = await api.get<contact[]>("");
    return response.data;
}

export const createContat = async (cont : contact) => {
    const response = await api.post<contact>("", cont);
}

export const updateContat = async (cont: contact) => {
    const response = await api.put<contact>("", cont);
}

export const delContact = async (id: string) => {
    const response = await api.delete<contact>(`/${id}`);
}
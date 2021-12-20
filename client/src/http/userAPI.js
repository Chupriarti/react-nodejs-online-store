import { $authHost, $host } from "./inde";

export const registration = async (email, password) => {
    const response = await $host.post("api/user/registration", {email, password, role: "ADMIN"});
    return response;
}

export const login = async (email, password) => {
    const response = await $host.post("api/user/login", {email, password});
    return response;
}
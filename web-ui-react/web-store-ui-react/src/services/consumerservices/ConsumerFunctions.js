import httpClient from "../httpclientmain/httpmain";

export const login = (user)=> {
    return httpClient.post(`/consumer/login`, user, {});
}

export const register = (user)=> {
    return httpClient.post(`/consumer/register`, user, {});
}
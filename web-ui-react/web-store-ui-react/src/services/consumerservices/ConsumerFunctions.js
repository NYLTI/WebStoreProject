import httpClient from "../httpclientmain/httpmain";

export const login = (user)=> {
    return httpClient.post(`/consumer/login`, user, {});
}

export const initialRegister = (user)=> {
    return httpClient.post(`/consumer/initialregister`, user, {});
}

export const completeRegister = (user)=> {
    return httpClient.put(`/consumer/completeregistration`, user, {});
}
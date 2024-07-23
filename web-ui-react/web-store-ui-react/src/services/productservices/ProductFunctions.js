import httpClient from "../httpclientmain/httpmain";

export const getAllProducts = ()=> {
    return httpClient.get(`/product/all`);
}
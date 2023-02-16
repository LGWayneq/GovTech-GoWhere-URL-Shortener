import axios from "axios";

const BASE_API_URL = "http://localhost:3001/"
const BASE_CLIENT_URL = "localhost:3000/"
const LINKS_CONTROLLER = "links/"
const CREATE_LINK_ENDPOINT = "addlink/"
const GET_LINK_ENDPOINT = "redirect/"

const postUrl = async (fullUrl) => {
    const res = await axios.post(
        BASE_API_URL + LINKS_CONTROLLER + CREATE_LINK_ENDPOINT, 
        {
            "fullUrl": fullUrl
        }
    )
    return res;
}

const getUrl = async (shortUrl) => {
    const res = await axios.get(
        BASE_API_URL + LINKS_CONTROLLER + GET_LINK_ENDPOINT + shortUrl
    )
    return res;
}

export { postUrl, getUrl };
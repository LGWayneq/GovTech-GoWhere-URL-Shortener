import axios from "axios";

const BASE_API_URL_DEV = "http://localhost:3001/"
const BASE_API_URL_PROD = "https://url-shortener-server-eta.vercel.app/"
const LINKS_CONTROLLER = "links/"
const CREATE_LINK_ENDPOINT = "addlink/"

const postUrl = async (fullUrl) => {
    const res = await axios.post(
        BASE_API_URL_DEV + LINKS_CONTROLLER + CREATE_LINK_ENDPOINT, 
        {
            "fullUrl": fullUrl
        }
    )
    return res;
}

export { postUrl };
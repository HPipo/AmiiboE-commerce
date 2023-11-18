import axios from "axios";

const searchAmiibo = async () => {
    const response = await axios.get("https://www.amiiboapi.com/api/amiibo/", {
        params: {
            query: "Amiibo"
        }
    })
    return response
}

export default searchAmiibo()
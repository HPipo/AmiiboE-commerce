import axios from "axios";

const searchAmiibo = async (term) => {
    const response = await axios.get("https://www.amiiboapi.com/api/amiibo/", {
        params: {
            query: term
        }
    })
    console.log(response.data.amiibo)
    return response.data.amiibo
    
}

export default searchAmiibo
const FetchHelper = async (query, perPage = 30) =>{
    const API_KEY = process.env.REACT_APP_PEXELS_API_KEY
    const BASE_URL = "https://api.pexels.com/v1/search";

    try {
        const response = await fetch(`${BASE_URL}?query=$${query}&per_page=${perPage}`,{
            headers:{
                Authorization:API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = response.json();
        return data.photo

    } catch (error) {

        console.error("FetchHelper Error:", error);
        throw error;
    }
}

export default FetchHelper
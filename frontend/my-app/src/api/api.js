import axios from "axios";

const BASE_URL = "http://localhost:3001";

class PuppyAPI {
    // static token;

    static async request(endpoint, data = {}, method = "get") { 
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        // const headers = { Authorization: `Bearer ${LedgerApi.token}` };
        const params = (method === "get")
            ? data
            : {};
    
        try {
        return (await axios({ url, method, data, params })).data;
        } catch (err) {
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw Array.isArray(message) ? message : [message];
        }
    }

    static async getPups(){
        let result = await this.request(`puppy`);
        return result 
    }
}

export default PuppyAPI;
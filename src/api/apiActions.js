import axios from "axios";
import {API_URL} from "../constants/constants.js";
import {authString} from "../constants/constants.js";


export const getIds = async (offset, limit) => {
    try {
        const result = await axios({
            method: 'post',
            url: API_URL,
            headers: {'X-Auth': authString},
            data: {
                "action": "get_ids",
                "params": {"offset": offset, "limit": limit}
            }
        });
        if (result.status === 200) {
            return result.data.result;
        } else {
            throw new Error(`Server responded with status code ${result.status}`);
        }
    } catch (error) {
        console.error('An error occurred while fetching product IDs:', error);
    }
};

export const getItems = async (ids) => {
    try {
        const result = await axios({
            method: 'post',
            url: API_URL,
            headers: {'X-Auth': authString},
            data: {
                "action": "get_items",
                "params": {"ids": ids}
            }
        });
        if (result.status === 200) {
            return result.data.result;
        } else {
            throw new Error(`Server responded with status code ${result.status}`);
        }
    } catch (error) {
        console.error('An error occurred while fetching product details:', error);
    }
}

export const getFields = async (field, offset, limit) => {
    try {
        const result = await axios({
            method: 'post',
            url: API_URL,
            headers: {'X-Auth': authString},
            data: {
                "action": "get_fields",
                "params": {field, offset, limit}
            }
        });
        if (result.status === 200) {
            return result.data.result;
        } else {
            throw new Error(`Server responded with status code ${result.status}`);
        }
    } catch (error) {
        console.error('An error occurred while fetching product fields:', error);
    }
};

export const filter = async (field, value) => {
    try {
        value = field === 'price' ? parseInt(value) : value
        const result = await axios({
            method: 'post',
            url: API_URL,
            headers: {'X-Auth': authString},
            data: {
                "action": "filter",
                "params": {[field]: value}
            }
        });
        if (result.status === 200) {
            if (!result.data.result || result.data.result.length === 0) {
                return [];
            }
            return result.data.result;
        } else {
            throw new Error(`Server responded with status code ${result.status}`);
        }
    } catch (error) {
        return [];
    }
}





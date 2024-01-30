import axios from "axios";

const baseURL = process.env.REACT_BACKEND_BASE_URL || 'http://localhost:8080/api/v1/';

const testURL = baseURL + "test";

export const getAll = async () => {
    const response = await axios.get(testURL);
    console.log(response.data);
}

export const getById = async (id) => {
    const response = await axios.get(testURL+'/'+id);
    console.log(response.data);
}

export const create = async (payload) => {
    const response = await axios.post(testURL,payload);
    console.log(response);
}

export const update = async (payload,id) => {
    const response = await axios.put(testURL+"/"+id, payload);
    console.log(response);
}

export const deleteTest = async (id) => {
    const response = await axios.delete(testURL+"/"+id);
    console.log(response.data);
}

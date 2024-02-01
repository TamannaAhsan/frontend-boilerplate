import axios from "axios";

const baseURL = process.env.REACT_BACKEND_BASE_URL || 'http://localhost:8080/api/v1/';

const userURL = baseURL + "users";

export const register = async (payload) => {
    const response = await axios.post(userURL+"/register",payload);
    console.log(response.data);
    if(response.status===200)
        localStorage.setItem("user",JSON.stringify(response.data));
    else
        console.error("Registration failed. Status code: ", response.status);
}

export const login = async (payload) => {
    const response = await axios.post(userURL+"/login",payload);
    console.log(response.data);
    if(response.status===200)
        localStorage.setItem("user",JSON.stringify(response.data));
    else
        console.error("Registration failed. Status code: ", response.status);
}

export const logout = () => {
    localStorage.removeItem("user");
}

export const getLoggedInUser = () => {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
}

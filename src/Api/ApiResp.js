import axios from 'axios';

const ServerURL = 'http://localhost:3002/'; 

const apiClient = axios.create({
    baseURL: ServerURL,
    timeout: 10000, 
});

export const getRequest = async (path, config = {}) => {
    try {
        const response = await apiClient.get(`${ServerURL}${path}`, config);
        return { data: response.data, error: null, status: response.status };
    } catch (error) {
        return { data: null, error: error.response?.data?.error || error.message };
    }
};

export const postRequest = async (path, payload, config = {}) => {
    try {
        const response = await apiClient.post(`${ServerURL}${path}`, payload, config);
        return { data: response.data, error: null, status: response.status };
    } catch (error) {
        return { data: null, error: error.response?.data?.error || error.message };
    }
};

export const putRequest = async (path, payload, config = {}) => {
    try {
        const response = await apiClient.put(`${ServerURL}${path}`, payload, config);
        return { data: response.data, error: null, status: response.status };
    } catch (error) {
        return { data: null, error: error.response?.data?.error || error.message };
    }
};

export const deleteRequest = async (path, config = {}) => {
    try {
        const response = await apiClient.delete(`${ServerURL}${path}`, config);
        return { data: response.data, error: null, status: response.status };
    } catch (error) {
        return { data: null, error: error.response?.data?.error || error.message };
    }
};

export const patchRequest = async (path, payload, config = {}) => {
    try {
        const response = await apiClient.patch(`${ServerURL}${path}`, payload, config);
        return { data: response.data, error: null, status: response.status };
    } catch (error) {
        return { data: null, error: error.response?.data?.error || error.message };
    }
};
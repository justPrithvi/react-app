import axios, { AxiosResponse } from 'axios';
import { Interface } from 'readline';

const API_URL:string = process.env.REACT_APP_API_URL || 'http://localhost:9000' 

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const userSignup = async (url: string, email:string, password: string) => {    
    try {
        const response = await axiosInstance.post(url, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const userLogin = async (url: string, email:string, password: string) => {
    try {
        const response = await axiosInstance.post(url, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
}
  
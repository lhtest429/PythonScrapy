import axios from "axios";

const BASE_URL = "http://localhost:8000/api";
//登录接口
export const Login = async (body): Promise<any> => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, body);
    // Assuming the API response contains the data you need
    return response.data;
  } catch (error) {
    console.error("Error in API request:", error);
    throw error;
  }
};

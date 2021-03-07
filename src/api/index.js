import axios from "axios";
import { API_BASE_URL } from "../constants";

export const shortenUrl = async (veryLongUrl) => {
  return await axios.post(`${API_BASE_URL}/shorten?url=${veryLongUrl}`);
};

export const getLinkInfo = async (linkCode) => {
  return await axios.get(`${API_BASE_URL}/?code=${linkCode}`);
};

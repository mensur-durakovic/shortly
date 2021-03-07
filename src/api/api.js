import axios from "axios";
import { apiBaseUrl } from "../constants";

export const shortenUrl = async (veryLongUrl) => {
  return await axios.post(`${apiBaseUrl}/shorten?url=${veryLongUrl}`);
};

export const getLinkInfo = async (linkCode) => {
  return await axios.get(`${apiBaseUrl}/?code=${linkCode}`);
};

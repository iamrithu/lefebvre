import { BASE_URL } from "@/config/const";
import axios from "axios";
import { cookies } from "next/headers";

const cookieStore = cookies();
const token = cookieStore.get("token");

export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `${token?.value}`,
  },
});

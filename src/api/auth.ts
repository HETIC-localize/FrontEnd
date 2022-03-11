import { RegisterData } from "pages/Register";

const API_URL = process.env.REACT_APP_API_URL

export const registerUser = async(data: RegisterData) => {
    return await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          countries: data.countries,
          company: data.company,
        }),
    });
}

export const loginUser = async(email: string) => {
    return await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
    });
}

export const userAccount = async() => {
  return await fetch(`${API_URL}/profile`, {
    method: "GET",
    headers: {
      "Authorization": "",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
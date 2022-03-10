const API_URL = process.env.REACT_APP_API_URL

const headers =  {
    "Authorization": `${localStorage.getItem('tokenID')}` || '',
    Accept: "application/json",
    "Content-Type": "application/json",
}

export const loadAllTranslations = async() => {
    return await fetch(`${API_URL}/translation`, {
        method: "GET",
        headers,
    });
}

export const loadTranslation = async(ID: string) => {
    return await fetch(`${API_URL}/translation/${ID}`, {
        method: "GET",
        headers: {
          "Authorization": "",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
    });
}

export const createTranslation = async(data: {  }) => {
    return await fetch(`${API_URL}/translation`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
}

export const updateTranslation = async(ID: string, value: string) => {
    return await fetch(`${API_URL}/translation/${ID}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },  
        body: JSON.stringify({
            value
        })
    });
}

export const deleteTranslation = async(ID: string) => {
    return await fetch(`${API_URL}/translation/${ID}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },  
    });
}
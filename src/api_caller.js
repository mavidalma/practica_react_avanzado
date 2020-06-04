import Cookie from 'js-cookie';

const JWT = Cookie.get('anunciaLOL');

const URL = 'http://localhost:3000/api';

export const userRegister = async(username, email, password) => {
    console.log("API CALLER user: ", username );
    console.log("API CALLER password: ", password );
    try {
    const endpoint = `${URL}/user/register`;
    const response = await fetch (endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
            'username': username,
            'email': email,
            'password': password,
        }),
        headers: {
            'content-type': 'application/json'
        },
    });
    
    const data = await response.json();
    const isRegisterOk = data.success;
    isRegisterOk ? window.alert("usuario correctamente creado") : window.alert('error creando usuario');
    return isRegisterOk;
} catch (error) {
    console.log(error);
    throw new Error();
  }
}

export const userLogin = async(email, password) => {
    
    try {
    const endpoint = `${URL}/user/login`;
    const response = await fetch (endpoint, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email': email,
            'password': password,
        }),
        //credentials: 'include',
    });
    
    const data = await response.json();
    const hasLogged = data.success;
    //data has data.succes & data.token
    const token = data.token;
    Cookie.set('anunciaLOL', token);

    return hasLogged;
   
} catch (error) {
    console.log(error);
    throw new Error();
  }
}

export const fetchAds = async(query) => {
    
    try {
    const endpoint = `${URL}/ads?${query}`;
    const response = await fetch (endpoint, {
        method: 'GET',
        //credentials: 'include',
        });
    
    const data = await response.json();
    console.log("data on new API is: ", data)
    return data;

} catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export const fetchSingleAd = async(id) => {
    
    try {
    const endpoint = `${URL}ads/${id}`;

    const response = await fetch (endpoint, {
        method: 'GET',
       //credentials: 'include',
        });
    
    const data = await response.json();
  /*const  const result = data.result;
    return result;*/

    return data.ad;

} catch (error) {
    console.log(error);
    throw new Error();
  }
}

export const getTags = async() => {

    try {
        const endpoint = `${URL}/ads/tags`;

        const response = await fetch (endpoint, {
            method: 'GET',
           // credentials: 'include',
            });
        
        const data = await response.json();
        /*const results = data.results;
        return results;*/
        const tags = data.tags;
        return tags;
    
    } catch (error) {
        console.log(error);
        throw new Error();
    }

}

export const createAdvertisement = async(name, price, description, tags, type, cover) => {
    
    try {
    const endpoint = `${URL}ads/create`;
    const response = await fetch (endpoint, {
        method: 'POST',
        body: JSON.stringify({
            'name': name,
            'price': price,
            'description': description,
            'tags': tags,
            'type': type,
            'cover': cover
        }),
        headers: {
            'content-type': 'application/json',
            "token": JWT
        },
       // credentials: 'include',
    });
    
    const data = await response.json();

    if(data.error === "Error: Not logged in") {throw new Error("Not logged in")}

    const hasposted = data.success;

    console.log(hasposted)
    
    hasposted ? window.alert("ad correctly created") : window.alert('error creating ad, please check the info provided');
    return hasposted;
} catch (error) {
    console.log(error);
    throw new Error();
  }
}

export const editAd = async(id, name, price, description, tags, type, cover) => {
    
    try {
    const endpoint = `${URL}anuncios/${id}`;
    const response = await fetch (endpoint, {
        method: 'PUT',
        body: JSON.stringify({
            'name': name,
            'price': price,
            'description': description,
            'tags': tags,
            'type': type,
            'cover': cover
        }),
        headers: {
            'content-type': 'application/json',
            "token": JWT
        },
      //  credentials: 'include',
    });
    
    const data = await response.json();

    if(data.error === "Error: Not logged in") {throw new Error("Not logged in")};

    const hasChanged = data.success;
    hasChanged ? window.alert("ad correctly updated") : window.alert('edit failed');

    return hasChanged;

} catch (error) {
    console.log(error);
    throw new Error();
  }
}
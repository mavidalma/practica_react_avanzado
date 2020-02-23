const URL = 'http://34.89.93.186:8080/apiv1/';
/*
class apiCaller {

    register = async (username,password) => {
        const endpoint = `${URL}apiv1/register`;
        const response = await fetch (endpoint, {
            method: 'POST',
            body: JSON.stringify({
                'username': username,
                'password': password,
            }),
            headers: {
                'content-type': 'application/json'
            },
        });
        
        console.log(response);

    }

}*/


export const userRegister = async(username, password) => {
    
    try {
    const endpoint = `${URL}register`;
    const response = await fetch (endpoint, {
        method: 'POST',
        body: JSON.stringify({
            'username': username,
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
} catch (err) {
    console.log(err);
    throw new Error;
  }
}


export const userLogin = async(username, password) => {
    
    try {
    const endpoint = `${URL}login`;
    const response = await fetch (endpoint, {
        method: 'POST',
        body: JSON.stringify({
            'username': username,
            'password': password,
        }),
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include',
    });
    
    const data = await response.json();
    const hasLogged = data.success;
    return hasLogged;
    //hasLogged ? window.alert("usuario correctamente logueado") : window.alert('error de login')

} catch (err) {
    console.log(err);
    throw new Error;
  }
}

export const fetchAds = async(query) => {
    
    try {
    const endpoint = `${URL}anuncios?${query}`;
    console.log('endpoint=', endpoint);
    const response = await fetch (endpoint, {
        method: 'GET',
        credentials: 'include',
        });
    
    const data = await response.json();
    const results = data.results;

    return results;

} catch (err) {
    console.log(err);
    throw new Error;
  }
}

export const fetchSingleAd = async(query) => {
    
    try {
    const endpoint = `${URL}anuncios/${query}`;
    console.log('endpoint=', endpoint);
    const response = await fetch (endpoint, {
        method: 'GET',
        credentials: 'include',
        });
    
    const data = await response.json();
    const result = data.result;
    return result;

} catch (err) {
    console.log(err);
    throw new Error;
  }
}

export const getTags = async() => {

    try {
        const endpoint = `${URL}/tags`;

        const response = await fetch (endpoint, {
            method: 'GET',
            credentials: 'include',
            });
        
        const data = await response.json();
        const results = data.results;
        return results;
    
    } catch (err) {
        console.log(err);
        throw new Error;
    }

}

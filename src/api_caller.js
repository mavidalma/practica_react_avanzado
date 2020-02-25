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

<<<<<<< HEAD
export const createAdvertisement = async(name, price, description, tags, type, photo) => {
    
    try {
    const endpoint = `${URL}anuncios`;
    const response = await fetch (endpoint, {
        method: 'POST',
        body: JSON.stringify({
            'name': name,
            'price': price,
            'description': description,
            'tags': tags,
            'type': type,
            'photo': photo
        }),
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include',
    });
    
    const data = await response.json();

    const hasposted = data.success;

    console.log(hasposted)
    
    hasposted ? window.alert("ad correctly created") : window.alert('error creating ad, please check the info provided');
    return hasposted;


=======
export const editAd = async(id, name, price, description, tags, type, photo) => {
    
    try {
    const endpoint = `${URL}/anuncios?id=${id}`;
    const response = await fetch (endpoint, {
        method: 'POST',
        body: JSON.stringify({
            name,
            price,
            description,
            tags,
            type,
            photo
        }),
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include',
        });

    const hasChanged = data.success;
    hasChanged ? window.alert("ad modificado correctamente") : window.alert('error de edit')
    return hasChanged;

} catch (err) {
    console.log(err);
    throw new Error;
  }
}
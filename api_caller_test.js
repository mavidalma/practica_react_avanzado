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


 const userRegister = async(username, password) => {
    
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


 const userLogin = async(username, password) => {
    
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

 const fetchAds = async(query) => {
    
    try {
    const endpoint = `${URL}/anuncios${query ? `?${query}` : ""}`;
    console.log('endpoint=', endpoint);
    const response = await fetch (endpoint, {
        method: 'GET',
        credentials: 'include',
        });
    
    const data = await response.json();
    const results = data.results;
    console.log(results)

    return results;

} catch (err) {
    console.log(err);
    throw new Error;
  }
}

const getTags = async() => {

    try {
        const endpoint = `${URL}tags`;
        console.log('endpoint=', endpoint);
        const response = await fetch (endpoint, {
            method: 'GET',
            credentials: 'include',
            });
        
        const data = await response.json();
        const results = data.results;
        console.log(results)

        return results;
    } catch (err) {
        console.log(err);
        throw new Error;
    }

}

const createAdvertisement = async(name, price, description, tags, type, photo) => {
    
    try {
    const endpoint = `${URL}anuncios`;
    const response = await fetch (endpoint, {
        method: 'POST',
        body: JSON.stringify({
            'name': name,
            'price': price,
            'decription': description,
            'tags': tags,
            'type': type,
            'photo': photo
        }),
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include',
    });

    const hasposted = data.success;

    console.log(hasposted)
    
    hasposted ? window.alert("correctly posted") : window.alert('error posting');

    return hasposted;

    } catch (err) {
    console.log(err);
    throw new Error;
  }
}


const editAd = async(id, name, price, description, tags, type, photo) => {
    
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
            'photo': photo
        }),
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include',
    });
    
    const data = await response.json();
    const hasChanged = data.success;
    hasChanged ? window.alert("ad correctly updated") : window.alert('edit failed')
    return hasChanged;

} catch (err) {
    console.log(err);
    throw new Error;
  }
}


const showAds = async() => {

    await userLogin("react3", "react3");
    await fetchAds("price=1-600&venta=true");
    await getTags()
    await editAd('5e54fb183976de16b4d343e4',"name changed", 45, "changing the description", ['work'], "sell", "http://www.pics.com" )

}


showAds();

const URL = 'http://34.89.93.186:8080/';
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
    
    const data = await response.json();
    const isRegisterOk = data.success;
    isRegisterOk ? window.alert("usuario correctamente creado") : window.alert('error creando usuario')
} catch (err) {
    console.log(err);
    throw error;
  }
}


const userLogin = async(username, password) => {
    
    try {
    const endpoint = `${URL}apiv1/login`;
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
    console.log(data)
    const hasLogged = data.success;
    //hasLogged ? window.alert("usuario correctamente logueado") : window.alert('error de login')

} catch (err) {
    console.log(err);
    throw error;
  }
}

const fetchAnuncios = async(query) => {
    
    try {
    const endpoint = `${URL}apiv1/anuncios?${query}`;
    const response = await fetch (endpoint, {
        method: 'GET',
    });
    
    const data = await response.json();
    console.log(data)

} catch (err) {
    console.log(err);
    throw error;
  }
}


//userRegister("test8", "pass2");

const showAds = async() => {
    await userLogin("test8", "pass2");
    await fetchAnuncios();
}
/*
userLogin("test8", "pass2");

fetchAnuncios();*/

showAds();

const api_key = 'ioSxzr9ddsSbjVxWX890zuChICwr2xGurDtH43G_JOA';         
const secret_key = 'EaeVPkFLlsmnNzih4bHLQglgG2SwVzFvPAnKpCWjKUg';       
const n='12';


//Modale

const modale=document.querySelector('#modale');
modale.addEventListener('click', VediAlbum);

function Modale(event)
{
    modale.classList.remove('hidden');
    const selected_photo=document.createElement('img');
    modale.style.top = window.pageYOffset + 'px';
    selected_photo.id='selected';
    selected_photo.src=event.currentTarget.src;
    modale.appendChild(selected_photo);
    document.body.classList.add('no-scroll');
}


function VediAlbum(event)
{
    const m=event.currentTarget;
    m.classList.add('hidden');
    m.innerHTML='';
    document.body.classList.remove('no-scroll');
}



function ShowImages(json)
{
    console.log('Json ricevuto');
    console.log(json);

    const photo_gallery = document.querySelector('#album-foto');
    photo_gallery.innerHTML='';

    const results=json.results;

    for (result of results)
    {
        console.log(result);

        const immagine=result.urls.regular;
        const photo=document.createElement('img');
        photo.src=immagine;
        photo.addEventListener('click', Modale);

        photo_gallery.appendChild(photo);


    }
}


function onResponse(response)
{
    console.log('Risposta ricevuta');
    return response.json();
}


function search(event)
{
    event.preventDefault();

    const selected_food = document.querySelector('#food').value;
    console.log('Cibo selezionato: ' + selected_food);

    if(selected_food === 'pizza')
    {
        fetch('https://api.unsplash.com/search/photos?page=1&query=pizza&orientation=landscape&client_id=' + api_key + '&per_page=' + n,
        {
            headers:{
                'Authorization': token.token_type + ' ' + token.access_token,
                'Contet-Type': 'application/x-www-form-urlencoded'
            }
        }
        ).then(onResponse).then(ShowImages);
    }

    if(selected_food==='primi_piatti'){
        fetch('https://api.unsplash.com/search/photos?page=1&query=pasta&orientation=landscape&client_id=' + api_key + '&per_page=' + n,
        {
            headers:{
                'Authorization': token.token_type + ' ' + token.access_token,
                'Contet-Type': 'application/x-www-form-urlencoded'
            }
        }
        ).then(onResponse).then(ShowImages);
    }

    if(selected_food==='secondi_piatti_pesce'){
        console.log(token);
        fetch('https://api.unsplash.com/search/photos?page=1&query=fish+dish&orientation=landscape&client_id=' + api_key + '&per_page=' + n,
        {
            headers:{
                'Authorization': 'Bearer lEt9IzJ_409JbNJKiijcD--cp694gFnvfjR2c8hj2d0',
                'Contet-Type': 'application/x-www-form-urlencoded'
            }
        }
        ).then(onResponse).then(ShowImages);
    }

    if(selected_food==='secondi_piatti_carne'){
        fetch('https://api.unsplash.com/search/photos?page=1&query=meat+dish&orientation=landscape&client_id=' + api_key + '&per_page=' + n,
        {
            headers:{
                'Authorization': token.token_type + ' ' + token.access_token,
                'Contet-Type': 'application/x-www-form-urlencoded'
            }
        }
        ).then(onResponse).then(ShowImages);
    }

    if(selected_food==='vegetariani'){
        fetch('https://api.unsplash.com/search/photos?page=1&query=vegetarian&orientation=landscape&client_id=' + api_key + '&per_page=' + n,
        {
            headers:{
                'Authorization': token.token_type + ' ' + token.access_token,
                'Contet-Type': 'application/x-www-form-urlencoded'
            }
        }
        ).then(onResponse).then(ShowImages);
    }
}



function getToken(json)
{
    token=json;
    console.log(json);
}



function onTokenResponse(response)
{
    return response.json();
}



let token;
fetch('https://unsplash.com/oauth/token',
{
    method: 'POST',
    body: 'grant_type=client_credentials&client_id=' + api_key + '&client_secret=' + secret_key,
    headers:
    {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
}
).then(onTokenResponse).then(getToken);


const form = document.querySelector('form');
form.addEventListener('submit',search);
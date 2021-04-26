const api_key='5f17f55eaff4428d9f0363a7c6db6b56';
const api_url='https://api.spoonacular.com/recipes/extract?url=';


const urls=
[   'https://www.ilgiornaledelcibo.it/ricetta/pizza-margherita/&apiKey=' + api_key,
    'https://www.ilgiornaledelcibo.it/ricetta/penne-alla-delizia-di-scampi-e-gamberi/&apiKey=' + api_key,
    'https://www.ilgiornaledelcibo.it/ricetta/calamari-ripieni-in-padella/&apiKey=' + api_key,
    'https://www.ilgiornaledelcibo.it/ricetta/risotto-con-gli-asparagi-selvatici/&apiKey=' + api_key,
    'https://www.ilgiornaledelcibo.it/ricetta/spaghetti-alla-carbonara/&apiKey=' + api_key,
    'https://www.ilgiornaledelcibo.it/ricetta/arrosto-di-vitello/&apiKey=' + api_key
];


function ChiudiRicetta(event)
{
    event.currentTarget.classList.remove('title_clicked');
    const freccia=event.currentTarget.querySelector('.arrows');
    freccia.src='foto_progetto/freccia_su.png'; 

    const ricetta=event.currentTarget.parentNode;
    const content=ricetta.querySelector('.boxes');
    content.classList.remove('boxes');
    content.classList.add('hidden');

    event.currentTarget.removeEventListener('click', ChiudiRicetta);
    event.currentTarget.addEventListener('click', ApriRicetta);
}


function ApriRicetta(event)
{
    event.currentTarget.classList.add('title_clicked');
    const freccia=event.currentTarget.querySelector('.arrows');
    freccia.src='foto_progetto/freccia_giu.png';

    const ricetta=event.currentTarget.parentNode;
    const content=ricetta.querySelector('.hidden');
    content.classList.remove('hidden');
    content.classList.add('boxes');

    event.currentTarget.removeEventListener('click', ApriRicetta);
    event.currentTarget.addEventListener('click', ChiudiRicetta);
}


function onJson(json)
{
    console.log(json);
    
    const page=document.querySelector('#album-ricette');

    const section=document.createElement('section');
    const box_title=document.createElement('div');
    const arrow=document.createElement('img');
    const title=document.createElement('h3');

    const recipe_box=document.createElement('div');
    const preview=document.createElement('div');
    const photo=document.createElement('img');
    const list_of_ingredients=document.createElement('div');
    const procedimento_box=document.createElement('div');

    section.classList.add('ricetta');
    box_title.classList.add('title');
    arrow.classList.add('arrows');
    title.classList.add('recipe-name');

    recipe_box.classList.add('hidden');
    preview.classList.add('preview-recipe');
    photo.classList.add('foto-ricetta');
    list_of_ingredients.classList.add('list');
    procedimento_box.classList.add('procedimento');

    arrow.src='foto_progetto/freccia_su.png';
    title.textContent=json.title;

    photo.src=json.image;

    const ingredienti=json.extendedIngredients;
    for (let i=0; i<ingredienti.length; i++)
    {
        const ingrediente=ingredienti[i].original;
        const ingred=document.createElement('span');
        ingred.classList.add('ingrediente');
        ingred.textContent=i+1+'. '+ingrediente;
        list_of_ingredients.appendChild(ingred);
    }

    const instructions=json.analyzedInstructions[0].steps;
    for (let j=0; j<instructions.length; j++){
        const step=instructions[j].step;
        const s=document.createElement('span');
        s.classList.add('steps');
        s.textContent=j+1+') '+step;
        procedimento_box.appendChild(s);
    }

    page.appendChild(section);
    section.appendChild(box_title);
    box_title.appendChild(arrow);
    box_title.appendChild(title);
    section.appendChild(recipe_box);
    recipe_box.appendChild(preview);
    preview.appendChild(photo);
    preview.appendChild(list_of_ingredients);
    recipe_box.appendChild(procedimento_box);

    const buttons=document.querySelectorAll('.title');
    for(button of buttons)
    {
    button.addEventListener('click', ApriRicetta);
    }
}


function onResponse(response)
{
    return response.json();
}

for(let i=0; i<urls.length; i++)
{
    fetch(api_url + urls[i]).then(onResponse).then(onJson);
}
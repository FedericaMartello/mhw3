//Funzione per creare le section
function CreateSections()
{   
    const a=document.querySelector('article');
    const blocco1=document.createElement('section');    //Carrello
    const blocco2=document.createElement('section');    //Blocco contenuti
    a.appendChild(blocco1);
    a.appendChild(blocco2);
    blocco1.classList.add('hidden_cart');
    blocco2.classList.add('main_block');
}
    
CreateSections();
    
// Funzione per inserire i prodotti nella section
function ShowProducts()
{
    let i=0;
    
    for(product in products)
    {
        let name=products[product].titolo;
        let photo=products[product].immagine;
        let details=products[product].show_more;
        let ingredients=products[product].ingredienti;
        let cart=products[product].carrello;
        
        const mb=document.querySelector('.main_block');
        const contenitore=document.createElement('div');
        mb.appendChild(contenitore);        
        contenitore.classList.add('contenitore_prodotto');
        contenitore.dataset.idprodottoadd=i++;
    
        const foto=document.createElement('img');
        const nome_prodotto=document.createElement('p');
        const ingredienti=document.createElement('p');
        const show_more=document.createElement('span');
        const aggiungi=document.createElement('img');
    
        contenitore.appendChild(foto);
        contenitore.appendChild(nome_prodotto);        
        contenitore.appendChild(ingredienti);    
        contenitore.appendChild(show_more);      
        contenitore.appendChild(aggiungi);
    
        foto.classList.add('foto_prodotto');
        nome_prodotto.classList.add('nome_prodotto');
        ingredienti.classList.add('hidden');
        show_more.classList.add('showmore');
        aggiungi.classList.add('add-to-cart');
    
        foto.src=photo;      
        nome_prodotto.textContent=name;        
        show_more.textContent=details;
        ingredienti.textContent=ingredients;
        aggiungi.src=cart;
            
    }
}

ShowProducts();
    

// Mostra dettagli
    
function ShowIngredients(event)
{
    event.currentTarget.textContent="Mostra Meno";    
    let paragrafo=event.currentTarget.parentNode.querySelector('p.hidden');
    paragrafo.classList.remove('hidden');
    paragrafo.classList.add('ingredienti');
    
    event.currentTarget.removeEventListener("click", ShowIngredients);
    event.currentTarget.addEventListener("click", ShowLess);
    
}
    
const details_button=document.querySelectorAll('.showmore');
for(let det of details_button){
    det.addEventListener("click", ShowIngredients);
}

    
// Nascondi dettagli
    
function ShowLess(event)
{
    event.currentTarget.textContent='Dettagli';
    let paragrafo=event.currentTarget.parentNode.querySelector('p.ingredienti');
    paragrafo.classList.add('hidden');
    paragrafo.classList.remove('ingredienti');
    
    event.currentTarget.removeEventListener("click", ShowLess);
    event.currentTarget.addEventListener("click", ShowIngredients);
}


// barra di ricerca
    
function Cerca(event)
{
    let barra_ricerca = event.currentTarget;
    let testo = barra_ricerca.value.toUpperCase();
    const lista_prodotti = document.querySelectorAll('p.nome_prodotto');
    
    for(parola of lista_prodotti)
    {
        if(parola.textContent.toUpperCase().indexOf(testo) > -1) {
            const contenitore = parola.parentNode;
            contenitore.classList.add('contenitore_prodotto');
        }
        else
        {
            const contenitore = parola.parentNode;
            contenitore.classList.remove('contenitore_prodotto');
            contenitore.classList.add('hidden');
        }
    }
}
    
const text_input = document.querySelector('#ricerca');
text_input.addEventListener('keyup', Cerca);
    
    
// Funzione aggiungi al carrello
let n=0;    
function AddToCart(event)
{
    const clicked_cart = event.currentTarget;
    const product_in_cart = clicked_cart.parentNode;
    
    if(n===0)
    {
        const sez=product_in_cart.parentNode;
        const art=sez.parentNode;
        const carrello=art.parentNode.querySelector('.hidden_cart');
        carrello.classList.remove('hidden_cart');
        carrello.classList.add('carrello');
    }

    const id = product_in_cart.dataset.idprodottoadd;
    const products = document.querySelectorAll(".contenitore_prodotto");

    for(let bought of products)
    {    
        if(bought.dataset.idprodottoadd === id)
        {
            const cart_div = document.createElement('div');
            const blocco_carrello = document.querySelector('.carrello');
            blocco_carrello.appendChild(cart_div);        
            cart_div.classList.add('contenitore_carrello'); 
                

            const foto=document.createElement('img');
            const nome_prodotto=document.createElement('p');
            const rimuovi=document.createElement('img');

            cart_div.appendChild(foto);
            cart_div.appendChild(nome_prodotto);  
            cart_div.appendChild(rimuovi);

            foto.classList.add('foto_prodotto');
            nome_prodotto.classList.add('nome_prodotto');
            rimuovi.classList.add('remove-from-cart');

            foto.src=bought.querySelector('.foto_prodotto').src;
            nome_prodotto.textContent=bought.querySelector('.nome_prodotto').textContent;
            rimuovi.src='foto_progetto/rimuovi.png';

            rimuovi.addEventListener("click", Rimuovi);
            n++;
        }
    }    
}

const carts = document.querySelectorAll('.add-to-cart');
for(let product of carts)
{
    product.addEventListener('click', AddToCart);
}


//Funzione rimuovi
    
function Rimuovi(event)
{
    const selected_product = event.currentTarget.parentNode;
    const carrello=selected_product.parentNode;
    selected_product.remove();
        
    event.currentTarget.removeEventListener("click", Rimuovi);
    n--;
    
    // Nascondi preferiti
    if (n===0)
    {
        carrello.classList.remove('carrello');
        carrello.classList.add('hidden_cart');
    }
}    
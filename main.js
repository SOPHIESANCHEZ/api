
let formsubmit = document.getElementById('formSubmit')
//Je déclare une variable pour renvoyer à mon id form submit
// getElementById()methode renvoyant à un élément représentant l'élément dont la propriété id correspond à la chaîne de caractères spécifiée
let valueInput = document.getElementById('valueInput')
//Je déclare une variable pour renvoyer à mon id valueInput
let city = ""
//je déclare une variable à vide pour ma city
let meteo = []
//
const ApiKey = '80b247d1a5a8531c0f9e26ec5449e946'
//je déclare ma constante ApiKey avec mon mon api
const fetchMeteo = async()=>{
    city = valueInput.value;

 
     //Je spécifie le.value pour demander ce qu'il y a à l'intérieur de mon mon value.input
    const ApiUri = `http://api.weatherstack.com/current?access_key=${ApiKey}&query=${city}`
    meteo = await fetch(ApiUri).then((response) => response.json())
    console.log(meteo.current.temperature);

}
formsubmit.addEventListener('submit', e => {
    
    e.preventDefault();
    city = valueInput.value;
        if (city.length > 2) {
            fetchMeteo();
        } else {
            console.log("trop court");
            result.innerHTML = `<div class="alert alert-danger col-8 mx auto" role="alert">
                Veuillez saisir le nom d'une ville
            </div>`
        }
 
    //indique à l'agent utilisateur que si l'évènement n'est pas réussi, l'action par défaut ne devrait pas être exécutée comme elle l'est normalement.
})
 //attenttion à la syntaxe pour ma constante ApiUri, cette constante doit être placée à cet endroit pour pouvoir être lue par le script
  
    //
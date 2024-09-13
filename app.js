var container = document.getElementById("container")
var Gohan = document.getElementById("BtnGohan")
var Sayayines = document.getElementById("FiltrarSayayines")
var Androides = document.getElementById("filtrarAndroides")

var Mayor = document.getElementById("Mayor")
var Menor = document.getElementById("Menor")
var fem = document.getElementById("Femenino")

var inputbuscar = document.getElementById("inputbuscar")
var Mostrartodo = document.getElementById("Mostrartodo")


Menor.addEventListener("click",acMenor)
Mayor.addEventListener("click",acMayor)
Gohan.addEventListener("click",buscargohan)
Sayayines.addEventListener("click",buscarSaya)
Androides.addEventListener("click",BuscarAndroides)
fem.addEventListener("click",buscarfeme)
Mostrartodo.addEventListener("click",mostrarprinc)



function acMenor(){
    let arrayFiltrarMenor = personajes.filter( item => item.attack <= 20000 )
 
 renderizarPersonaje(arrayFiltrarMenor)
 
 }

function acMayor(){
    let arrayFiltrarMayor = personajes.filter( item => item.attack >= 74000 )
 
 renderizarPersonaje(arrayFiltrarMayor)
 
 }




function buscargohan() {


    let arrayFiltrarGohan = personajes.filter((item) => 
        item.id == "gohan" );
    renderizarPersonaje(arrayFiltrarGohan)
}



function buscarSaya() {
    
    let arrayFiltrarSaya = personajes.filter((item) => 
        item.race == "Saiyan" );
    renderizarPersonaje(arrayFiltrarSaya)
}

function BuscarAndroides() {
    let arrayFiltrarAndroid = personajes.filter((item) => 
        item.race == "Android" );
    renderizarPersonaje(arrayFiltrarAndroid)
}




function buscarfeme() {
    let arrayFiltrarfeme = personajes.filter((item) => 
        item.gender == "Male" );
    renderizarPersonaje(arrayFiltrarfeme)
}


function mostrarprinc(){
    renderizarPersonaje(personajes);
}


inputbuscar.addEventListener('input', () => {
    var entrada = inputbuscar.value
  
    let arrayBuscar = buscarProducto(personajes, entrada)
    if (arrayBuscar.length > 0) {
        renderizarProductos(arrayBuscar)
    } 
  })




function mostrarPersonaje(personaje) {
    return `
      <div class="profile">
            <div class="character-profile">
                <div class="character-head">
                    <h1>${personaje.name}</h1>
                    <h1>${personaje.race}</h1>
                </div>

                <img src=${personaje.img} />
                <div class="character-stats">
                    <div class="character-stats-abilities">
                        <div class="character-stats">
                            <ul>
                                <li>Health: ${personaje.health}</li>
                                <li>Attack: ${personaje.attack}</li>
                                <li>Defense:  ${personaje.defense}</li>
                                <li>KI Restore Speed:  ${personaje.kiRestoreSpeed}</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>`
}

function renderizarPersonaje(array) {

container.innerHTML = "";
array.forEach((item) => {
        container.innerHTML +=  mostrarPersonaje(item)
})

}

renderizarPersonaje()

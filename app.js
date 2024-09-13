var container = document.getElementById("container")
var BtnGohan = document.getElementById("BtnGohan")
var FiltrarSayayines = document.getElementById("FiltrarSayayines")
var filtrarAndroides = document.getElementById("filtrarAndroides")

var Mayor = document.getElementById("Mayor")
var Menor = document.getElementById("Menor")
var Menor = document.getElementById("Menor")
var Femenino = document.getElementById("Femenino")

var inputbuscar = document.getElementById("inputbuscar")


Menor.addEventListener("click",acMenor)
Mayor.addEventListener("click",acMayor)
BtnGohan.addEventListener("click",actionBtnGohan)
FiltrarSayayines.addEventListener("click",actionFiltrarSayayines)
filtrarAndroides.addEventListener("click",actionfiltrarAndroides)
Femenino.addEventListener("click",actionFeme)




function acMenor(){
    let arrayFiltrarMenor = personajes.filter( item => item.attack <= 20000 )
 
 renderizarPersonaje(arrayFiltrarMenor)
 
 }

function acMayor(){
    let arrayFiltrarMayor = personajes.filter( item => item.attack >= 74000 )
 
 renderizarPersonaje(arrayFiltrarMayor)
 
 }




function actionBtnGohan() {

    let arrayFiltrarGohan = personajes.filter(
        item => item.name === "Gohan"
    )
    renderizarPersonaje(arrayFiltrarGohan)
}



function actionFiltrarSayayines() {
    let arrayFiltrarSayayines = personajes.filter(
        item => item.race === "Saiyan"
    )
    renderizarPersonaje(arrayFiltrarSayayines)
}

function actionfiltrarAndroides() {
    let arrayfiltrarAndroides = personajes.filter(
        item => item.race === "Androide"
    )
    renderizarPersonaje(arrayfiltrarAndroides)
}




function actionFeme() {
    let arrayfiltrarFeme = personajes.filter(
        item => item.gender === "Male"
    )
    renderizarPersonaje(arrayfiltrarFeme)
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

function renderizarPersonaje() {


    personajes.forEach(item =>
        container.innerHTML = container.innerHTML + mostrarPersonaje(item)
    )

}

renderizarPersonaje()



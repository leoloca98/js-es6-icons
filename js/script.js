/*

|Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le
icone disponibili come da layout.

|Milestone 2
Coloriamo le icone per tipo

|Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone

*BONUS: Provare ad aggiungere una casella di testo che renda possibile
*filtrare anche per nome dell'icona
!SUPER INCREDIBLE MEGA BONUS: effettuare la ricerca dalla casella di testo
!in "tempo reale", cioè man mano che l'utente digita.

*/
//# FUNCTION SECTION

const displayCards = (array, targetElement) => {
    let iconsTemplate = "";

    array.forEach((icon, index) => {

        const offset = index % 5 === 0 ? "offset-1" : "";

        iconsTemplate += `
        <div class="col-2 ${offset}">
            <div class="card">
                <div class="card-body">
                    <i class="${icon.family} ${icon.prefix}${icon.name} fa-2x"></i>
                    <p>${icon.name.toUpperCase()}</p>
                </div>
            </div>
        </div>
        `;
    });


    targetElement.innerHTML = iconsTemplate;
}

const displayIcons = document.querySelector("#main-section>.container>.row");
displayCards(icons, displayIcons);



//# CODE SECTION






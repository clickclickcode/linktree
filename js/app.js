
//Jeg deklarerer en constant - shareButtons - som er i document (vores html), jeg bruger .querySelectorAll('.tile-share-button')
//for at vælge alle elementer i document der har en class 'tile-share-button'.
const shareButtons = document.querySelectorAll('.tile-share-button, .share-button')

//Jeg bruger console.log() for at få vist at min shareButtons constant rammer 3 elementer i vores browser console.
console.log(shareButtons)

//Jeg laver en asynchronous function kaldet 'copyText()' da jeg vil have den til at kopiere et link
async function copyText(e) {

    //Da jeg ikke ønsker, at vi skal sendes over til linkets side anvender jeg 'e.preventDefault'
    //Jeg forhindrer altså elementets default som er, at navigere over til den linkede side
    e.preventDefault()

    //Jeg deklarerer endnu en constant - link - hvor 'this' refererer til 'document.querySelectorAll('.tile-share-button')
    //.getAttribute('link') henter så indholdet af attributten 'link' i det pågældende element
    const link = this.getAttribute('link')

    //Jeg bruger console.log() for at få vist, at jeg ved et klik på share-knappen rammer en url i browserens console
    console.log(link)

    //Jeg bruger en 'try/catch'-metode, hvor, hvis min ønskede method ikke skyder ordentligt fra vores 'try', så modtager jeg en error besked fra vores 'catch'
    try {

        //Jeg bruger await som returnerer et promise, hvilket er resultatet af vores navigator.clipboard.writeText(link), så snart den har løst forespørgslen
        await navigator.clipboard.writeText(link)

        //Der er tilføjet en alert der giver os en prompt i browseren med teksten "Copied " + *indsæt pågældende link* + " to clipboard" når vores await er klar
        alert("Copied: " + link + " to clipboard")
    } catch(err) {
        console.error(err)
    }
}//Vores funktion ender her.


shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))
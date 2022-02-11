
/*
Il testo("content") dell'elemento html viene letto è impostato come numero finale.
Occorre aggiungere all'elemento un attributo "data-counter-time" che determina la velocità di esecuzione.
*/
document.addEventListener("DOMContentLoaded", function() {
    //Inserire nome della classe su cui effettuare il counter
    var elements = document.querySelectorAll(".toCount")
  
    elements.forEach(function(item) {
      // Aggiunge nuovi attributi alla classe
      item.counterAlreadyFired = false
      item.counterSpeed = item.getAttribute("data-counter-time") / 45
      item.counterTarget = +item.innerText
      item.counterCount = 0
      item.counterStep = item.counterTarget / item.counterSpeed
  
      item.updateCounter = function() {
        item.counterCount = item.counterCount + item.counterStep
        item.innerText = Math.ceil(item.counterCount)
  
        if (item.counterCount < item.counterTarget) {
          setTimeout(item.updateCounter, item.counterSpeed)
        } else {
          item.innerText = item.counterTarget
        }
      }
    })
  
    //Determina se l'elemento è visibile nella pag
    var isElementVisible = function isElementVisible(el) {
      var scroll = window.scrollY || window.pageYOffset
      var boundsTop = el.getBoundingClientRect().top + scroll
      var viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
      }
      var bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
      }
      return (
        (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
        (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
      )
    }
  
    // Funzione effettua i controlli e modifica il testo se visibile
    var handleScroll = function handleScroll() {
      elements.forEach(function(item, id) {
          
        if (true === item.counterAlreadyFired) return
        if (!isElementVisible(item)) return
        item.updateCounter()
        item.counterAlreadyFired = true
      })
     
    }
  
    //Su ogni scroll esegui il controllo
    window.addEventListener("scroll", handleScroll)
  })
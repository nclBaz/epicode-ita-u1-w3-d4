window.onload = () => {
  // Questa funzione viene eseguita quando tutta la pagina ha completato il caricamento

  // Usando questo, non avremo mai il potenziale problema che selezionando un tag, questo non esista ancora (null)
  const listContainer = document.getElementById("list-items")
  listContainer.innerHTML +=
    "<div class='list-item' onclick='aggiungiClasseSelected(event)'>Latte 🥛</div>"
  listContainer.innerHTML +=
    "<div class='list-item' onclick='aggiungiClasseSelected(event)'>Pane 🥖</div>"
}

const aggiungiClasseSelected = event => {
  // Quando un elemento della lista spesa viene cliccato, toggliamo la classe "selected" a quell'elemento
  const elementoCliccato = event.target

  elementoCliccato.classList.toggle("selected")
}

const gestisciKeyUpSuInput = event => {
  console.log("L'utente ha digitato: ", event.key)
  // Se l'utente preme Enter, aggiungiamo un nuovo elemento alla lista della spesa, il testo digitato però non deve essere vuoto

  if (event.key === "Enter") {
    // 1. Verifico che il testo nell'input field non sia vuoto
    const valoreInputField = document.getElementById("list-item-input").value
    if (valoreInputField === "") {
      alert("Non lasciare vuoto il testo")
    } else {
      // 2. Se il testo non è vuoto devo creare un nuovo div (con testo preso da input field e classe list-item)

      // 2.1 Creo un div vuoto
      const newDiv = document.createElement("div")

      // 2.2 Aggiungo una classe al nuovo div
      newDiv.classList.add("list-item")

      // 2.3 Aggiungo del testo al nuovo div
      newDiv.innerText = valoreInputField

      // 2.4 Aggiungo onclick al nuovo div
      newDiv.onclick = aggiungiClasseSelected

      // 3. Devo appendere il nuovo div al div con id "list-items"
      document.getElementById("list-items").appendChild(newDiv)

      // 4. Svuoto il campo di testo
      document.getElementById("list-item-input").value = ""
    }
  }
}

const eliminaSelezionati = e => {
  /*   if (e.key === "Backspace") {
    console.log("CLICKED!") */
  // Devo selezionare tutti gli elementi che hanno la classe selected e poi eliminarli dal DOM

  // 0. Seleziono il padre di tutti i list-item
  const list = document.getElementById("list-items")

  // 1. Uso un selector per ottenere la lista elementi con classe selected
  const elementiSelezionati = document.querySelectorAll(".selected")
  console.log("Elementi selezionati con query selector all: ", elementiSelezionati)

  const elementiSelezionati2 = document.getElementsByClassName("selected")
  console.log("Elementi selezionati con get by classname: ", elementiSelezionati2)

  // 2. Vado a rimuovere gli elementi iterando la lista ottenuta prima
  elementiSelezionati.forEach(element => list.removeChild(element))
  // const arr = Array.from(elementiSelezionati2)
  /*   console.log("Elementi selezionati con query selector all: ", elementiSelezionati)
  console.log("Elementi selezionati con get by classname: ", elementiSelezionati2)
  for (let index = 0; index < elementiSelezionati2.length; index) {
    const element = elementiSelezionati2[index]
    list.removeChild(element)
  } */
  /* } */
}

// window.addEventListener("keydown", eliminaSelezionati)

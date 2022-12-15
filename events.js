window.onload = () => {
  // Questa funzione viene eseguita quando tutta la pagina ha completato il caricamento

  // Usando questo, non avremo mai il potenziale problema che selezionando un tag, questo non esista ancora (null)
  const listContainer = document.getElementById("list-items")
  listContainer.innerHTML += "<div class='list-item'>Latte 🍎</div>"
  listContainer.innerHTML += "<div class='list-item'>Pane 🥖</div>"
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

      // 3. Devo appendere il nuovo div al div con id "list-items"
      document.getElementById("list-items").appendChild(newDiv)

      // 4. Svuoto il campo di testo
      document.getElementById("list-item-input").value = ""
    }
  }
}

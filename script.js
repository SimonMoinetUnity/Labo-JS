let monTableau = [1, 2, 3, 4, 5]

let body = document.querySelector("body")



monTableau.map(e => {
    let paragraphe = document.createElement("p")
    paragraphe.textContent = e
    body.appendChild(paragraphe)
})
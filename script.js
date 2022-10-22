const form = document.querySelector("#form")
form.addEventListener("submit",function(event){
    event.preventDefault();
    const nom = document.querySelector ("#nom");
    const prenom = document.querySelector("#prenom");
    const tablo = document.querySelector("#tablo");
    const tr = document.createElement("tr");

    const tdNom = document.createElement("td")
        tdNom.innerText = nom.value
        tdNom.classList.add("nom")

    tr.append(tdNom)

    const tdPrenom = document.createElement("td")
        tdPrenom.innerText = nom.value
        tdPrenom.innerText = prenom.value

    tr.append(tdPrenom)

    const tdBoutton = document.createElement("td")
        tdBoutton.classList.add("action")
    
    tr.append(tdBoutton)

    
})
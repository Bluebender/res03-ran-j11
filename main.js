let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let bouton1 = document.getElementById("bouton1");
let bouton2 = document.getElementById("bouton2");
let bouton3 = document.getElementById("bouton3");
// let input = document.querySelectorAll("section:first-of-type input");
// let input2 = document.querySelectorAll("section:nth-of-type(2) input");
// let input3 = document.querySelectorAll("section:last-of-type input");


bouton1.addEventListener("click", function(){
    section1.classList.add("passive");
    section2.classList.remove("passive");
    section3.classList.add("passive");
    bouton1.setAttribute("disabled", "true");
    // for (let i=0; i<input.length; i++){
    //     input[i].setAttribute("disabled", "true");
    // }
    
});

bouton2.addEventListener("click", function(){
    section1.classList.add("passive");
    section2.classList.add("passive");
    section3.classList.remove("passive");
    bouton2.setAttribute("disabled", "true");
    // for (let i=0; i<input2.length; i++){
    //     input2[i].setAttribute("disabled", "true");
    // }
});

bouton3.addEventListener("click", function(){
    section1.classList.remove("passive");
    section2.classList.add("passive");
    section3.classList.add("passive");
    bouton3.setAttribute("disabled", "true");
    // for (let i=0; i<input3.length; i++){
    //     input3[i].setAttribute("disabled", "true");
    // }
});

let form1 = document.querySelector("form:first-of-type");
console.log(form1);

form1.addEventListener("submit", function(event) {
    event.preventDefault();
    let input1 = document.querySelector("form:first-of-type input:first-of-type");
    if (input1.value !==""){
        event.target.submit();
    }
    else{
        // On cré la balise p
        let inputError = document.createElement("p");
        // On déclare le champs filedset 1
        let fieldset = document.querySelector("form:first-of-type fieldset:first-of-type");
        // On rajoute le message d'erreur dans la balise p
        inputError.innerHTML = "Veuillez choisir un nom d'utilisateur";
        // On ajoute la classe erreur à la balise p
        inputError.classList.add("erreur");
        input1.classList.add(("erreur2"))
        // On rajoute le paragraphe p à la fin du premier champ fieldset
        fieldset.appendChild(inputError);
    }
});

// let form2 = document.querySelector("form:nth-of-type(2)");

// form2.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let input2 = document.querySelector("form:first-of-type input:first-of-type");
//     if (input1.value !==""){
//         event.target.submit();
//     }
//     else{
//         // On cré la balise p
//         let inputError = document.createElement("p");
//         // On déclare le champs filedset 1
//         let fieldset = document.querySelector("form:first-of-type fieldset:first-of-type");
//         // On rajoute le message d'erreur dans la balise p
//         inputError.innerHTML = "Veuillez choisir un nom d'utilisateur";
//         // On ajoute la classe erreur à la balise p
//         inputError.classList.add("erreur");
//         // On rajoute le paragraphe p à la fin du premier champ fieldset
//         fieldset.appendChild(inputError);
//     }
// });
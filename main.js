// let section1 = document.getElementById("section1");
// let section2 = document.getElementById("section2");
// let section3 = document.getElementById("section3");
// let bouton1 = document.getElementById("bouton1");
// let bouton2 = document.getElementById("bouton2");
// let bouton3 = document.getElementById("bouton3");
// // let input = document.querySelectorAll("section:first-of-type input");
// // let input2 = document.querySelectorAll("section:nth-of-type(2) input");
// // let input3 = document.querySelectorAll("section:last-of-type input");


// bouton1.addEventListener("click", function(){
//     section1.classList.add("passive");
//     section2.classList.remove("passive");
//     section3.classList.add("passive");
//     bouton1.setAttribute("disabled", "true");
//     // for (let i=0; i<input.length; i++){
//     //     input[i].setAttribute("disabled", "true");
//     // }
    
// });

// bouton2.addEventListener("click", function(){
//     section1.classList.add("passive");
//     section2.classList.add("passive");
//     section3.classList.remove("passive");
//     bouton2.setAttribute("disabled", "true");
//     // for (let i=0; i<input2.length; i++){
//     //     input2[i].setAttribute("disabled", "true");
//     // }
// });

// bouton3.addEventListener("click", function(){
//     section1.classList.remove("passive");
//     section2.classList.add("passive");
//     section3.classList.add("passive");
//     bouton3.setAttribute("disabled", "true");
//     // for (let i=0; i<input3.length; i++){
//     //     input3[i].setAttribute("disabled", "true");
//     // }
// });

let formOk = "true"

// // On déclare le premier formulaire
let form1 = document.querySelector("form:first-of-type");

form1.addEventListener("submit", function(event) {
    // On arrête la soumission
    event.preventDefault();
    // On déclare le premier input
    let input1 = document.querySelector("#user_name");
    let input2 = document.querySelector("#mail");
    let input3 = document.querySelector("#password");
    let input4 = document.querySelector("#confirmation_password");
    // Si la valeur de l'input est différente de vide
    if (input1.value ===""){
        // On cré la balise p
        let inputError = document.createElement("p");
        // On déclare le champs filedset 1
        let fieldset = document.querySelector("form:first-of-type fieldset:first-of-type");
        // On rajoute le message d'erreur dans la balise p
        inputError.innerHTML = "Veuillez entrer un nom d'utilisateur";
        // On ajoute la classe erreur à la balise p
        inputError.classList.add("erreur");
        // On ajoute la classe erreur à la balise input
        input1.classList.add(("erreur2"))
        // On rajoute le paragraphe p à la fin du premier champ fieldset
        fieldset.appendChild(inputError);
    }
    else if (input2.value ===""){
        // On cré la balise p
        let inputError = document.createElement("p");
        // On déclare le champs filedset 2
        let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
        // On rajoute le message d'erreur dans la balise p
        inputError.innerHTML = "Veuillez entrer un Email";
        // On ajoute la classe erreur à la balise p
        inputError.classList.add("erreur");
        // On ajoute la classe erreur à la balise input
        input2.classList.add(("erreur2"))
        // On rajoute le paragraphe p à la fin du premier champ fieldset
        fieldset.appendChild(inputError);
    }
    else if (input2.value.indexOf("@")===-1 || input2.value.indexOf(".")===-1){
        // On cré la balise p
        let inputError2 = document.createElement("p");
        // On déclare le champs filedset 2
        let fieldset2 = document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
        // On rajoute le message d'erreur dans la balise p
        inputError2.innerHTML = "Veuillez entrer un Email avec un @ et un .";
        // On ajoute la classe erreur à la balise p
        inputError2.classList.add("erreur");
        // On ajoute la classe erreur à la balise input
        input2.classList.add(("erreur2"))
        // On rajoute le paragraphe p à la fin du premier champ fieldset
        fieldset2.appendChild(inputError2);
    }
    else if (input3.value ===""){
        // On cré la balise p
        let inputError = document.createElement("p");
        // On déclare le champs filedset 2
        let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(3)");
        // On rajoute le message d'erreur dans la balise p
        inputError.innerHTML = "Veuillez entrer un mot de passe";
        // On ajoute la classe erreur à la balise p
        inputError.classList.add("erreur");
        // On ajoute la classe erreur à la balise input
        input3.classList.add(("erreur2"))
        // On rajoute le paragraphe p à la fin du premier champ fieldset
        fieldset.appendChild(inputError);
    }
    else if (input4.value ===""){
        // On cré la balise p
        let inputError = document.createElement("p");
        // On déclare le champs filedset 2
        let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(4)");
        // On rajoute le message d'erreur dans la balise p
        inputError.innerHTML = "Veuillez confirmer votre mot de passe";
        // On ajoute la classe erreur à la balise p
        inputError.classList.add("erreur");
        // On ajoute la classe erreur à la balise input
        input4.classList.add(("erreur2"))
        // On rajoute le paragraphe p à la fin du premier champ fieldset
        fieldset.appendChild(inputError);
    }
    else if (input3.value !== input4.value){
        // On cré la balise p
        let inputError = document.createElement("p");
        // On déclare le champs filedset 2
        let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(4)");
        // On rajoute le message d'erreur dans la balise p
        inputError.innerHTML = "Votre second mot de passe n'est pas identique au premier";
        // On ajoute la classe erreur à la balise p
        inputError.classList.add("erreur");
        // On ajoute la classe erreur à la balise input
        input4.classList.add(("erreur2"))
        // On rajoute le paragraphe p à la fin du premier champ fieldset
        fieldset.appendChild(inputError);
    }

    else{
        // On relance la soumission
        event.target.submit();
    }
    
});

// // On déclare le premier formulaire
// let form1 = document.querySelector("form:first-of-type");

// form1.addEventListener("submit", function(event) {
//     // On arrête la soumission
//     event.preventDefault();
//     // On déclare le premier input
//     let input1 = document.querySelector("form:first-of-type input:first-of-type");
//     // Si la valeur de l'input est différente de vide
//     if (input1.value !==""){
//         // On relance la soumission
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
//         // On ajoute la classe erreur à la balise input
//         input1.classList.add(("erreur2"))
//         // On rajoute le paragraphe p à la fin du premier champ fieldset
//         fieldset.appendChild(inputError);
//     }
// });
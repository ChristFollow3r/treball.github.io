function checkAnswerA() {
    // Agafa tot el contingut de la classe RESPOSTA_A
    const respostesA = document.querySelectorAll(".RESPOSTA_A");
    // Un for loop amb el size de respostesA
    for (let i = 0; i < respostesA.length; i++) {
        if (respostesA[i].dataset.correcte == "TRUE") respostesA[i].parentElement.style.color = "green";
        else respostesA[i].parentElement.style.color = "red";
    }

    // Si la resposta es correcte es cambia tota la label a verd, si no a vermel

}

function checkAnswerB() { // EL mateix que la primera funció però per el seguent bloc de preguntes

    const respostesB = document.querySelectorAll(".RESPOSTA_B");
    
    for (let i = 0; i < respostesB.length; i++) {
        if (respostesB[i].dataset.correcte == "TRUE") respostesB[i].parentElement.style.color = "green";
        else respostesB[i].parentElement.style.color = "red";
    }

}

function validateAge() {

    let age = document.getElementById("Edat");
    let valor = age.value;

    if (valor > 18 && valor <= 90) age.classList.add("correcte");
    else age.classList.add("incorrecte");
}

function validateEmail() {
    
    let email = document.getElementById("Correu");
    let valor = email.value;
    
    // Això mho ha dit la IA nop sabia que existia inlcudes
    // Jo havia fet un for loop i un contador per mirar si algun elelement de la string contenia el @
    // Per cada cop que string[i] != @ feia contador-- i si el contador arribava a 0
    // (perquè començava sent string.length) llavons era incorrecte.
    if (valor.includes("@")) email.classList.add("correcte");
    else email.classList.add("incorrecte");
    
}
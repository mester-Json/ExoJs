function calculerTarif() {
    const age = parseInt(document.getElementById("age").value);
    const anneesPermis = parseInt(document.getElementById("permis").value);
    const accidents = parseInt(document.getElementById("accident").value);

    const errors = {
        age: false,
        anneesPermis: false,
        accidents: false
    };

    const ageError = document.getElementById("ageError");
    const anneesPermisError = document.getElementById("permisError");
    const accidentsError = document.getElementById("accidentError");

    ageError.style.visibility = "hidden";
    anneesPermisError.style.visibility = "hidden";
    accidentsError.style.visibility = "hidden";

    let tarif = "";
    let audio = new Audio('asset/audio/erro.mp3');

    if (isNaN(age)) {
        ageError.style.visibility = "visible";
        errors.age = true;
        audio.play();
    }

    if (isNaN(anneesPermis)) {
        anneesPermisError.style.visibility = "visible";
        errors.anneesPermis = true;
        audio.play();
    }

    if (isNaN(accidents)) {
        accidentsError.style.visibility = "visible";
        errors.accidents = true;
        audio.play();
    }

    if (!errors.age && !errors.anneesPermis && !errors.accidents) {
        if (age < 25) {
            if (anneesPermis < 2 && accidents === 0) {
                tarif = "Rouge";
            } else {
                tarif = "Refusé";
            }
        } else {
            if (anneesPermis < 2) {
                if (accidents === 0) {
                    tarif = "Orange";
                } else if (accidents === 1) {
                    tarif = "Rouge";
                } else {
                    tarif = "Refusé";
                }
            } else {
                if (accidents === 0) {
                    tarif = "Vert";
                } else if (accidents === 1) {
                    tarif = "Orange";
                } else if (accidents === 2) {
                    tarif = "Rouge";
                } else {
                    tarif = "Refusé";
                }
            }
        }

        if (anneesPermis >= 5) {
            if (tarif === "Vert") {
                tarif = "Bleu";
            } else if (tarif === "Orange") {
                tarif = "Vert";
            } else if (tarif === "Rouge") {
                tarif = "Orange";
            }
        }

        document.getElementById("resultat").innerText = "Tarif : " + tarif;


    }
}




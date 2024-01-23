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


document.body.addEventListener('click', function () {
    const audio = new Audio("asset/audio/cute-uwu.mp3");
    audio.play();
    document.body.style.backgroundColor = couleurs[Math.floor(Math.random() * couleurs.length)];
});


document.body.addEventListener('keydown', function () {
    const couleurs = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const audio = new Audio("asset/audio/pump-shotgun-fortnite-loud.mp3");
    audio.play();
    document.body.style.backgroundColor = couleurs[Math.floor(Math.random() * couleurs.length)];
});

document.body.style.transition = 'transform 15s ease-in-out';

document.body.addEventListener('keydown', function (e) {
    if (e.key === '2') {
        document.body.style.transform = 'rotate(180deg)';
    }
});

document.body.addEventListener('keydown', function (e) {
    if (e.key === '5') {
        document.body.style.transform = 'rotate(0deg)';
    }
});

// document.getElementById('darkModeToggle').addEventListener('click', function () {
//     var body = document.body;
//     var h1 = document.querySelector('h1');
//     var nav = document.querySelector('nav');
//     var darkModeToggle = document.querySelector('#darkModeToggle');
//     var div = document.querySelector('div');


//     darkModeToggle.classList.toggle('dark-mode');
//     div.classList.toggle('dark-mode');
//     nav.classList.toggle('dark-mode');
//     body.classList.toggle('dark-mode');
//     h1.classList.toggle('dark-mode');
// });
document.body.addEventListener('click', function () {
    const audio = new Audio("asset/audio/cute-uwu.mp3");
    audio.play();

});


document.body.addEventListener('keydown', function () {
    const couleurs = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const audio = new Audio("asset/audio/shotgun_1.mp3");
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


const reload = document.getElementById('reload');

reload.addEventListener('click', function () {
    window.location.reload();
});

const darkModeToggle = document.getElementById('darkModeToggle');
const formulaire = document.querySelector('.containerForm');
let isHidden = false;

darkModeToggle.addEventListener('click', function () {
    if (isHidden) {
        formulaire.style.display = 'block';
        isHidden = false;
    } else {
        formulaire.style.display = 'none';
        isHidden = true;
    }
});

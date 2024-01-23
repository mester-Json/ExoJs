document.getElementById('darkModeToggle').addEventListener('click', function () {
    const body = document.body;
    const h1 = document.querySelectorAll('h1');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const form = document.querySelector('form');
    const a = document.querySelectorAll('a');
    const table = document.querySelectorAll('table');
    const inpunt = document.querySelectorAll('input');
    const button = document.querySelectorAll('button');
    const label = document.querySelectorAll('label');


    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        nav.classList.remove('dark');
        header.classList.remove('dark');
        form.classList.remove('dark');
        table.classList.remove('dark');
        footer.classList.remove('dark');
        for (let i = 0; i < h1.length; i++) {
            h1[i].classList.remove('dark');
        }
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove('dark');
        }
        for (let i = 0; i < inpunt.length; i++) {
            inpunt[i].classList.remove('dark');
        }
        for (let i = 0; i < button.length; i++) {
            button[i].classList.remove('dark');
        }
        for (let i = 0; i < label.length; i++) {
            label[i].classList.remove('dark');
        }
    } else {
        body.classList.add('dark');
        nav.classList.add('dark');
        footer.classList.add('dark');
        header.classList.add('dark');
        form.classList.add('dark');
        table.classList.remove('dark')
        for (let i = 0; i < h1.length; i++) {
            h1[i].classList.add('dark');
        }
        for (let i = 0; i < a.length; i++) {
            a[i].classList.add('dark');
        }
        for (let i = 0; i < inpunt.length; i++) {
            inpunt[i].classList.add('dark');
        }
        for (let i = 0; i < button.length; i++) {
            button[i].classList.add('dark');
        }
        for (let i = 0; i < label.length; i++) {
            label[i].classList.add('dark');
        }
    }

});
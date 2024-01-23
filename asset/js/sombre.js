document.getElementById('darkModeToggle').addEventListener('click', function () {
    const body = document.body;
    const h1 = document.querySelectorAll('h1');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const form = document.querySelector('form');
    const a = document.querySelectorAll('a');
    const td = document.querySelector('td');
    const thead = document.querySelector('thead');
    const tbody = document.querySelector('tbody');
    const input = document.querySelectorAll('input');
    const button = document.querySelectorAll('button');
    const label = document.querySelectorAll('label');
    const p = document.querySelectorAll('p');
    const footer = document.querySelector('footer');

    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        nav.classList.remove('dark');
        header.classList.remove('dark');
        thead.classList.remove('dark');
        tbody.classList.remove('dark');
        td.classList.remove('dark');
        footer.classList.remove('dark');
        for (let i = 0; i < h1.length; i++) {
            h1[i].classList.remove('dark');
        }
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove('dark');
        }
        for (let i = 0; i < input.length; i++) {
            input[i].classList.remove('dark');
        }
        for (let i = 0; i < button.length; i++) {
            button[i].classList.remove('dark');
        }
        for (let i = 0; i < label.length; i++) {
            label[i].classList.remove('dark');
        }
        for (let i = 0; i < p.length; i++) {
            p[i].classList.remove('dark');
        }

    } else {
        body.classList.add('dark');
        nav.classList.add('dark');
        header.classList.add('dark');
        thead.classList.add('dark');
        tbody.classList.add('dark');
        td.classList.add('dark');
        footer.classList.add('dark');

        for (let i = 0; i < h1.length; i++) {
            h1[i].classList.add('dark');
        }
        for (let i = 0; i < a.length; i++) {
            a[i].classList.add('dark');
        }
        for (let i = 0; i < input.length; i++) {
            input[i].classList.add('dark');
        }
        for (let i = 0; i < button.length; i++) {
            button[i].classList.add('dark');
        }
        for (let i = 0; i < label.length; i++) {
            label[i].classList.add('dark');
        }
        for (let i = 0; i < p.length; i++) {
            p[i].classList.add('dark');
        }
    }
});
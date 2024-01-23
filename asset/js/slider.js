class Carrousel {
    constructor(images, htmlId) {
        this.images = images;
        this.htmlId = htmlId;
        this.carrouselImageContainer = document.getElementById(htmlId);
        this.indexActuel = 0;
        this.carouselImageElement = document.createElement('img');
        this.carouselTextElement = document.createElement('p');
        this.display();
    }

    display = () => {
        this.carouselImageElement.setAttribute('alt', "Alternative text");
        this.carouselImageElement.setAttribute('src', this.images[this.indexActuel]);

        const phrases = ["Tu es a la limite du refus !",
            "Tu es bien mas pas parfait !",
            "Tu est presque un dieu !", "Tu es refuser !", " Tu es un dieu !"];

        this.carouselTextElement.innerText = phrases[this.indexActuel];
        this.carouselTextElement.classList.add('animate__animated', 'animate__bounceInUp');

        this.carrouselImageContainer.innerHTML = "";
        this.carrouselImageContainer.appendChild(this.carouselImageElement);
        this.carrouselImageContainer.appendChild(this.carouselTextElement);
    }


    animateText = () => {
        this.carouselTextElement.classList.remove('animate__animated', 'animate__bounceInUp');
        void this.carouselTextElement.offsetWidth;
        this.carouselTextElement.classList.add('animate__animated', 'animate__bounceInUp');
    }

    suivant = () => {
        if (!this.images[this.indexActuel + 1]) {

            this.indexActuel = 0;
        } else {
            this.indexActuel += 1;
        }
        this.animateText();
        this.display()
    }

    precedent = () => {
        if (!this.images[this.indexActuel - 1]) {
            this.indexActuel = this.images.length - 1;
        } else {
            this.indexActuel -= 1;
        }
        this.animateText();
        this.display()
    }
}

const imagesArray = ["asset/Slider-gif/cabochon-alert.gif", "asset/Slider-gif/coppercab.gif", "asset/Slider-gif/popartcats-pac.gif", "asset/Slider-gif/talk-to-the-hand-donald-duckn.gif", "asset/Slider-gif/vegeta-super-saiyan-blue.gif"]
const carrousel1 = new Carrousel(imagesArray, "carouselContent")

const previousArrow = document.getElementById('arrowLeft');
const nextArrow = document.getElementById('arrowRight');

previousArrow.addEventListener('click', () => carrousel1.precedent())
nextArrow.addEventListener('click', () => carrousel1.suivant())

setInterval(() => {
    carrousel1.suivant()
}, 30000);
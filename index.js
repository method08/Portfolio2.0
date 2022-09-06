let contactButton = document.querySelector(".contact");
let portfolioButton = document.querySelector(".portfolio");
let aboutButton = document.querySelector(".about");
let contactBox = document.querySelector(".contactBox");
let portfolioBox = document.querySelector(".portfolioBox");
let aboutBox = document.querySelector(".aboutBox");

const showContact = () => {
    contactBox.style.display = 'block';
    portfolioBox.style.display = 'none';
    aboutBox.style.display = 'none';
}

const showAbout = () => {
    contactBox.style.display = 'none';
    portfolioBox.style.display = 'none';
    aboutBox.style.display = 'block';
}

const showPortfolio = () => {
    contactBox.style.display = 'none';
    portfolioBox.style.display = 'block';
    aboutBox.style.display = 'none';
}

contactButton.onclick = showContact;
aboutButton.onclick = showAbout;
portfolioButton.onclick = showPortfolio;
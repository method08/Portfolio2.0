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
    contactButton.style.backgroundColor = 'black';
    contactButton.style.color = 'greenyellow';
    contactButton.style.border = '1px solid greenyellow';
    portfolioButton.style.backgroundColor = 'greenyellow';
    portfolioButton.style.color = 'black';
    portfolioButton.style.border = '2px solid black';
    portfolioButton.style.borderBottom = '5px solid black';
    portfolioButton.style.borderTop = '1px solid black';    
    aboutButton.style.backgroundColor = 'greenyellow';
    aboutButton.style.color = 'black';
    aboutButton.style.border = '2px solid black';
    aboutButton.style.borderBottom = '5px solid black';
    aboutButton.style.borderTop = '1px solid black';  
}

const showPortfolio = () => {
    contactBox.style.display = 'none';
    portfolioBox.style.display = 'block';
    aboutBox.style.display = 'none';
    portfolioButton.style.backgroundColor = 'black';
    portfolioButton.style.color = 'greenyellow';
    portfolioButton.style.border = '1px solid greenyellow';
    contactButton.style.backgroundColor = 'greenyellow';
    contactButton.style.color = 'black';
    contactButton.style.border = '2px solid black';
    contactButton.style.borderBottom = '5px solid black';
    contactButton.style.borderTop = '1px solid black';    
    aboutButton.style.backgroundColor = 'greenyellow';
    aboutButton.style.color = 'black';
    aboutButton.style.border = '2px solid black';
    aboutButton.style.borderBottom = '5px solid black';
    aboutButton.style.borderTop = '1px solid black';  
}

const showAbout = () => {
    contactBox.style.display = 'none';
    portfolioBox.style.display = 'none';
    aboutBox.style.display = 'block';
    aboutButton.style.backgroundColor = 'black';
    aboutButton.style.color = 'greenyellow';
    aboutButton.style.border = '1px solid greenyellow';
    portfolioButton.style.backgroundColor = 'greenyellow';
    portfolioButton.style.color = 'black';
    portfolioButton.style.border = '2px solid black';
    portfolioButton.style.borderBottom = '5px solid black';
    portfolioButton.style.borderTop = '1px solid black';    
    contactButton.style.backgroundColor = 'greenyellow';
    contactButton.style.color = 'black';
    contactButton.style.border = '2px solid black';
    contactButton.style.borderBottom = '5px solid black';
    contactButton.style.borderTop = '1px solid black';  
}

contactButton.onclick = showContact;
aboutButton.onclick = showAbout;
portfolioButton.onclick = showPortfolio;
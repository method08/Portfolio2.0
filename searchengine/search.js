const filterChecks = [document.querySelector("#redFilter"), 
document.querySelector("#blueFilter"), 
document.querySelector("#orangeFilter"),
document.querySelector('#squareFilter'),
document.querySelector('#circleFilter'),
document.querySelector('#rectangleFilter')];

const filterButtons = [document.querySelector('.redButton'),
document.querySelector('.blueButton'),
document.querySelector('.orangeButton'),
document.querySelector('.squareButton'),
document.querySelector('.circleButton'),
document.querySelector('.rectangleButton')];

const redShapes = document.querySelectorAll('.red');
const blueShapes = document.querySelectorAll('.blue');
const orangeShapes = document.querySelectorAll('.orange');
console.log(orangeShapes, blueShapes, redShapes);
const squareShapes = document.querySelectorAll('.square');
const circleShapes = document.querySelectorAll('.circle');
const rectangleShapes = document.querySelectorAll('.rectangle');

// console.log(filterButtons);
// console.log(filterChecks);
// console.log(document.querySelector('#redFilter'));

 function buttonPush() {
    for (let i=0; i < filterChecks.length; i++) {
        console.log(filterChecks[i])
        console.log(filterChecks[i].checked)
        if (filterChecks[i].checked === true) {
            filterButtons[i].style.backgroundColor = 'black';
            filterButtons[i].style.color = 'lightgreen';
        }
        else {filterButtons[i].style.backgroundColor = 'lightgreen'; 
            filterButtons[i].style.color = 'black'}
    }
 } 

 function setFilter() {
        for (let k=0; k < filterChecks.length; k++) {
            if (k === 0 && filterChecks[k].checked === true) {
                for (let j=0; j < redShapes.length; j++)
                redShapes[j].style.display = 'none';
            } 
            if (k === 0 && filterChecks[k].checked === false) {
                for (let j=0; j < redShapes.length; j++)
                redShapes[j].style.display = 'block';
            } 
            if (k === 1 && filterChecks[k].checked === true) {
                for (let j=0; j < blueShapes.length; j++)
                blueShapes[j].style.display = 'none';
        } 
            if (k === 1 && filterChecks[k].checked === false) {
                for (let j=0; j < blueShapes.length; j++)
                blueShapes[j].style.display = 'block';
        } 
            if (k === 2 && filterChecks[k].checked === true) {
                for (let j=0; j < orangeShapes.length; j++)
                orangeShapes[j].style.display = 'none';
        } 
            if (k === 2 && filterChecks[k].checked === false) {
                for (let j=0; j < orangeShapes.length; j++)
                orangeShapes[j].style.display = 'block';
        } 
            if (k === 3 && filterChecks[k].checked === true) {
                for (let j=0; j < squareShapes.length; j++)
                squareShapes[j].style.display = 'none';
        } 
            if (k === 3 && filterChecks[k].checked === false) {
                for (let j=0; j < squareShapes.length; j++)
                squareShapes[j].style.display = 'block';
        } 
            if (k === 4 && filterChecks[k].checked === true) {
                for (let j=0; j < circleShapes.length; j++)
                circleShapes[j].style.display = 'none';
        } 
            if (k === 4 && filterChecks[k].checked === false) {
                for (let j=0; j < circleShapes.length; j++)
                circleShapes[j].style.display = 'block';
        } 
            if (k === 5 && filterChecks[k].checked === true) {
                for (let j=0; j < rectangleShapes.length; j++)
                rectangleShapes[j].style.display = 'none';
        } 
            if (k === 5 && filterChecks[k].checked === false) {
                for (let j=0; j < rectangleShapes.length; j++)
                rectangleShapes[j].style.display = 'block';
        } 
    }
 }

filterChecks[0].addEventListener('change', function() {buttonPush(), setFilterRed()}); 
filterChecks[1].addEventListener('change', function() {buttonPush(), setFilter()}); 
filterChecks[2].addEventListener('change', function() {buttonPush(), setFilter()}); 
filterChecks[3].addEventListener('change', function() {buttonPush(), setFilter()}); 
filterChecks[4].addEventListener('change', function() {buttonPush(), setFilter()}); 
filterChecks[5].addEventListener('change', function() {buttonPush(), setFilter()}); 
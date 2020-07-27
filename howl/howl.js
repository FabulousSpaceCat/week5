// We're setting up an object constructor for moons

function Moon(name, pic, dateYear, dateMonth, dateDay) { // remember month index starts from 0
    this.name = name;
    this.pic = pic // path-to-pic.png
    this.date = new Date(dateYear, dateMonth, dateDay);
}

// Now each moon and its properties

const wolfMoon = new Moon("Wolf", "wolf-moon.png", 2020, 0, 10); 
const snowMoon = new Moon("Snow", "snow-moon.png", 2020, 1, 9);
const crowMoon = new Moon("Crow", "crow-moon.png", 2020, 2, 9);
const grassMoon = new Moon("Grass", "grass-moon.png", 2020, 3, 7);
const flowerMoon = new Moon("Flower", "flower-moon.png", 2020, 4, 7);
const strawberryMoon = new Moon("Strawberry", "strawberry-moon.png", 2020, 5, 5);
const thunderMoon = new Moon("Thunder", "thunder-moon.png", 2020, 6, 5);
const sturgeonMoon = new Moon("Sturgeon", "sturgeon-moon.png", 2020, 7, 3);
const redMoon = new Moon("Red", "red-moon.png", 2020, 8, 2);
const harvestMoon = new Moon("Harvest", "harvest-moon.png", 2020, 9, 1);
const blueMoon = new Moon("Blue", "blue-moon.png", 2020, 10, 31);
const frostMoon = new Moon("Frost", "frostmoon.png", 2020, 11, 30);
const longMoon = new Moon("Long Night\'s", "long-nights-moon.png", 2020, 12, 29);

// We need a variable with the current date in it

const currentDay = new Date();

// I may need to initialize some variables.

let deadline;
let moonName;
let moonPic;

// And also it needs to visibly count, it's only ever set by running the countdown and is cleared when it shouldn't be ticking
// moving the image display out of the countdown wouldn't be a bad idea.


let tick;

// Set countdown timer and do the math and make variables for the math

function countdown() { 
    var now = new Date().getTime();
    var time = deadline - now;
    if (time > 0) { // Let's not go past 0
        let days = Math.floor(time / (1000 * 60 * 60 * 24));
        let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((time % (1000 * 60 * 60 )) / (1000 * 60));
        let secs = Math.floor((time % (1000 * 60 )) / 1000);
        // Display countdown timer block, minimum digits 2 so it's not bouncing all over the place
        document.getElementById("counter").innerHTML = `
            ${days.toLocaleString(undefined,{minimumIntegerDigits: 2})}D 
            ${hours.toLocaleString(undefined,{minimumIntegerDigits: 2})}H 
            ${mins.toLocaleString(undefined,{minimumIntegerDigits: 2})}M 
            ${secs.toLocaleString(undefined,{minimumIntegerDigits: 2})}S`
        //repeat as needed
        tick = setInterval(countdown, 1000);
    }
    else { // A countdown has obviously completed!  nextMoon should NOT catch anything, but checkSameDay SHOULD
        nextMoon();
        checkSameDay();
    }
}

function whatMoon() {
    document.getElementById("moon").innerHTML += `
        <br>
        until it's time to <span class="howl">howl</span> at the
        <br>
        <span class="name">${moonName} Moon</span>`
    document.body.style.backgroundImage = `url("images/${moonPic}")`
}

// We should determine the upcoming moon, which we can do using unix time
// I have the feeling I could do something with an array and a loop but fuck it, long hand way still works

function nextMoon() {
    if (currentDay < wolfMoon.date.getTime()) { 
        deadline = wolfMoon.date.getTime();
        moonName = wolfMoon.name;
        moonPic = wolfMoon.pic;
        countdown();
        whatMoon();
    }
    else if (currentDay < snowMoon.date.getTime() && currentDay > wolfMoon.date.getTime()) {
        deadline = snowMoon.date.getTime();
        moonName = snowMoon.name;
        moonPic = snowMoon.pic;
        countdown();
        whatMoon();
    }
    else if (currentDay < crowMoon.date.getTime() && currentDay > snowMoon.date.getTime()) {
        deadline = crowMoon.date.getTime();
        moonName = crowMoon.name;
        moonPic = crowMoon.pic;
        countdown();
        whatMoon();
    }
    else if (currentDay < grassMoon.date.getTime() && currentDay > crowMoon.date.getTime()) {
        deadline = grassMoon.date.getTime();
        moonName = grassMoon.name;
        moonPic = grassMoon.pic;
        countdown();
        whatMoon();
    }
    else if (currentDay < flowerMoon.date.getTime() && currentDay > grassMoon.date.getTime()) {
        deadline = flowerMoon.date.getTime();
        moonName = flowerMoon.name;
        moonPic = flowerMoon.pic;
        countdown();
        whatMoon();
    }
    else if (currentDay < strawberryMoon.date.getTime() && currentDay > flowerMoon.date.getTime()) {
        deadline = strawberryMoon.date.getTime();
        moonName = strawberryMoon.name;
        moonPic = strawberryMoon.pic;
        countdown();
        whatMoon();
    }
    else if (currentDay < thunderMoon.date.getTime() && currentDay > strawberryMoon.date.getTime()) {
        deadline = thunderMoon.date.getTime();
        moonName = thunderMoon.name;
        moonPic = thunderMoon.pic;
        countdown();
        whatMoon();
    }
    else if (currentDay < sturgeonMoon.date.getTime() && currentDay > thunderMoon.date.getTime()) {
        deadline = sturgeonMoon.date.getTime();
        moonName = sturgeonMoon.name;
        moonPic = sturgeonMoon.pic;
        countdown();
        whatMoon();
    }
    else if (currentDay < redMoon.date.getTime() && currentDay > sturgeonMoon.date.getTime()) {
        deadline = redMoon.date.getTime();
        moonName = redMoon.name;
        moonPic = redMoon.pic;
        countdown();
        whatMoon();
    }
    else if (currentDay < harvestMoon.date.getTime() && currentDay > redMoon.date.getTime()) {
        deadline = harvestMoon.date.getTime();
        moonName = harvestMoon.name;
        moonPic = harvestMoon.pic;
        countdown();
        whatMoon();
    }
    else if (currentDay < blueMoon.date && currentDay > harvestMoon.date) {
        deadline = blueMoon.date;
        moonName = blueMoon.name;
        moonPic = blueMoon.pic;
        countdown();
        whatMoon();
    }
    else if (currentDay < frostMoon.date && currentDay > blueMoon.date) {
        deadline = frostMoon.date;
        moonName = frostMoon.name;
        moonPic = frostMoon.pic;
        countdown();
        whatMoon();
    }
    else if (currentDay < longMoon.date && currentDay > frostMoon.date) {
        deadline = longMoon.date;
        moonName = longMoon.name;
        moonPic = longMoon.pic;
        countdown();
        whatMoon();
    }
    else {
        // In case I never get back to this
        document.getElementById("demo").innerHTML = `This project was made for the year 2020 and may need to be updated for the current year.  If you'd like to see how it worked, set your system time to a date in 2020.  (I would understand if you really don't want to relive that year, though.)`
        tick = "";
    }
}

// If it's the same day as a full moon, display this instead

function isSameDay() {
    document.getElementById("demo").innerHTML = `
    Start <span class="howl">howling</span> friends, it's the
    <br>
    <span class="name">${moonName} Moon</span>`;
    tick = "";
}

// We get a true or false for if it's the same day as a moon or not

let sameDay = function(arg1, arg2) { 
    return arg1.getFullYear() === arg2.getFullYear() &&
    arg1.getMonth() === arg2.getMonth() &&
    arg1.getDate() === arg2.getDate();
}

// Check each full moon date for if it's the current day

function checkSameDay() {
    if (sameDay(currentDay, wolfMoon.date) === true) {
        moonName = wolfMoon.name;
        moonPic = wolfMoon.pic;
        isSameDay();
    }
    else if (sameDay(currentDay, snowMoon.date) === true) {
        moonName = snowMoon.name;
        moonPic = snowMoon.pic;
        isSameDay();
    }
    else if (sameDay(currentDay, crowMoon.date) === true) {
        moonName = crowMoon.name;
        moonPic = crowMoon.pic;
        isSameDay();
    }
    else if (sameDay(currentDay, grassMoon.date) === true) {
        moonName = grassMoon.name;
        moonPic = grassMoon.pic;
        isSameDay();
    }
    else if (sameDay(currentDay, flowerMoon.date) === true) {
        moonName = flowerMoon.name;
        moonPic = flowerMoon.pic;
        isSameDay();
    }
    else if (sameDay(currentDay, strawberryMoon.date) === true) {
        moonName = strawberryMoon.name;
        moonPic = strawberryMoon.pic;
        isSameDay();
    }
    else if (sameDay(currentDay, strawberryMoon.date) === true) {
        moonName = strawberryMoon.name;
        moonPic = strawberryMoon.pic;
        isSameDay();
    }
    else if (sameDay(currentDay, thunderMoon.date) === true) {
        moonName = thunderMoon.name;
        moonPic = thunderMoon.pic;
        isSameDay();
    }
    else if (sameDay(currentDay, sturgeonMoon.date) === true) {
        moonName = sturgeonMoon.name;
        moonPic = sturgeonMoon.pic;
        isSameDay();
    }
    else if (sameDay(currentDay, redMoon.date) === true) {
        moonName = redMoon.name;
        moonPic = redMoon.pic;
        isSameDay();
    }
    else if (sameDay(currentDay, harvestMoon.date) === true) {
        moonName = harvestMoon.name;
        moonPic = harvestMoon.pic;
        isSameDay();
    }
    else if (sameDay(currentDay, blueMoon.date) === true) {
        moonName = blueMoon.name;
        moonPic = blueMoon.pic;
        isSameDay();
    }
    else if (sameDay(currentDay, frostMoon.date) === true) {
        moonName = frostMoon.name;
        moonPic = frostMoon.pic;
        isSameDay();
    }
    else if (sameDay(currentDay, longMoon.date) === true) {
        moonName = longMoon.name;
        moonPic = longMoon.pic;
        isSameDay();
    }
}

// Now actually do the thing!

nextMoon();
checkSameDay();


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

// And also it needs to count, I think this will be okay since the variables will be set by the time it runs

let tick;

// Set countdown timer and do the math and make variables for the math

function countdown() { 
    let now = new Date().getTime();
    let time = deadline - now;
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((time % (1000 * 60 * 60 )) / (1000 * 60));
    let secs = Math.floor((time % (1000 * 60 )) / 1000);
    // Display countdown timer block
    document.getElementById("demo").innerHTML = `
        ${days} D ${hours} H ${mins} M ${secs} S
        <br>
        until it's time to howl at the
        <br>
        ${moonName} Moon
        <p><img src="images/${moonPic}" alt="${moonName} Moon"></p>`
    //repeat as needed
    tick = setInterval(countdown, 1000);
}
// We should determine the upcoming moon, which we can do using epoch time:
// Ideally we would be making a ticking timer but not yet, I just need to make the idea work first
// I have the feeling I could do something with an array and a loop but fuck it, long hand way still works

function nextMoon() {
    if (currentDay < wolfMoon.date.getTime()) { 
        deadline = wolfMoon.date.getTime();
        moonName = wolfMoon.name;
        moonPic = wolfMoon.pic;
        countdown();
    }
    else if (currentDay < snowMoon.date.getTime() && currentDay > wolfMoon.date.getTime()) {
        deadline = snowMoon.date.getTime();
        moonName = snowMoon.name;
        moonPic = snowMoon.pic;
        countdown();
    }
    else if (currentDay < crowMoon.date.getTime() && currentDay > snowMoon.date.getTime()) {
        deadline = crowMoon.date.getTime();
        moonName = crowMoon.name;
        moonPic = crowMoon.pic;
        countdown();
    }
    else if (currentDay < grassMoon.date.getTime() && currentDay > crowMoon.date.getTime()) {
        deadline = grassMoon.date.getTime();
        moonName = grassMoon.name;
        moonPic = grassMoon.pic;
        countdown();
    }
    else if (currentDay < flowerMoon.date.getTime() && currentDay > grassMoon.date.getTime()) {
        deadline = flowerMoon.date.getTime();
        moonName = flowerMoon.name;
        moonPic = flowerMoon.pic;
        countdown();
    }
    else if (currentDay < strawberryMoon.date.getTime() && currentDay > flowerMoon.date.getTime()) {
        deadline = strawberryMoon.date.getTime();
        moonName = strawberryMoon.name;
        moonPic = strawberryMoon.pic;
        countdown();
    }
    else if (currentDay < thunderMoon.date.getTime() && currentDay > strawberryMoon.date.getTime()) {
        deadline = thunderMoon.date.getTime();
        moonName = thunderMoon.name;
        moonPic = thunderMoon.pic;
        countdown();
    }
    else if (currentDay < sturgeonMoon.date.getTime() && currentDay > thunderMoon.date.getTime()) {
        deadline = sturgeonMoon.date.getTime();
        moonName = sturgeonMoon.name;
        moonPic = sturgeonMoon.pic;
        countdown();
    }
    else if (currentDay < redMoon.date.getTime() && currentDay > sturgeonMoon.date.getTime()) {
        deadline = redMoon.date.getTime();
        moonName = redMoon.name;
        moonPic = redMoon.pic;
        countdown();
    }
    else if (currentDay < harvestMoon.date.getTime() && currentDay > redMoon.date.getTime()) {
        deadline = harvestMoon.date.getTime();
        moonName = harvestMoon.name;
        moonPic = harvestMoon.pic;
        countdown();
    }
    else if (currentDay < blueMoon.date && currentDay > harvestMoon.date) {
        deadline = blueMoon.date;
        moonName = blueMoon.name;
        moonPic = blueMoon.pic;
        countdown();
    }
    else if (currentDay < frostMoon.date && currentDay > blueMoon.date) {
        deadline = frostMoon.date;
        moonName = frostMoon.name;
        moonPic = frostMoon.pic;
        countdown();
    }
    else if (currentDay < longMoon.date && currentDay > frostMoon.date) {
        deadline = longMoon.date;
        moonName = longMoon.name;
        moonPic = longMoon.pic;
        countdown();
    }
    else {
        // In case I never get back to this
        document.getElementById("demo").innerHTML = `This project was made for the year 2020 and may need to be updated for the current year.  If you'd like to see how it worked, set your system time to a date in 2020.  (I would understand if you really don't want to relive that year, though.)`
    }
}

// If it's the same day as a full moon, display this instead

function isSameDay() {
    document.getElementById("demo").innerHTML = `
    Start howling, friends, it's
    <br>
    ${moonName} Moon
    <p><img src="images/${moonPic}" alt="${moonName} Moon"></p>`
    tick = ""
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


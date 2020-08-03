// We're setting up an object constructor for moons

function Moon(name, pic, dateYear, dateMonth, dateDay) { // remember month index starts from 0
    this.name = name;
    this.pic = pic // path-to-pic.png
    this.date = new Date(dateYear, dateMonth, dateDay);
}

// Now we make each moon and its properties and push it into the array of moons

moons = [];

moons.push(
    new Moon("Wolf", "wolf-moon.png", 2020, 0, 10),
    new Moon("Snow", "snow-moon.png", 2020, 1, 9),
    new Moon("Crow", "crow-moon.png", 2020, 2, 9),
    new Moon("Grass", "grass-moon.png", 2020, 3, 7),
    new Moon("Flower", "flower-moon.png", 2020, 4, 7),
    new Moon("Strawberry", "strawberry-moon.png", 2020, 5, 5),
    new Moon("Thunder", "thunder-moon.png", 2020, 6, 5),
    new Moon("Sturgeon", "sturgeon-moon.png", 2020, 7, 3),
    new Moon("Red", "red-moon.png", 2020, 8, 2),
    new Moon("Harvest", "harvest-moon.png", 2020, 9, 1),
    new Moon("Blue", "blue-moon.png", 2020, 10, 31),
    new Moon("Frost", "frostmoon.png", 2020, 11, 30),
    new Moon("Long Night\'s", "long-nights-moon.png", 2020, 12, 29),
)

// We need a variable with the current date in it

const currentDay = new Date();

// I may need to initialize some variables.

let deadline;
let moonName;
let moonPic;

// And also it needs to visibly count, it's only ever set by running the countdown and is cleared when it shouldn't be ticking

let tick;

// Set countdown timer and do the math and make variables for the math

function countdown() { 
    let now = new Date();
    let time = deadline - now;
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
        // Repeat as needed
        tick = setInterval(countdown, 1000);
    }
    else if (time <= 0) { // A countdown has obviously completed, victory!
        thisMoon();
    }
}

// What moon are we counting down to?

function nextMoon() {
    document.getElementById("today").innerHTML = ""
    document.getElementById("moon").innerHTML += `
        <br>
        until it's time to <span class="howl">howl</span> at the
        <br>
        <span class="name">${moonName} Moon</span>`
    document.body.style.backgroundImage = `url("images/${moonPic}")`
}

// If it's the same day as a full moon, display this instead

function thisMoon() {
    document.getElementById("counter").innerHTML = ""
    document.getElementById("moon").innerHTML = ""
    document.getElementById("today").innerHTML = `
        Start <span class="howl">howling</span> friends
        <br>
        it's the
        <br>
        <span class="name">${moonName} Moon</span>`;
    document.body.style.backgroundImage = `url("images/${moonPic}")`
    tick = "";
}

// Now get the moon

moons.forEach(getMoon);

function getMoon(moon, index) {
    if (currentDay.getFullYear() === moon.date.getFullYear() 
        && currentDay.getMonth() === moon.date.getMonth() 
        && currentDay.getDate() === moon.date.getDate()) {
        moonName = moon.name;
        moonPic = moon.pic;
        thisMoon();
    }
    else if (index == 0 
            && currentDay < moon.date 
            && currentDay.getDate() != moon.date.getDate()) {
        deadline = moon.date;
        moonName = moon.name;
        moonPic = moon.pic;
        countdown();
        nextMoon();
    }
    else if (index > 0 
            && currentDay < moon.date 
            && currentDay.getDate() != moons[index-1].date.getDate() 
            && currentDay > moons[index-1].date) {
        deadline = moon.date;
        moonName = moon.name;
        moonPic = moon.pic;
        countdown();
        nextMoon();
    }
    else if (currentDay.getFullYear() != 2020) {
    // In case I never get back to this
        document.getElementById("today").innerHTML = `
            <p>This project was made for the year 2020 and may need to be updated for the current year.</p>  
            <p>If you'd like to see how it worked, set your system time to a date in 2020.</p>  
            <p>(I would understand if you really don't want to relive that year, though.)</p>`
        tick = "";
    }
}



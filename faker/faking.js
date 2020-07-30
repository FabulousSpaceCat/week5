// TO DO - yay or nay buttons, shove everything into a function that reloads if nay, make pretty hearts if yay

let randomGender; 
let randomFName; // In a perfect world this would work but Faker is broken here even on the most recent version
let randomLName;
let randomAge;
let randomMembership;
let randomCity;
let randomJob;
let randomCompany;
let randomAvatar;
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// We build the image

function image() {
    let image = document.createElement("img");
    image.setAttribute("src", randomAvatar);
    image.setAttribute("alt", randomFName + " " + randomLName);
    image.setAttribute("class", "w3-margin w3-circle");
    document.getElementById("pic").innerHTML = "";
    document.getElementById("pic").appendChild(image);
}

// Set their gender - this is only a visual cue

function genderCue(){
    if (randomGender === 1) {
        document.getElementById("user").setAttribute("class", "w3-pink w3-panel");
    }
    else {
        document.getElementById("user").setAttribute("class", "w3-blue w3-panel");
    }
}

// Set the text content

function text() {
    // Set their name - we only want first and last name
    document.getElementById("name").textContent = `${randomFName} ${randomLName}`
    // Build the membership - we only want month and year
    document.getElementById("membership").textContent = `Member since ${months[randomMembership.getMonth()]} ${randomMembership.getFullYear()}`
    // How old is this person and where do they live
    document.getElementById("demographic").textContent = `Age ${randomAge} living in ${randomCity}`
    // Okay now what do they do
    document.getElementById("theydo").textContent = `${randomJob} at ${randomCompany}`
}


// Not interested, get a new person (and also get the first person, I guess, but you're not interested in nobody)

function reset(){
    // Get new stuff
    randomGender = faker.random.number(1); // boolean was always returning true
    randomFName = faker.name.firstName(randomGender); // doesn't actually seem to work, but if it did it'd be cool
    randomLName = faker.name.lastName();
    randomAge = faker.random.number({min:18, max:70});
    randomMembership = new Date(faker.date.between('2015-01-01', '2020-07-28'));
    randomCity = faker.address.city();
    randomJob = faker.name.jobTitle();
    randomCompany = faker.company.companyName();
    randomAvatar = faker.image.people(400, 400, true);
    // Render new stuff
    image();
    genderCue();
    text();
}

// Also actually build the page

reset();

// Okay we're interested!

function match() {
    document.getElementById("pic").setAttribute("class", "w3-hide");
    document.getElementById("user").setAttribute("class", "w3-hide");
    document.getElementById("stats").setAttribute("class", "w3-hide");
    document.getElementById("buttons").setAttribute("class", "w3-hide");
    document.getElementById("match").setAttribute("class", "w3-show-inline-block");
    let image = document.createElement("img");
    image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/42/Love_Heart_SVG.svg");
    image.setAttribute("alt", "It's a match!");
    image.setAttribute("class", "w3-margin w3-block w3-auto");
    document.getElementById("match").innerHTML = `
        <p>We've contacted ${randomFName} on your behalf.</p>
        <p>You should hear from them soon!</p>`;
    document.getElementById("match").appendChild(image);
}
// TO DO - yay or nay buttons, shove everything into a function that reloads if nay, make pretty hearts if yay


let randomGender = faker.random.number(1); // boolean was always returning true, weird
let randomFName = faker.name.firstName(randomGender); // In a perfect world this would work but Faker is broken here even on the most recent version
let randomLName = faker.name.lastName();
let randomAge = faker.random.number({min:18, max:70});
let randomMembership = new Date(faker.date.between('2015-01-01', '2020-07-28'));
let randomCity = faker.address.city();
let randomJob = faker.name.jobTitle();
let randomCompany = faker.company.companyName();
let randomAvatar = faker.image.people(300, 300, true);
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// We build the image

function image() {
    let image = document.createElement("img");
    image.setAttribute("src", randomAvatar);
    image.setAttribute("alt", randomFName + " " + randomLName);
    image.setAttribute("class", "w3-margin w3-circle")
    document.getElementById("card").insertBefore(image, document.getElementById("info"))
}

image();

// Set their name - we only want first and last name

document.getElementById("name").textContent = `${randomFName} ${randomLName}`

// Set their gender - this is only a visual cue

function genderCue(){
    if (randomGender === 1) {
        document.getElementById("info").setAttribute("class", "w3-pink w3-panel");
    }
    else {
        document.getElementById("info").setAttribute("class", "w3-blue w3-panel");
    }
}

genderCue();

// Build the membership - we only want month and year

document.getElementById("membership").textContent = `Member since ${months[randomMembership.getMonth()]} ${randomMembership.getFullYear()}`

// How old is this person and where do they live

document.getElementById("demographic").textContent = `Age ${randomAge} living in ${randomCity}`

// Okay now what do they do

document.getElementById("theydo").textContent = `${randomJob} at ${randomCompany}`

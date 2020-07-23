// use JS to change the styles of each of the elements in your list
// comments = max;

var list = document.getElementsByTagName("li"); // We select everything in an li tag and make an htmlcollection

for (let item of list) {                        // iterate through the collection - older versions of browsers may not support this, but 2016 forward should
    item.style.fontStyle = "italic";            // Change each list item font-style to italic
}


// Change the class name of your second item in your list using child (in js).

var olChildren = document.getElementsByTagName("ol")[0].children;   // We select the parent element of the list and make an htmlcollection

olChildren[1].className = "lookAtMe";                               // Yes, go look at them.


// Change the text value of your last item in your list using sibling (in js).
// I mean, sure, but wouldn't using lastChild be better?

var olOtherChildren = document.getElementsByTagName("ol")[1].children;       // We select the parent element of the second list and make an htmlcollection

olOtherChildren[1].nextElementSibling.textContent = "The Bands of Mourning"; // Okay, that was tricky, I needed the next ELEMENT sibling.  Fortunately tab completion in VS Code is a thing!


// Create a second list with a list inside of it (nested list). Each list should have at least 2 items.
// Let's go with other series by the author.

var stormlightArchive = ["The Way of Kings", "Words of Radiance", "Oathbringer"];
var relatedNovels = ["Elantris", "White Sand", "Warbreaker"];
var seriesNames = ["Stormlight Archive", "Other Related Novels"];

function makeList(item, index) {                                                                // We're gonna make each list
    let node = document.createElement("li");                                                    // Define node as a new list element
    let textnode = document.createTextNode(item);                                               // define textnode as the item of whichever index the loop is on
    node.appendChild(textnode);                                                                 // Give textnode to node
    if (stage === 1) {                                                                          // If the series titles aren't there yet
        document.getElementById("theList").lastElementChild.appendChild(node);                  // make the series list
    }
    else if (stage === 2) {                                                                     // If the series titles are there, run the first list
        document.getElementById("more").firstElementChild.firstElementChild.appendChild(node);  // then we add the entries to each series
    }
    else if (stage === 3) {                                                                     // If we've filled in the first series list
        document.getElementById("more").lastElementChild.firstElementChild.appendChild(node);   // Fill in the second list
    }
}

stage = 1; // set up the first if

document.getElementById("theList").appendChild(document.createElement("ul"));                                       // Make an unordered list
document.getElementById("theList").lastElementChild.setAttribute("data-title", "More Novels by Brandon Sanderson"); // do the thing for the fancy css heading
document.getElementById("theList").lastElementChild.setAttribute("id", "more");                                     // give it an ID I can use in my function
seriesNames.forEach(makeList); // set the series titles

stage = 2; // set up the second if

document.getElementById("more").firstElementChild.appendChild(document.createElement("ol")); // make an ordered list
stormlightArchive.forEach(makeList);                                                         // set the list for the first series

stage = 3; // set up the last if

document.getElementById("more").lastElementChild.appendChild(document.createElement("ol")); // make an ordered list
relatedNovels.forEach(makeList);                                                            // set the list for the second series

//Theoretically, this is expandable, if obtuse.  I'm sure there is a better way to do this but my brain is done.


// Add a button to the bottom of the page, not in a list, with an event listener for if it's clicked

document.body.appendChild(document.createElement("button"));                // I know it's bad practice to have regular body elements after the script elements but I am tired
                                                                            // Also that's an argument to put them in the head for deferring
document.body.lastElementChild.setAttribute("id", "readMore")               // Set an id for the button
document.getElementById("readMore").textContent = "You should read more!";  // Give it some text

document.getElementById("readMore").onclick = function() { // When you click it
    window.open("https://en.wikipedia.org/wiki/Brandon_Sanderson#Bibliography","_blank"); // It opens a page to Wikipedia's bibliography for Brandon Sanderson
}












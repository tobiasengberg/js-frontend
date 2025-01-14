
function addHeader(){
    // Create the h1 element
    // Create the text
    // Add the text to h1
    // Get the html element to add to
    // Add h1 to element

    // Variables : let, const, var

    let newElement = document.createElement("h1");
    let textToAdd = document.createTextNode("This has been added!");
    newElement.appendChild(textToAdd);

    let insertion = document.getElementById("target");
    insertion.appendChild(newElement);
}

function callTheBackend(){
    fetch("https://localhost:7242/Student")
    .then(res => res.json())
    .then(data => console.log(data[0].city));
}

function callTheBackend2(){
    fetch("https://localhost:7242/Student")
    .then(function (res) { return res.json()})
    .then(function (data) { 
        console.log(data[0].city);
        console.log(data[0].age);
        let insertion = document.getElementsByClassName("point")[0];
        helperMethod("h2", data[0].age, insertion);
        let insertion2 = document.getElementsByTagName("body")[0];
        helperMethod("h3", data[0].city, insertion2);
    });
}

function helperMethod(elementType, dataValue, target) {
    let ageValue = document.createElement(elementType);
    let actualAge = document.createTextNode(dataValue);
    ageValue.appendChild(actualAge);
    target.appendChild(ageValue);
}

function callTheConsole(){
    console.log("test of fetch");
}


callTheBackend2();
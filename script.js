function array_work() {
    let myArray = [1, 2, 3, 4, 5];

    let element = document.getElementById("array");

    displayArrayOperation("Created array:", myArray, element);

    myArray.push(6);
    displayArrayOperation("Added 6 to the end:", myArray, element);

    myArray.pop();
    displayArrayOperation("Removed the last element:", myArray, element);

    myArray.unshift(0);
    displayArrayOperation("Added 0 to the beginning:", myArray, element);

    myArray.shift();
    displayArrayOperation("Removed the first element:", myArray, element);

    let index = myArray.indexOf(3);
    displayOperation("Index of 3:", index, element);

    myArray.splice(2, 1);
    displayArrayOperation("Removed element at index 2:", myArray, element);

    let newArray = myArray.concat([7, 8, 9]);
    displayArrayOperation("Concatenated with [7, 8, 9]:", newArray, element);

    let copyArray = myArray.slice();
    displayArrayOperation("Copied array:", copyArray, element);

    let subArray = myArray.slice(1, 4);
    displayArrayOperation("Subarray from index 1 to 3:", subArray, element);

    let squaredArray = myArray.map(element => element * element);
    displayArrayOperation("Squared each element:", squaredArray, element);

    let evenNumbers = myArray.filter(element => element % 2 === 0);
    displayArrayOperation("Filtered even numbers:", evenNumbers, element);

    function displayArrayOperation(description, array, element) {
        element.innerHTML += "<p>" + description + " " + JSON.stringify(array) + "</p>";
    }

    function displayOperation(description, result, element) {
        element.innerHTML += "<p>" + description + " " + result + "</p>";
    }
}
function object_work() {
    let element = document.getElementById("object");

    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 25
    };

    displayOperation("First Name: ", person.firstName, element);
    displayOperation("Last Name: ", person.lastName, element);
    displayOperation("Age: ", person.age, element);
    
    displayObjectOperation("Object in JSON: ", person, element);

    person.firstName = "Jane";
    person.age = 30;

    displayOperation("Updated First Name: ", person.firstName, element);
    displayOperation("Updated Age: ", person.age, element);
    
    person.gender = "Female";
    
    displayOperation("Gender add: ", person.gender, element);

    function displayObjectOperation(description, object, element) {
        element.innerHTML += "<p>" + description + " " + JSON.stringify(object) + "</p>";
    }

    function displayOperation(description, result, element) {
        element.innerHTML += "<p>" + description + " " + result + "</p>";
    }
}
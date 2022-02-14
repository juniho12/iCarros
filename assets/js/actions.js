
function duplicate() {
    const Numbers = [1,2,3,4,5]
    const AllNumbers = Numbers.concat(Numbers); 
    document.getElementById("duplicate").innerHTML = AllNumbers;
}


function person () {
    let  stringPerson = '{ "name": "Erick Schimdt", "age": 32, "height": 1.78}';
    let objectPerson = JSON.parse(stringPerson);


    document.getElementById("name").innerHTML = objectPerson.name;
    document.getElementById("age").innerHTML = objectPerson.age;
    document.getElementById("height").innerHTML = objectPerson.height;
}

let scopeExample = '{ "name": "Celso Tanikawa", "age": 26, "height": 1.80}';
let escopePerson = JSON.parse(scopeExample);

function scope() {
    document.getElementById("scopename").innerHTML = escopePerson.name;
    document.getElementById("scopeage").innerHTML = escopePerson.age;
    document.getElementById("scopeheight").innerHTML = escopePerson.height;
}

function scopeFalse() {
    try {
        document.getElementById("scopename").innerHTML = objectPerson.name;
        document.getElementById("scopeage").innerHTML = objectPerson.age;
        document.getElementById("scopeheight").innerHTML = objectPerson.height;
      }
      catch(err) {
        document.getElementById("result").innerHTML = err.message;
      }
}

function addSixFunction(baseNumber) {
    var six = 6;
    const newValue =  six + baseNumber;
    alert(newValue);
}
 
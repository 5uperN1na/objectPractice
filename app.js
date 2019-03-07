//JavaScript is a functional language, and for object oriented programming it uses both objects and functions, but objects are usually used as a data structure, similar to a dictionary in Python or a map in Java.

//(To initialize an object, use curly braces)

let personObject = {
    firstName: "Paula",
    lastName: "Suarez"
}

//Member addressing
//Members of objects can be addressed using the brackets operator [], very much like arrays, but just like many other object oriented languages, the period . operator can also be used.

personObject.age = 42;
personObject["salary"] = 10000000000;

//Iteration
//Use the hasOwnProperty method to check that the member in fact belongs to the object.


for (let member in personObject) {
    if (personObject.hasOwnProperty(member)) {
        console.log("the member " + member + " of personObject is " + personObject[member])
    }
}

//Object.entries

let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}


Object.entries(obj).forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(key);
    console.log(value);
    //use key and value here
});

//Object.keys

let obj1 = {
    key1: "value4",
    key2: "value5",
    key3: "value6"
}

Object.keys(obj1).forEach(keyy => {
    let value = obj1[keyy];
    console.log(value);

});

//for…in loop

let obj2 = {
    key1: "value7",
    key2: "value8",
    key3: "value9"
}

for (const key in obj2) {
    let value = obj2[key];

    if (obj2.hasOwnProperty(key)) {
       console.log(value);    
    }
}

//Object.getOwnPropertyNames

let obj3 = {
    key1: "value10",
    key2: "value11",
    key3: "value12"
  }
  
  Object.getOwnPropertyNames(obj3).forEach(key => {
    let value = obj3[key];
    console.log(value);
  });
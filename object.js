const data = {
    "name" : "Kristina",
    "age": 19,
    "hobby": {
        "reading" : true,
        "horseback riding" : true,
        "swimming" : false
    },
    "class" : ["JavaScript", "Ruby", "Java"]
}

console.log(data);

console.log(data.class[2]);

console.log(data.name);

console.log(data.age);


// JSON serialization
// marshal, unmarshall

const string = JSON.stringify(data);

console.log(string.hobby); // undefined, it's not an object anymore, it's a string

//  unmarshall

const object = JSON.parse(string);

console.log(object);
console.log(object.hobby);

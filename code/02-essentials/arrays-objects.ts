let hobbies = ['Sports', 'Cooking'];

// hobbies.push(10);

// let users: (string | number)[];
// below one is the another way of assigning types
let users: Array<string | number>;

users = [1, 'Max'];
users = [5, 1];
users = ['Max', 'Anna'];


// when we want fixed lenght array with fixed types then we should go with tuples 
let possibleResults: [number, number]; // [1, -1] tuple

possibleResults = [1, -1];
// possibleResults = [5, 10, 12]; this will give the error


// objects in ts

// let user={
//   name: 'Max',
//   age: 38,
//   hobbies: ['Sports', 'Cooking'],
//   role: {
//     description: 'admin',
//     id: 5
//   }
// };
// in above initialization of object ts will automatically decides the types of it which
// is similar to below one

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  }
} = {
  name: 'Max',
  // keys in the objects are string type even if we specify in the string format or not and also key type can be number 
  'age': 38,
  'hobbies': ['Sports', 'Cooking'],
  role: {
    description: 'admin',
    id: 5
  }
};


// {} is an empty object which will able to take any but not null and undefined
// let val:{}=null  --> gives the error
// let val:{}=undefined --> gives the error
let val: {} = 'is a value';


// Record
// Record is another type of object which forces us to specify the key type and value types
// let data: Record<number, number | string>; this will give error

let data: Record<string, number | string>;
data = {
  entry1: 1,
  entry2: 'some string'
};
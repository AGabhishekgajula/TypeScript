// enum is part of ts 
// enum Role {
//   default the number starts with 0
//   we can also assign the starting value like Admin=1 where it starts with 1
//   Admin,
//   Editor,
//   Guest,
// }

// type is used to create our own type 
// type MyNumber = number;
type Role = 'admin' | 'editor' | 'guest' | 'reader';
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

let userRole: Role = 'admin';

// ...

userRole = 'guest';

let possibleResults: [1 | -1, 1 | -1]; // [1, -1]

possibleResults = [1, -1];

// function access(role:'admin' | 'editor' | 'guest' | 'reader'){

// }
// now above function role type can be minimized using type Role
function access(role: Role) {
  // ...
}
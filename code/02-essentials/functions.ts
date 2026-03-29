// below two functions are same but in the commented one we are specifying the type explicitly
// function add(a: number, b: number):number {
//   return a + b;
// }

function add(a: number, b: number) {
  return a + b;
}

function log(message: string) {
  console.log(message);
}

// never is used to specify the given variable or function return type will never give something

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
  console.log(msg);
};
// used in call backs

function performJob(cb: (msg: string) => void) {
  // ...
  cb('Job done!');
}

performJob(log);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: 'Max',
  age: 39,
  greet() {
    console.log('Hello there!');
    return this.name;
  }
}

user.greet();
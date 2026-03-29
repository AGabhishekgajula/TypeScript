function generateError(msg?: string) {
  throw new Error(msg);
}
// we can call generateError without arguement because we made msg as optional parameter 
// by keepting the question mark
generateError();

type User = {
  name: string;
  age: number;
  role?: 'admin' | 'guest'
};

//nullish operator 
let input = '';
const didProvideInput = input ?? false;

// const inputEl = document.getElementById('user-name');
// // in the above stmt the inputE1 type might be HTMLElement|null;
// // if (!inputEl) {
// //   throw new Error('Element not found!');
// // }
//    after the above if the type will be narrowed to HTMLElement this is called type narrowing

// console.log(inputEl.value);

// sortcut for the type narrowing is keeping the exclamation mark at end of stml
// likeconst inputEl = document.getElementById('user-name')!;
// console.log(inputEl.value);
// or 
// likeconst inputEl = document.getElementById('user-name');
// we can use at console.log(inputEl?.value);  here we are accessing only if it is not null
// the difference between both is first one will through the runtime error becoz inputEl.value

// below is specific way specify the element usig type casting 
const inputEl = document.getElementById('user-name') as HTMLInputElement | null;

// if (!inputEl) {
//   throw new Error('Element not found!');
// }

console.log(inputEl?.value);
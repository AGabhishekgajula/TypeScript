// function getLength(val: any[]): number;

// function getLength(val: string | any[]) {
//   if (typeof val === 'string') {
//     const numberOfWords = val.split(' ').length;
//     return `${numberOfWords} words`;
//   }
//   return val.length;
// }
// const numOfWords = getLength('does this work?');
// numOfWords.length;-> this will give the error because we are not sure that this function will return string it can be a number 
// since it depends onthe parameter that we are passing

// for above problem we can use the function overloading concept

function getLength(val: any[]): number;
function getLength(val: string): string;
function getLength(val: string | any[]) {
  if (typeof val === 'string') {
    const numberOfWords = val.split(' ').length;
    return `${numberOfWords} words`;
  }
  return val.length;
}

const numOfWords = getLength('does this work?');
numOfWords.length;
const numItems = getLength(['Sports', 'Cookies']);
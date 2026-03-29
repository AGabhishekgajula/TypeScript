let userName: string; // number, boolean
let userAge = 38; //in this case ts automatically assign userAge type as number

// ...

userName = 'Max';
// userAge = '34';

function add(a: number, b = 5) {
  return a + b;
}

add(10);
// add('10');
add(10, 6);
// add(10, '6');


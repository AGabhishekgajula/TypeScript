// union types
let age: string | number = 36;

// ...let age: any | number = 36;
// any type gives flexibility but we will loose the feature of ts
age = '37';
age = false;
age = {};
age = [];
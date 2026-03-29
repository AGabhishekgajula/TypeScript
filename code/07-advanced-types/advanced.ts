// this feature is called indexing 
type DataStore = {
  [prop: string]: number | boolean;
};
// below statement is similar to above type
// let someObj:Record<string,number|boolean>;

let store: DataStore = {};

// ...

store.id = 5;
store.isOpen = false;
// store.name = 'Max';

let roles = ['admin', 'guest', 'editor'] as const;
// roles.push('max');
const firstRole = roles[0];

const dataEntries = {
  entry1: 0.51,
  entry2: -1.23
} satisfies Record<string, number>;

// ...
// below satement will through the error if we dont use ht satisfies in the above object
// dataEntries.entry3
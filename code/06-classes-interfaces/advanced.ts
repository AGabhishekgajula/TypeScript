// classes are vanilla js features but not ts exclusive instead it enhances the features
//diff btw ts and js class
// class User{
//   constructor(){
//     this.username="Mas";
//   }
// }
// ts class is
// class User{
//   usenamer:"Mas";
// }
// there is a shortcut way to create class
// class eg{
//   username:string;
//   pass:string;
//   constructor(n:string,p:string){
//     this.username=n;
//     this.pass=p;
//   }
// }
// instead of above syntax we can also use below syntax
// class eg{
//   constructor(public username:string,public pass:string){
//     // this will automatically creates and intializes
//   }
// }
// publc and private exclusive ts features
// default will be public in the ts classes
// we can also use readonly along with access modifiers 
// like protected readonly numb:number;
class User {
  protected _firstName: string = '';
  private _lastName: string = '';

  set firstName(name: string) {
    if (name.trim() === '') {
      throw new Error('Invalid name.');
    }
    this._firstName = name;
  }

  // getter and setter are the used as properties of the class not like functions 
  set lastName(name: string) {
    if (name.trim() === '') {
      throw new Error('Invalid name.');
    }
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + ' ' + this._lastName;
  }

  static eid = 'USER';

  static greet() {
    console.log('Hello!');
  }
}

console.log(User.eid);
User.greet();

const max = new User();
max.firstName = 'Max';
max.lastName = '';
// max._firstName = 'Max 2';
console.log(max.fullName);

class Employee extends User {
  constructor(public jobTitle: string) {
    super();
    // super.firstName = 'Max';
  }

  work() {
    // ...
    console.log(this._firstName);
    // super._firstName
  }
}

// abstract class is exclusie feature of ts but not in js
abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    // logic to duplicate the UI element
  }
}

// let uiElement = new UIElement();

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: 'left' | 'right') {
    super(identifier);
  }

  // ...
}

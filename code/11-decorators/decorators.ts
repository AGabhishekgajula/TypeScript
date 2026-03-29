// in the below stmt extends new means its a type of class
function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  // below three console stmts are executed once when @logger is attached with class
  console.log('logger decorator');
  console.log(target);
  console.log(ctx);

  // here we are merging the blow class with Person class
  // return stmt will be executed every time whenever an object is created

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log('class constructor');
      console.log(this);
    }
  };
}

// method decorator
// method decorators will be executed before class decorators
function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext
) {
  // addIntialalizer will the add the given function as constructor in the context class
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any) {
    console.log('Executing original function');
    target.apply(this);
  };
}

function replacer<T>(initValue: T) {
  return function replacerDecorator(
    target: undefined,
    ctx: ClassFieldDecoratorContext
  ) {
    console.log(target);
    console.log(ctx);

    return (initialValue: any) => {
      console.log(initialValue);
      return initValue;
    };
  };
}

@logger
class Person {
  @replacer('')
  name = 'Max';

  @autobind
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

const max = new Person();
const greet = max.greet;
greet();
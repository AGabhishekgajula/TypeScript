// interface is available in ts not in js
// interfaces and type works mostly similar

// type Authenticatable= {
//   email: string;
//   password: string;

//   login(): void;
//   logout(): void;
// }

interface AuthenticatableAdmin extends Authenticatable {
  role: 'admin' | 'superadmin';
}

// above technique is called interface merging it works like we can add the declaration 
//by extending interface or we can create another interface with the same name but we wont get any arror

class AuthenticatableUser implements Authenticatable {
  constructor(
    public userName: string,
    public email: string,
    public password: string
  ) {}

  login() {
    // ...
  }

  logout() {
    // ...
  }
}

// ...

function authenticate(user: Authenticatable) {
  user.login();
}

// type Authenticatable = {
//   role: string;
// }


// interface can be used as a type like shown below
let user: Authenticatable;

user = {
  email: 'test@example.com',
  password: 'abc1',
  login() {
    // reach out to a database, check credentials, create a session
  },
  logout() {
    // clear the session
  },
};

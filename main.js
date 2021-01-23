// console.log('Connected')

// ***********Dot and Bracket Notation****************
 
// const firstObj = {};

// const user = {
//   username: 'biz.markie',
//   password: 'abd123',
//   lovesJavaScript: true,
//   favoriteNumber: 42,
// }

//Dot Notation
// const password = 'password';
// console.log(user[password]);
// console.log(user['username']);

// ASSIGNING VALUES ************

const newUser = {
  isNew: true,
}

// newUser.username = 'fresh.prince' //dot notation
// newUser['password'] = 'abcd1234'; //bracket notation;
// newUser[1] = 'abcd1234'; //bracket notation;
// console.log(newUser);


const newObject = {
  username: 'jim',
  sayHello: function () {
    console.log(`${this.username} says, "Hi, Everyone!"`) 
  }
}
// console.log(newObject.sayHello); //don't forget the ()

// newObject.username = 'Aja';
// newObject.sayHello();

// ***********ITERATE OVER AN OBJECT ****************
const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz0987',
  lovesJavaScript: true,
  favoriteNumber: 12,
}

for (let key in userTwo) {
  // console.log(userTwo.key); //won't work with dot notation
  console.log(userTwo [key]);

}

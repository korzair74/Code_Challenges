// It is crucial that you guys understand these concepts otherwise you will struggle in react.
// Write a class called Student that accepts a name, email, and favorite programming language.
// Write two static methods and two instance methods.
// The first instance method should return the student’s name email and fav language
// The second instance method should return the students’ favorite programming language
// The two static methods should just console.log whatever you’d like
// Extra Credit: Make a default parameter

class Student {
  constructor({ name, email, favLang = "Javascript" }) {
    this.name = name;
    this.email = email;
    this.language = favLang;
  }  
}

const chris = new Student({name: "Chris", email: "chris.nickel.dev@gmail.com"})

  details() {
    console.log(`${this.name} - ${this.email} - ${this.favLang}`)
  }
console.log(chris)
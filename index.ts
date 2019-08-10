interface Person {
  firstName: string;
  lastName:  string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = {
	firstName: "Harry",
  lastName:  "Reynolds"
};

document.querySelector("#app").innerHTML = greeter(user);

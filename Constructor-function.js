function User(name) {
    console.log(this);
    this.name = name;
    // console.log(this.name);
}

const newFunction = new User("pratham");
console.log(newFunction.name);
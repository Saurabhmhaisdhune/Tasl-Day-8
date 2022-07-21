class ClassMates{
	constructor(name,age){
    	this.name=name;
      	this.age=age;
    }
  	displayInfo(){
    	return this.name + " is " + this.age + " years old!";
    }
}

let classmate = new ClassMates("Mike Will",15);
classmate.displayInfo();
console.log(classmate.displayInfo());

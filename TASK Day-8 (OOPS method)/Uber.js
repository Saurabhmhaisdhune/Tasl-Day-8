class uberprices{
	constructor(time,perminutes){
    	this.time=time;
      	this.perminutes=perminutes;
    }
  	displayInfo(){
    	return "the cost of uber after "+ this.time +" minutes is "+ this.time*this.perminutes+" rupees";
    }
}

let Uberprice = new uberprices(25,72);
Uberprice.displayInfo();
console.log(Uberprice.displayInfo());

/* Example program for class in ES6 */

//Base class Vehicle
class Vehicle
{
  //Constructor to initialize values
  constructor(make, year)
  {
    //Initializing base class variables
    this._make = make;
    this._year = year;
  }

  //Get function to return make value
  get make()
  {
    //Returning the make value
    return this._make;
  }

  //Get function to return year value
  get year()
  {
    //Returning the year value
    return this._year;
  }

  //Return the string value
  toString()
  {
    //Reurning the string
    return `Vehicle ${this.make} ${this.year}`;
  }
}

//Child class Motorcycle which inherit the base class Vehicle
class Motorcycle extends Vehicle
{
  //Constructor to initialize values
  constructor(make, year, type)
  {
    //Calling super constructor of vehicle base class
    super(make, year);
    //Initializing child class variables
    this._type = type;
  }

  //Get function to return type value
  get type()
  {
    //Returning the type value
    return this._type;
  }

  //Return the string value
  toString()
  {
    //Reurning the string
    return `Motorcycle ${this.make} ${this.year} ${this.type}`;
  }
}

//Child class FourWheeler which inherit the base class Vehicle
class FourWheeler extends Vehicle
{
  //Constructor to initialize values
  constructor(make, year, type)
  {
    //Calling super constructor of vehicle base class
    super(make, year);
    //Initializing child class variables
    this._type = type;
  }

  //Get function to return type value
  get type()
  {
    //Returning the type value
    return this._type;
  }

  //Return the string value
  toString()
  {
    //Reurning the string
    return `FourWheeler ${this.make} ${this.year} ${this.type}`;
  }
}

//Object creation
var vehicle = new Vehicle('Toyota Corolla', 2009);
var two = new Motorcycle('Corolla', 2010 , 'Motor');
var four = new FourWheeler('Maruti', 2012 , 'Four');

//Base class Vehicle variables values displaying
console.log(vehicle.make);
console.log(vehicle.year);

//Initializing Base class Vehicle variables
vehicle.make = 'Ford Mustang';
vehicle.year = 2008;

//Base class Vehicle toString values displaying
console.log(vehicle.toString());

//Child class Motorcycle variables values displaying
console.log(two.type);

//Initializing Child class Motorcycle variables
two.type = 'Motor Two';

//Child class Motorcycle toString values displaying
console.log(two.toString());

//Child class FourWheeler variables values displaying
console.log(four.type);

//Initializing Child class FourWheeler variables
two.type = 'Four Lux';

//Child class FourWheeler toString values displaying
console.log(four.toString());

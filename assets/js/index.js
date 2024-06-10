class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate;
  }

  getFullInfo() {
    return `Brand: ${this.brand}, Model: ${this.model}, Age: ${this.age}`;
  }

  get age() {
    return (
      new Date().getFullYear() - new Date(this.manufactureDate).getFullYear()
    );
  }
}

class PassengerTransport extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimensions, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }

  addPassenger() {
    if (this.passengerLimit <= this.passengerCount) {
      return false;
    } else {
      this.passengerCount++;
      return true;
    }
  }

  getFullInfo() {
    return `Brand: ${this.brand}, Model: ${this.model}, Age: ${this.age}, Max passengers: ${this.passengerLimit}`;
  }
}

class FreightTransport extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    this.capacity = capacity;
  }

  checkLoadingPossibility(weight) {
    return weight <= this.capacity;
  }

  getFullInfo() {
    return `Brand: ${this.brand}, Model: ${this.model}, Age: ${this.age}, Capacity: ${this.capacity}`;
  }
}

//-------------------------------------------------------------------------------
const vehicle1 = new Vehicle(
  { length: "4859 mm", width: "1933 mm", height: "1293 mm" },
  "Dodge",
  "Challenger",
  "2019-10-03"
);

console.log(`Our vehicle: `, vehicle1);
console.log(`Number of years from the date of production: `, vehicle1.age);
console.log(`Full info: `, vehicle1.getFullInfo());

//-------------------------------------------------------------------------------
const passengerTransport1 = new PassengerTransport(
  { length: "4910 mm", width: "1820 mm", height: "1850 mm" },
  "Dodge",
  "Durango",
  "2014-06-29",
  5,
  2
);

console.log(`Our passenger transport: `, passengerTransport1);
console.log(
  `Number of years from the date of production: `,
  passengerTransport1.age
);
console.log(`Full info: `, passengerTransport1.getFullInfo());
console.log(`Passenger added: `, passengerTransport1.addPassenger());
console.log(`Passenger added: `, passengerTransport1.addPassenger());
console.log(`Passenger added: `, passengerTransport1.addPassenger());
console.log(`Passenger added: `, passengerTransport1.addPassenger());

//-------------------------------------------------------------------------------
const freightTransport1 = new FreightTransport(
  { length: "4859 mm", width: "1933 mm", height: "1293 mm" },
  "Dodge",
  "Challenger",
  "2019-10-03",
  600
);

console.log(`Our freight transport: `, freightTransport1);
console.log(
  `Number of years from the date of production: `,
  freightTransport1.age
);
console.log(`Full info: `, freightTransport1.getFullInfo());
console.log(`Can load 400kg: `, freightTransport1.checkLoadingPossibility(400));
console.log(`Can load 600kg: `, freightTransport1.checkLoadingPossibility(600));
console.log(`Can load 900kg: `, freightTransport1.checkLoadingPossibility(900));

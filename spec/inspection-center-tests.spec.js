var a = require('../inspection-line.js');
var b = require('../car.js');

describe("Car", function (){

	describe("when created without specifying correclty the plateNumber", function() {

		var car;	

		it("should be undefined", function () {
			car = b.car({});
			expect(car).toBeUndefined();
			car = b.car({'platenumber' : 'EFW-773'});
			expect(car).toBeUndefined();
		});
	});

	describe("when created with an empty string representing the plate number", function () {
		var car;	

		it("should be undefined", function () {
			car = b.car({'plateNumber' : ''});
			expect(car).toBeUndefined();	
		});
	});

	describe("when created with a valid plate number", function () {
		var car = b.car({'plateNumber' : 'EFW-773'});

		it("should not be 'undefined'", function () { 
			expect(car).not.toBeUndefined();
		});

		it("should expose this plate number through its interface", function () {
			expect(car.getPlateNumber()).toBe('EFW-773');
		});
	});

});

describe("InspectionLine", function() {
	var inspectionLine;

	beforeEach(function () {
		inspectionLine = a.inspectionLine({'id' : 1});
	});

	describe("when created", function() {

		it("should be not occupied by a car being inspected", function() {
			expect(inspectionLine.occupied).not.toBe(true);
			expect(inspectionLine.occupied).toBe(false);
		});

		it("should be free", function() {
			expect(inspectionLine.free).toBe(true);		
			expect(inspectionLine.free).not.toBe(false);			
		});

		it("should not expose a car through its interface", function () {
			expect(inspectionLine.assignedCar).toBeUndefined();
		});

	});

	describe("when not occupied and a car is removed", function () {
		it("should indicate that no car has been removed", function () {
			expect(inspectionLine.removeCar()).toBe(false);
		});
	});
	
	describe("when a car is assigned to the line", function() {

		var car = b.car({'plateNumber' : '516-CEC'});

		beforeEach(function () {
			inspectionLine.assignCar(car);
		});

		it("should be occupied", function() {
			expect(inspectionLine.occupied).toBe(true);
		});
		it("should not be free", function () {
			expect(inspectionLine.free).toBe(false);
		});
		it("should expose the assigned car through its interface", function () {
			expect(inspectionLine.assignedCar).toBe(car);
		});

	});

	describe("when a car previously assigned is removed form the line", function () {
		var car = b.car({'plateNumber' : '516-CEC'});
		var removeResult = false;

		beforeEach(function () {
			removeResult = false;
			inspectionLine.assignCar(car);
			removeResult = inspectionLine.removeCar();
		});


		it("should not expose the car through its interface", function () {
			expect(inspectionLine.assignedCar).toBeUndefined();
		});

		it("should be free", function () {
			expect(inspectionLine.free).toBe(true);
		});

		it("should not be occupied", function () {
			expect(inspectionLine.occupied).toBe(false);
		});

		it("should indicates that a car has been removed", function () {
			expect(removeResult).toBe(true);
		});

	});

});
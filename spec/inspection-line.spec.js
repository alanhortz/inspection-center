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

	describe("when created with an empty string reprenting the plate number", function () {
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
	})
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
	});
	/*
	describe("when a car is assigned to the line", function() {

		beforeEach(function () {

			inspectionLine.assignCar();
		});

		it("should be occupied", function() {

		});
	});
*/
});
var a = require('../inspection-line.js');

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
});
var inspectionLine = function (spec, my) {
	var that = {};

	my = my || {};

	that.occupied = false;
	that.free = true;
	that.assignedCar;

	that.getId = function () {
		return spec.id;
	};

	that.assignCar = function (car) {
		that.assignedCar = car;
		that.occupied = true;
		that.free = false;
	};

	that.removeCar = function () {
		if(that.occupied === true) {
			that.assignedCar = undefined;
			that.occupied = false;
			that.free = true;
			return true;
		} else {
			return false;
		}
		
	};


	return that;
};

exports.inspectionLine = inspectionLine;
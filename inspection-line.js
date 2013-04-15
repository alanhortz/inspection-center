var inspectionLine = function (spec, my) {
	var that = {};

	my = my || {};

	that.getId = function () {
		return spec.id;
	};

	that.occupied = false;
	that.free = true;

	return that;
};

exports.inspectionLine = inspectionLine;
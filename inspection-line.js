exports.inspectionLine = function (spec, my) {
	var that = {};

	my = my || {};

	that.getId = function () {
		return spec.id;
	};

	return that;
};
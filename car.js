var car = function (spec, my) {
	
	if(!spec || !spec.plateNumber)
	{
		return;
	}

	var that = {};

	my = my || {};

	that.getPlateNumber = function () {
		return spec.plateNumber;
	};



	return that;
};

exports.car = car;
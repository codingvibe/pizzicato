Pizzicato.Util = {

	isString: function(arg) {
		return toString.call(arg) === '[object String]';
	},

	isObject: function(arg) {
		return toString.call(arg) === '[object Object]';
	},

	isFunction: function(arg) {
		return toString.call(arg) === '[object Function]';
	},

	isNumber: function(arg) {
		return toString.call(arg) === '[object Number]' && arg === +arg;
	},

	getDryLevel: function(mix) {
		if (!Pz.Util.isNumber(mix) || mix > 1 || mix < 0)
			return 0;

		if (mix <= 0.5)
			return 1;

		return 1 - ((mix - 0.5) * 2);
	},

	getWetLevel: function(mix) {
		if (!Pz.Util.isNumber(mix) || mix > 1 || mix < 0)
			return 0;

		if (mix >= 0.5)
			return 1;

		return 1 - ((0.5 - mix) * 2);
	}

};
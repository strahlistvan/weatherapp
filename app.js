var app = angular.module("weatherApp", [ ]);

/** This filter converts Kelvin degree to Celsius format 
 **/
app.filter("celsius", function() {
	return function(kelvinInput)
	{
	   if (isNaN(kelvinInput))
	       return "0 °C";
		   
		var celsius = Math.floor(kelvinInput - 273.15);
		return celsius+" °C"
		
	}
});

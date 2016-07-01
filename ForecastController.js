app.controller("ForecastController", ["$scope", "getCoordsService", "$http", function($scope, getCoordsService, $http) { 
  $scope.coords = getCoordsService();
  $scope.weatherApiKey = "15bfd5d7f3daa9636b3fb1d3a68bc28a";
  $scope.allDayWeather = [];
  $scope.numberOfDays = 16;
   
   var url = "http://api.openweathermap.org/data/2.5/forecast/daily?lat="+$scope.coords.latitude+"&lon="+$scope.coords.longitude+"&appid="+$scope.weatherApiKey+"&cnt="+$scope.numberOfDays;
   
   $http.get(url)
   .success(function(response) {

        for (var i=0; i<response.list.length; ++i)
        {
			var dailyData = {};
			dailyData.dayTemp = response.list[i].temp.day;
			dailyData.nightTemp = response.list[i].temp.night;
			dailyData.weather_desc = response.list[i].weather[0].description;
			dailyData.iconURL = "http://openweathermap.org/img/w/"+response.list[i].weather[0].icon+".png";
			
			$scope.allDayWeather.push(dailyData);
			console.log(i+": "+JSON.stringify(response.list[i]));
		}
   })
   .then(function(err){
		console.log(err);
   });
   
   
   $scope.daysCount = 9;
   $scope.isHidden = function(index)
   {
		if ($scope.daysCount > index)
			return false;
		return true;
   }
   
}]);

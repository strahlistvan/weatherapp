/** Main controller of the application */
app.controller("MainController", ["$scope", "getCoordsService", "$http", function($scope, getCoordsService, $http) { 
  $scope.title = "Weather forecast application";   
  $scope.coords = getCoordsService();
  $scope.weatherApiKey = "15bfd5d7f3daa9636b3fb1d3a68bc28a";
  
   var url = "http://api.openweathermap.org/data/2.5/weather?lat="+$scope.coords.latitude+"&lon="+$scope.coords.longitude+"&appid="+$scope.weatherApiKey;
   $http.get(url)
   .success(function(response) {
        console.log(JSON.stringify(response));
		$scope.weatherData = response.main;
		$scope.country = response.name;
		$scope.iconURL = "http://openweathermap.org/img/w/"+response.weather[0].icon+".png";
		$scope.weather_desc = response.weather[0].description;
   })
   .then(function(err){
		console.log(err);
   });
}]);

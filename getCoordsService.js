/**   getCoordsService - select the browser location from JS geolocation
 *   if navigator.geolocation disabled, return with a rough guess from the browser language
 */
app.factory("getCoordsService", function(){
	var latitude = 0;
	var longitude = 0;
	var browserLang = "US";  //let's suppose we are in the USA
	
	/* Return (latitude, longitude) coordinates from the browser data */
	return function()
	{
		//Get position from the browser language
		if (navigator.language) 
		{ 
			console.log(navigator.language);
			browserLang = navigator.language.substr(-2).toUpperCase();
			for (var i in allCountries)
			{
				if (allCountries[i].cca2.toUpperCase() == browserLang.toUpperCase())
				{
					latitude = allCountries[i].latlng[0];
					longitude = allCountries[i].latlng[1];
				}
			}			
		}
		
		//if we can use the browser's geolocation function, we can get more precise coordinates
		if (navigator.hasOwnProperty("geolocation")) 
		{
			navigator.geolocation.getCurrentPosition(function() 
			{
				latitude = position.coords.latitude;
				longitude = position.coords.longitude;	
			});
		}
		return {"latitude": latitude, "longitude": longitude};
	}	
});

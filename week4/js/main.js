var myMap = L.map('myMap').setView([34.419201, -119.698634], 12);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
						
	{
	
	 attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	 maxZoom: 18
}).addTo(myMap);

var coffeeMarker = L.marker ([34.422427, -119.698366]);
coffeeMarker.bindPopup('Handlebar Coffee Roasters');
coffeeMarker.addTo(myMap);

var myHome = L.marker ([34.415012, -119.702456]);
myHome.bindPopup('Our House');
myHome.addTo(myMap);

var dailyGrind = L.marker([34.437837, -119.727060]);
dailyGrind.bindPopup('The Daily Grind');
dailyGrind.addTo(myMap);

var iceCream = L.marker ([34.419491, -119.698774]);
iceCream.bindPopup("McConnel's Ice Cream");
iceCream.addTo(myMap);

var restaurant = L.marker([34.420420, -119.702533]);
restaurant.bindPopup('Finch & Fork');
restaurant.addTo(myMap);

var gym = L.marker([34.420460, -119.699802]);
gym.bindPopup('24 Hour Fitness');
gym.addTo(myMap);

var theater = L.marker([34.424597, -119.706475]);
theater.bindPopup('Arlington Theater');
theater.addTo(myMap);

var barber = L.marker([34.420802, -119.644996]);
barber.bindPopup("Richie's Barbershop");
barber.addTo(myMap);

// #1 Console 0 - 100 in increments of 5
for (var i = 0; i <= 100; i += 5) {
	console.log(i)
}
// #2 Save a variable value using getElementById and .value
function saveUser() {
	var username = document.getElementById('username').value
	console.log(username)
}
// Create 3 car objects with 4 properties
var toyato = {
		make: 'Toyato',
		model: 'Camry',
		year: 2015,
		sold: false,
		img: 'img/camry.jpg'
	}

var sabb =	{
		make: 'Sabb',
		model: '93 turbo',
		year: 2013,
		sold: false,
		img: 'img/sabb.jpg'
	}
var volvo = {
		make: 'Ford',
		model: 'Focus',
		year: 2012,
		sold: false,
		img: 'img/ford.jpg'
	}

// Create an array of those 3 objects
var cars = [toyato, sabb, volvo]

// Display that information on the page under an image of each car, add the images as one of the object's properties
function showCars() {
	for(i = 0; i < cars.length; i++) {
		var p = document.createElement("p"),
			h1 = document.createElement("h1"),
			h2 = document.createElement("h1")
			img = document.createElement("img");
		p.innerHTML = cars[i].make
		h1.innerHTML = cars[i].model
		h2.innerHTML =cars[i].year
		img.setAttribute("src", cars[i].img);
		document.getElementById("cars").appendChild(h1)
		document.getElementById("cars").appendChild(h2)
		document.getElementById("cars").appendChild(p)
		document.getElementById("cars").appendChild(img)
	}
}

showCars()
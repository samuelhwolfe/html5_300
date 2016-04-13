var numbers = [];
var reset = "";

function addNumber(){
	
	var x = document.getElementById("userInput").value;
	
	if (isNaN(x)) {
		//alert("must be a number");
		document.getElementById("userInput").value='';
		document.getElementById("error").innerHTML = "Dude, that's not a number";
	}
	
	else {
		
		//clears the error message when a number is pressed

		document.getElementById("error").innerHTML = '';

		//variable that translates user input from text to integers
		var integers = parseFloat(document.getElementById("userInput").value, 10);

		//pushes 'var integers' into 'var numbers'
		numbers.push(integers);

		//resets the input text box
		document.getElementById("userInput").value=''; 

		//calculates array length and outputs it to #total
		document.getElementById("total").innerHTML = numbers.length; 

		//use reduce to calculate sum of numbers array
		var sum = numbers.reduce(function(prev,next) {
			prev += next;
			return prev;
		},0);

		//output 'var sum' to #sum
		document.getElementById("sum").innerHTML = sum;

		var max = Math.max.apply(null, numbers);

		//output 'var max' to #max
		document.getElementById("max").innerHTML = max;

		var avg = sum / numbers.length

		//output 'var avg' to #avg
		document.getElementById("avg").innerHTML = avg;


		console.log(numbers);
		console.log("reduce(): " + sum);
		console.log(max);
		console.log(avg);
		console.log(x);

			}
}

function resetForm(){
	
	document.getElementById("error").innerHTML = '';
	var element = document.getElementById("total");
	element.innerHTML = reset;
	var element = document.getElementById("sum");
	element.innerHTML = reset;
	var element = document.getElementById("avg");
	element.innerHTML = reset;
	var element = document.getElementById("max");
	element.innerHTML = reset;
	
	numbers.length = 0;
	
}








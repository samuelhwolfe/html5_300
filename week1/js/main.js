//global variables numbers
//numbers = user submitted array
//reset = back to square zero

var numbers = [];
var reset = "";

function addNumber(){
	
	var x = document.getElementById("userInput").value;
	
	//if user submitted value is not a number or doesn't exist
	if ((isNaN(x)) || (x == null || x == "")) {
		document.getElementById("userInput").value='';
		document.getElementById("error").style.display = 'block';
		document.getElementById("error").innerHTML = "Dude seriously? That's not a number. Don't waste my time.";
	}
	
	else {
		
		//clears the error message when a number is entered
		document.getElementById("error").innerHTML = '';
		
		//sets #error back to display:none
		document.getElementById("error").style.display = 'none';

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
	
	//clears error emssage when reset button is pressed
	document.getElementById("error").innerHTML = '';
	
	//sets #error back to display:none
	document.getElementById("error").style.display = 'none';
	
	//resets all values back to var reset
	var element = document.getElementById("total");
	element.innerHTML = reset;
	var element = document.getElementById("sum");
	element.innerHTML = reset;
	var element = document.getElementById("avg");
	element.innerHTML = reset;
	var element = document.getElementById("max");
	element.innerHTML = reset;
	
	//resets numbers array to zero values
	numbers.length = 0;
	
}








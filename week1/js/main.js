var numbers = [];


function addNumber(){


	numbers.push(document.getElementById("userInput").value);
	//resets the input text box
	document.getElementById("userInput").value=''; 
//	//calculates array length and outputs it to #total
//	document.getElementById("total").innerHTML = numbers.length; 


	
	console.log(numbers);
	
}





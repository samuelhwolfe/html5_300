function checkboxIcon(){
	
	var x = document.getElementById("checkboxIcon");
	
	if(x.checked) document.getElementById("checkbox-text").innerHTML = "True";
	
	else {
		document.getElementById("checkbox-text").innerHTML = "False";
	}

}

function radioIcons(){
	
	var x = document.getElementById("firstRadio");
	var y = document.getElementById("secondRadio");
	var z = document.getElementById("thirdRadio");
	
	if(x.checked) document.getElementById("radio").innerHTML = "First";
	
	if(y.checked) document.getElementById("radio").innerHTML = "Second";
	
	if(z.checked) document.getElementById("radio").innerHTML = "Third";
	
}

function inputText(val){
	document.getElementById("text").innerHTML = document.getElementById("inputText").value;
}

function textareaText(val){
	document.getElementById("textarea").innerHTML = document.getElementById("textareaText").value;
}

function selectOption(){
	var x = document.getElementById("selectOption").selectedIndex;
	document.getElementById("select").innerHTML = document.getElementById("selectOption").value;
}

function clearAll(){
	window.location.reload();
}
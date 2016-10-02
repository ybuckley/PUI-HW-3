console.log("Hi");

function buttonclicked(){
	var wholelist = document.getElementById("list");

	var eatapple = document.getElementById("taskinput").value;
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox"
	checkbox.className = "pull-right"
	
	var entry = document.createElement("li");

	//document.getElementById("taskinput").value ="bwork yourself";

	entry.appendChild(document.createTextNode(eatapple))
	entry.appendChild(checkbox)
	entry.className = "list-group-item";
	wholelist.appendChild(entry);	

}
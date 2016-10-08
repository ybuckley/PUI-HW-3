console.log("Hi");

function buttonclicked(){
	var wholelist = document.getElementById("list");

	var taskinput = $("input:text").val();
	console.log(taskinput);
	var check = $("<input name='checking' type='checkbox' class='pull-right'>");

	$("#list")
		.append($("<li>").text(taskinput).append(check));

	/*
	var eatapple = document.getElementById("taskinput").value;
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox"
	checkbox.className = "pull-right"
	
	var entry = document.createElement("li");

	



	entry.appendChild(document.createTextNode(eatapple))
	entry.appendChild(checkbox)
	entry.className = "list-group-item";
	wholelist.appendChild(entry);	*/

}
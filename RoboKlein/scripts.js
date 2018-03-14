$("#addbtn").click(roboclone);
$(".trashbtn").click(robodelete);
$("#submitbtn").click(robosubmit);
$(".robocontainer").toggle();
$(".buyitem").change(sumbuyprice);


//names of input objects
var namesofinputobjects = {
	cardname : "cardname",
	buyprice : "buyprice",
	autolist : "autolist"
}

//names of select objects
var namesofselectobjects = {
	expansion : "expansion",
	quantity : "quantity",
	condition : "condition"
}


//Disable enter key from submitting form when entering text
$(document).on('keyup keypress', 'form input[type="text"]', function(e) {
  if(e.which == 13) {
    e.preventDefault();
    return false;
  }
});

//Disable enter key from submitting form when entering numbers
$(document).on('keyup keypress', 'form input[type="number"]', function(e) {
  if(e.which == 13) {
    e.preventDefault();
    return false;
  }
});

//click the add button once, to create the first card element
$("#addbtn").click();

function roboclone (){
	// Grab the last Div on the page - Clone it 
	// Make sure the event listeners and children's event listeners are cloned also (true true)
	// Append it to the Form element, then Show it.
	$(".robocontainer:first").clone(true, true).appendTo($("#roboform"));
	$(".robocontainer:last").toggle();
	for (var name in namesofinputobjects){
		roboinputnamer(name);
	}
	for (var name in namesofselectobjects){
		roboselectnamer(name);
	}
}

//select the name then change the names of all of the input objects to be "input-object-name-X" - .e.g cardname-1, cardname-2
function roboinputnamer (nameofformobject) {
		$("input[name|='"+nameofformobject+"']").attr("name", function (i){
		return nameofformobject+"-"+i;
	});
}

//select the name then change the names of all of the select objects to be "select-object-name-X" - .e.g expansion-1, expansion-2
function roboselectnamer (nameofformobject) {
		$("select[name|='"+nameofformobject+"']").attr("name", function (i){
		return nameofformobject+"-"+i;
	});
}

// Delete the X buttons parent element - and confirm - These nodes are the current Node path from the X delete button object
function robodelete (){
	if (confirm("Remove " + this.parentNode.childNodes[3].childNodes[1].childNodes[1].value + "?")){
		this.parentNode.remove();
	}
}

function robosubmit() {
	if (confirm("Purchase?")){
		document.getElementById("roboform").submit();
	}
}

function sumbuyprice() {
	var total = 0;
	// $(".buyitem").each(function(){
	// 	total += parseFloat($(this).val());
	// });
	console.log(total);
}
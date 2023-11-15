let list = document.getElementById("First-List");
let input = document.getElementById("List-Input");
let enter = document.getElementById("List-Enter");

function addElement() {
	if (input.value.trim() == "") return;
	let element = document.createElement("li");
	element.innerHTML = input.value;
	list.appendChild(element);
	input.value = "";
}

function entered(event) {
	if (event.keyCode == 13) {
		addElement();
	}
}

enter.onclick = addElement;

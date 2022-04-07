var container = document.getElementById("array");
function generatearray() {
	for (var i = 0; i < 20; i++) {
		var value = Math.ceil(Math.random() * 100);
		var array= document.createElement("div");
		array.classList.add("block");
		array.style.height = `${value * 5}px`;
		array.style.transform = `translate(${i * 45}px)`;
		var array_label = document.createElement("label");
		array_label.classList.add("block_id");
		array_label.innerText = value;
    		array.appendChild(array_label);
		container.appendChild(array );
	}
}
generatearray();    
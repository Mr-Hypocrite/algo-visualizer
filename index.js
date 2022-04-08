//Function to generate random arrays and display them
var container = document.getElementById("array");
function generatearray(noofbars=105)
{
	for (var i = 0; i <noofbars; i++)
	{
		var value = Math.ceil(Math.random() * 100);
		var array= document.createElement("div");
		array.classList.add("block");
		array.style.height = `${value *4}px`;
		array.style.transform = `translate(${i *10}px)`;
		container.appendChild(array );
	}
}
generatearray();
//Function to remove the bars from the screen
function removeBars()
{
    document.querySelectorAll(".block").forEach((node) =>
	{
        node.remove();
    });
}
//Linking the "New array" to the above funnction to generate random arrays on click
document.getElementById("new").addEventListener("click", () => {
    removeBars();
   generatearray();
});
//Scaling the array size according to the "Number of bars" slider
let arraySize = document.querySelector('#number');
arraySize.addEventListener('input', function()
{
    removeBars();
    generatearray(parseInt(arraySize.value));
});
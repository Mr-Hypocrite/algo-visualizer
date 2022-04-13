// Importing sorting functions


// Global Vars
let screenWidth = window.innerWidth;
let container = document.getElementById("array")
let outerContainer = document.querySelector('.center');
let width, noOfBars, padding;

let arrayOfBars = [];

//Function to generate random arrays and display them
function generatearray(noOfBars=100)
{
	arrayOfBars = [];

	for (let i = 0; i < noOfBars; i++)
	{
		let value = Math.ceil(Math.random() * 100);
		let array= document.createElement("div");
		array.classList.add("block");
		array.style.height = `${value * 4}px`;

		arrayOfBars.push(value * 4);

		array.style.transform = `translate(${i * 10}px)`;
		padding = (screenWidth - (noOfBars * 10)) / 2;
		// array.appendChild(<span class="invisible">${ value }</span>)
		container.appendChild(array);
		document.querySelector(".center").style.padding = `0 ${ padding }px`;
	}
	// console.log(arrayOfBars);
}

const generateSorted = (arr) => {
	removeBars()

	arr.map((element, index) => {
		let array= document.createElement("div");
		array.classList.add("block");
		array.style.height = `${element}px`;

		array.style.transform = `translate(${index * 10}px)`;
		// array.appendChild(<span class="invisible">${ value }</span>)
		container.appendChild(array);
	})
	padding = (screenWidth - (arr.length * 10)) / 2;
	document.querySelector(".center").style.padding = `0 ${ padding }px`;

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
	noOfBars = parseInt(arraySize.value)
    removeBars();
	generatearray(parseInt(arraySize.value));
});

//function to swap bars
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

function sleep(millisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, millisec); 
    }) 
}

// Event listener to update delay time
delay = 700 - 20
let delayTime = document.querySelector('#speed');
delayTime.addEventListener('input', function(){
    delay = parseInt(700 - delayTime.value);
});
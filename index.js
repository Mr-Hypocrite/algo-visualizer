// Importing sorting functions


// Global Vars
let screenWidth = window.innerWidth;
var container = document.getElementById("array")
let outerContainer = document.querySelector('.center');
let width, noOfBars, padding;

let arrayOfBars = [];

//Function to generate random arrays and display them
function generatearray(noOfBars=50)
{
	arrayOfBars = [];

	for (var i = 0; i < noOfBars; i++)
	{
		var value = Math.ceil(Math.random() * 100);
		var array= document.createElement("div");
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
		var array= document.createElement("div");
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

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
	  currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
  

const bubbleSort = (arr) => {
	let j = 1;

	for (i = 0; i < arr.length ; i++) {
		function timer() {
			for (k = 0; k < (arr.length - j); k++)
			{
				setTimeout(() => {
					if (arr[k + 1] < arr[k]) {
						[arr[k + 1], arr[k]] = [arr[k], arr[k + 1]]
						generateSorted(arr)
						console.log(arr)
					}
	
					if (k < arr.length - j) {
						abc()
					}
				}, 1000)
			}
		}

		timer()
		j++
	}

	console.log(arr)

}

// Targetting Sorting Buttons and Assigning Respective Functions

document.querySelector('#bubble').addEventListener("click", () => bubbleSort(arrayOfBars))
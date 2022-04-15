// Importing sorting functions


// Global Vars
let screenWidth = window.innerWidth
let container = document.getElementById(`array`)
let outerContainer = document.querySelector(`.center`)
let width, noOfBars, padding
let arraySize = document.querySelector(`#number`)

width = (screenWidth * 0.8) / 60

//Scaling the array size according to the `Number of bars` slider
arraySize.addEventListener(`input`, () => {
	noOfBars = parseInt(arraySize.value)
	width = (screenWidth * 0.8) / arraySize.value
    removeBars()
	generatearray(parseInt(arraySize.value))
});

//Function to generate random arrays and display them
const generatearray = (noOfBars = 60) => {

	for (let i = 0; i < noOfBars; i++)
	{
		let value = Math.ceil(Math.random() * 100)
		let array= document.createElement(`div`)
		array.classList.add(`block`);
		array.style.height = `${ value * 6 }px`
		array.style.width = `${ width }px`
		array.style.marginRight = `-${ width - 2 }px`
		if (width > 25) {
			array.innerHTML = `<h3>${ value }</h3>`
		}

		array.style.transform = `translate(${i * width}px)`
		padding = (screenWidth - (noOfBars * (width + 2))) / 2
		container.appendChild(array)
		document.querySelector(`.center`).style.padding = `0 ${ padding }px`
	}
}

// Generating Array on Load
window.onload = () => {
	generatearray()
}

//Function to remove the bars from the screen
const removeBars = () => {
    document.querySelectorAll(`.block`).forEach((node) =>
	{
        node.remove()
    });
}

//New Array Button Function to Generate New Array
document.getElementById(`new`).addEventListener(`click`, () => {
    removeBars()
   	generatearray(arraySize.value)
})

//Function to swap bars
const swap = (el1, el2) => {
    
	[el1.style.height, el2.style.height] = [el2.style.height, el1.style.height]
	let temp = el1.innerHTML
	el1.innerHTML  = el2.innerHTML
	el2.innerHTML = temp
    
}

// Sleep/Delay Function
const sleep = (millisec) => { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve(``) }, millisec);
    }) 
}

// Event listener to update delay time
delay = 1000 - 20
let delayTime = document.querySelector(`#speed`)
delayTime.addEventListener(`input`, () => {
    delay = parseInt(1000 - delayTime.value)
})
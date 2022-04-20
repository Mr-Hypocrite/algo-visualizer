async function insert () {
    const b = document.querySelectorAll(`.block`)
    // placing first bar in sorted list
    b[0].style.background = `green`
    console.log("insertion");
    // total no. of bars
    let n = b.length

    for(let i = 1; i < n; i++) {
        let current = b[i].style.height
        let text = b[i].innerHTML
        let j = i - 1

        while (j >= 0 && (parseInt(b[j].style.height) > parseInt(current))){
            b[j].style.background = 'blue'
            b[j + 1].style.background = 'blue'

            await sleep(delay)
            b[j+1].innerHTML = b[j].innerHTML
	        b[j].innerHTML  = text
            
            b[j + 1].style.height = b[j].style.height
            b[j].style.height = current

            b[j].style.background = 'green'
            b[j + 1].style.background = 'green'

            j = j - 1

        }
    }
}

document.getElementById(`insert`).addEventListener(`click`, () => { insert() })
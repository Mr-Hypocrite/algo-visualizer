const bubble = async () => {
    const ele = document.querySelectorAll(`.block`);

    for (let i = 0; i < ele.length-1; i++) {
        
        for (let j = 0; j < ele.length-i-1; j++) {
            ele[j].style.background = `blue`;
            ele[j+1].style.background = `blue`;

            if (parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)) {
                await sleep(delay);
                swap(ele[j], ele[j+1]);
            }

            ele[j].style.background = `cyan`;
            ele[j+1].style.background = `cyan`;
        }
        ele[ele.length-1-i].style.background = `green`;
    }
    ele[0].style.background = `green`;
}
document.getElementById(`bubble`).addEventListener(`click`, () => { bubble() })



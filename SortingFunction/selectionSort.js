const select = async () => {
    const ele = document.querySelectorAll(`.block`);

    for (let i = 0; i < ele.length-1; i++) {
        let min=i;
        for (let j = i+1; j < ele.length; j++) {
            ele[min].style.background = `blue`;
            ele[j].style.background = `blue`;
            if (parseInt(ele[min].style.height) > parseInt(ele[j].style.height)) {
                await sleep(delay);
                swap(ele[min], ele[j]);
                ele[min].style.background = `#B9F8D3`;
                ele[j].style.background = `#B9F8D3`;
                await sleep(delay);
                j=min;
            }

            ele[j].style.background = `cyan`;
        }
        ele[min].style.background = `green`;
    }
    ele[ele.length-1].style.background = `green`;
}
document.getElementById(`select`).addEventListener(`click`, () => { select() })

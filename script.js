const button = document.querySelector(".btn")
const span = document.querySelector(".span")
const btn = document.querySelector(".btn-1")

let count = 0;
function countPlus() {
    count += 1
    span.textContent = count
}
button.addEventListener("click", ()=> countPlus())
function countMinus() {
    if (count === 0) {
        return
    }
    count -= 1
    span.textContent = count
}
btn.addEventListener("click", ()=> countMinus())
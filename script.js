
const bucketBtn = document.querySelector(".header-nav-btn-bucket")
const bucket = document.querySelector(".header-nav-bucket")
const closeBucketBtn = document.querySelector(".close-bucket")
const button = document.querySelector(".btn")
const span = document.querySelector(".span")
const btn = document.querySelector(".btn-1")

function openCard() {
    bucket.classList.add("active-bucket")
}
bucketBtn.addEventListener("click", ()=> openCard())

function closeCard() {
    bucket.classList.remove("active-bucket")
}
closeBucketBtn.addEventListener("click", ()=>  closeCard())
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
const inputBtn = document.getElementById("inputBtn")
const submitBtn = document.getElementById("submitBtn")
const collect = document.getElementById("collect")



submitBtn.addEventListener("click", () => {
    collect.innerText = inputBtn.value
    inputBtn.value = ""
})
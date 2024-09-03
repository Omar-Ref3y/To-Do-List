const addBox = document.querySelector("#input-box")
const addBtn = document.querySelector(".add-btn")
const containerTask = document.querySelector(".list-container")
const alertP = document.querySelector(".alert")
const msgEle=document.querySelector(".message")
const compliments = [
    "Well done!",
    "Great work!",
    "Awesome job!",
    "Excellent effort!",
    "Fantastic!",
    "Keep it up!",
    "Nice work!",
    "You did it!",
    "Superb!",
    "Amazing!",
    "Outstanding!",
    "Bravo!",
    "You're doing great!",
    "Keep going!",
    "Impressive!",
    "You're on fire!",
    "Way to go!",
    "Nicely done!",
    "You rock!",
    "Perfect!"
];
function addTask() {
    console.log(addBox.classList.contains("search-active"));

    if (addBox.classList.contains("search-active")) {
        if (addBox.value === "") {
            alertP.style.display = "block"
            addBox.classList.remove("search-active")
        }
        else {

            let liEl = document.createElement("li")
            liEl.innerHTML = addBox.value
            containerTask.appendChild(liEl)
            let spanEl = document.createElement("span")
            let img = document.createElement("img")
            img.src = "https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614397-x-512.png"
            spanEl.appendChild(img)
            liEl.appendChild(spanEl)
            addBox.classList.remove("search-active")
            alertP.style.display = "none"
            addBox.value = ""
            addBox.blur()
            saveData()
        }
    } else {
        addBox.classList.add("search-active")
        addBox.focus()
    }
}
function saveData() {
    localStorage.setItem("data", containerTask.innerHTML)
}
function getData() {
    containerTask.innerHTML = localStorage.getItem("data")
}
addBtn.addEventListener("click", () => {
    addTask()
})
addBox.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        addTask()
    }
})
containerTask.addEventListener("click", (ele) => {
    if (ele.target.tagName === "LI") {
        ele.target.classList.toggle("checked")
        checkClass(ele)
        saveData()
    } else if (ele.target.tagName === "IMG") {
        ele.target.parentElement.parentElement.remove();
        saveData()
    }
}, false)
function checkClass(ele) {
    if (ele.target.classList.contains('checked')) {
        msgEle.textContent=compliments[Math.floor(Math.random()*compliments.length)]
        setTimeout(()=>{
            msgEle.textContent=""
        },10000)
    } else {
        msgEle.textContent=""
    }
}
getData()
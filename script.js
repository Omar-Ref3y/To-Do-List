const addBox=document.querySelector("#input-box")
const addBtn=document.querySelector(".add-btn")
const containerTask=document.querySelector(".list-container")
const alertP=document.querySelector(".alert")
function addTask() {
    console.log(addBox.classList.contains("search-active"));
    
    if (addBox.classList.contains("search-active")) {
        if (addBox.value==="") {
            alertP.style.display="block"
            addBox.classList.remove("search-active")
        }
        else{
            
            let liEl=document.createElement("li")
            liEl.innerHTML=addBox.value
            containerTask.appendChild(liEl)
            let spanEl=document.createElement("span")
            let img =document.createElement("img")
            img.src="https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614397-x-512.png"
            spanEl.appendChild(img)
            liEl.appendChild(spanEl)
            addBox.classList.remove("search-active")
            alertP.style.display="none"
            addBox.value=""
            
            saveData()
        }
    }else{
        addBox.classList.add("search-active")
    }
}
function saveData() {
    localStorage.setItem("data",containerTask.innerHTML)
}
function getData() {
    containerTask.innerHTML=localStorage.getItem("data")
}
addBtn.addEventListener("click",()=>{
    addTask()
})
addBox.addEventListener("keydown",(event)=>{
    if(event.code==="Enter"){
        addTask()
    }
})
containerTask.addEventListener("click",(ele)=>{
    if (ele.target.tagName==="LI") {
        ele.target.classList.toggle("checked")
        saveData()
    }else if(ele.target.tagName==="IMG"){
        ele.target.parentElement.parentElement.remove();
        saveData()
    }
},false)
getData()
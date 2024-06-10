let arr;
if(JSON.parse(localStorage.getItem("arr"))?.length>=1){
    arr = JSON.parse(localStorage.getItem("arr"))
    render()
}
else{
    arr = []
}

function addUser(){
    let details = document.getElementById("details_container")
    let message = document.getElementById("message")
    let name = document.getElementById("name")
    let profession = document.getElementById("profession")
    let age = document.getElementById("age")
    if(name.value && profession.value && age.value){
        let item = {id:arr.length,name:name.value,profession:profession.value,age:age.value}
        arr.push(item)
        message.textContent = "Success : Message Added"
        message.style.color = "green"
        name.value = ""
        age.value = ""
        profession.value = ""
        localStorage.setItem("arr",JSON.stringify(arr))
        render()
    }
    else{
        message.textContent = "Error :Please Make sure All the field before adding in an employee"
        message.style.color = "red"
    }
}
function render(){
    let details = document.getElementById("details_container")
    if(arr.length == 0){
        let details = document.getElementById("details_container")
        details.innerHTML = `<p style="font-size: 1.2rem; width: 100%; text-align: center;">Data not found</p>`
    }else{
    details.innerHTML = ""
    arr.map((item)=>{
       details.innerHTML+= `   
       <div id="details">
            <div class="details_left">
                <p>${item.name}</p>
                <p>${item.profession}</p>
                <p>${item.age}</p>
            </div>
            <button class="deletebtn" onclick="deleteUser(${item.id})" >Delete</button>
        </div>`
    })}
}
function deleteUser(id){
    arr = arr.filter((item)=>item.id != id)
    localStorage.setItem("arr",JSON.stringify(arr))
    render()
}
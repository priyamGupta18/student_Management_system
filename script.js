let stname = document.querySelector("#stName");
let stage = document.querySelector("#stAge");
let stgender = document.querySelector("#genderSelect");
let addbtn = document.querySelector("#add");
let stlist = document.querySelector("tbody");

const students = [];
function addStudent(Name,Age,Gender){
    let student ={
        name:Name,
        age:Age,
        gender:Gender
    };
    students.push(student);
    displayList();
}

function displayList(){
    stlist.innerHTML = "";
    students.forEach((student,i)=>{
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td><button onclick="removeStu(${i})">Remove</button></td>`
        stlist.appendChild(tr);
    })
}

function removeStu(i){
    students.splice(i,1);
    displayList();
}
addbtn.addEventListener('click',function(){
    let Name = stname.value;
    let Age = stage.value;
    let Gen = stgender.value;
    if(Name!=="" && Age!=="" && Gen!==""){
        addStudent(Name,Age,Gen);

        stname.value = "";
        stage.value = "";
        stgender.value = "";
    }else{
        alert("Please fill all the details.");
    }
})
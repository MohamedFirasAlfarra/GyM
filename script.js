let FirstName = document.getElementById("FirstName").value;
let LastName = document.getElementById("LastName").value;
let Age = document.getElementById("Age").value;
let Email = document.getElementById("Email").value;
let Password = document.getElementById("Password").value;
let btn_form = document.getElementById("btn_form");



btn_form.onclick = function(){
    if(FirstName.value === " " + LastName.value === " " + Age.value === " " + Email.value === " " + Password.value === " "){
        alert("Error");
    }
}
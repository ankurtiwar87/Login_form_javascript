function validateForm() {
   
   let b= address.length;
    var x = document.forms["myform"]["name"].value;
    var y = document.forms["myform"]["address"].value;
    var z = document.forms["myform"]["phone"].value;
    var age = document.forms["myform"]["age"].value;
    
    if (x == null || x == "") {
        nameError = "Please enter your name";
        document.getElementById("name_error").innerHTML = nameError; 
        return false;
    } 
    // else if (a<4) {
    //     nameError = "Please enter name greater than 4 character";
    //     document.getElementById("name_error").innerHTML = nameError; 
    //     return false;
    // } 
    
    else if (y == null || y == " " ) {
        addressError = "Please enter your address";
        document.getElementById("address_error").innerHTML = addressError;
        return false;
    } 
    else if (b >200 ) {
        addressError = "The address length is exceeds";
        document.getElementById("address_error").innerHTML = addressError;
        return false;
    } 
    
    else if (z == null || z == "") {        
        phoneError = "Please enter your telephone";
        document.getElementById("phone_error").innerHTML = phoneError;
        return false;
    } 
    else if (age<18) {        
        ageError = "you are not eligible";
        document.getElementById("age_error").innerHTML = ageError;
        return false;
    } 
    
    else {return true;}
    }

function data_save() {
    let name, address, phone, age;
    name = document.getElementById("name").value;
    address = document.getElementById("address").value;
    phone = document.getElementById("phone").value;
    age = document.getElementById("age").value;

    localStorage.setItem("name", name);
    localStorage.setItem("address", address);
    localStorage.setItem("phone", phone);
    localStorage.setItem("age", age);
}
// function fetch_data()
// {

// for ( var i = 0, len = localStorage.length; i < len; ++i ) {
//   element.innerHTML =  localStorage.getItem(localStorage.key(i)) + localStorage.key(i).length;
// }
// }
function fetch_data()
{
    let name, address, phone, age;
    name=window.localStorage.getItem("name");
    address=window.localStorage.getItem("address");
    phone=window.localStorage.getItem("phone");
    age=window.localStorage.getItem("age");


    // let profile =["name","address","phone","age"]
    // for(let i = 0;i<profile.length;i++)
    // {
    //     document.getElementById("profile").innerHTML=;
    // }
    document.getElementById("profile_name").innerHTML=name;
    document.getElementById("profile_address").innerHTML=address;
    document.getElementById("profile_phone").innerHTML=phone;
    document.getElementById("profile_age").innerHTML=age;

}
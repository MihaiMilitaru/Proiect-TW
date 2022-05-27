function validare(){

    // regex for username validation

    let username=document.getElementById("nume").value;
    let validation_username=0;

    if(username.match(/^[a-zA-Z0-9_-]{3,20}$/)){
        validation_username=1;
    }else{
        alert("invalid username");
    }


    // regex for email address validation

    let email=document.getElementById("mail").value;
    let validation_email=0;

    if(email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        validation_email=1;
    }else{
        alert("invalid mail address");
    }


    // regex for password validation


    let password=document.getElementById("parola").value;
    let validation_password=0;

    if(password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/)){
        validation_password=1;
    }else{
        alert("Weak password. The password must contain at least 8 charcaters including letters, digits and other key-symbols.");
    }

    // validation for confirm password

    let cpassword=document.getElementById("cparola").value;
    let validation_cpassword=0;
    if(password != "" && cpassword!==password){
        alert("Password confirmed wrong.")
    }else{
        validation_cpassword=1;
    }
    
    // validation for terms&conditions

    let x=document.getElementById("terms").checked;
    let x_checked=0;
    if(x==false){
        alert("Agree with terms&conditions.")
    }else{
        x_checked=1;
    }

    // display if all data is valid

    if(x_checked==1 && validation_cpassword==1 && validation_password==1 && validation_email==1 && validation_username==1){
        alert("Thanks for signing up. Your account has been created.")
    }

    
}
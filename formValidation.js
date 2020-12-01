var $ = function(id) {
    return document.getElementById(id);
};

var Reserve = function () {
    var firstName = $("fName").value;
    var lastName = $("lName").value;
    var phone = $("phoneNo").value;
    var emailAddress1 = $("email").value;
    var emailAddress2 = $("email2").value;
    var password = $("password").value;
    var address1 = $("address1").value;
    var town = $("town").value;
    var county = $("county").value;
    var eircode = $("eircode").value;
    
    
    var isValid = true;
    
    // validate the first name
    if (firstName === "") { 
        $("firstName_Error").innerHTML = "This field is required.";
        isValid = false;
    } else if (firstLetterCapital(firstName)===false) {
       $("firstName_Error").innerHTML = "Must start with a capital letter.";
        isValid = false;
    } else {
        $("firstName_Error").innerHTML = "";
    } 

    // validate the last name
    if (lastName === "") { 
        $("lastName_Error").innerHTML = "This field is required.";
        isValid = false;
    } else if (firstLetterCapital(lastName)===false) {
       $("lastName_Error").innerHTML = "Must start with a capital letter.";
        isValid = false;
    } else {
        $("lastName_Error").innerHTML = "";
    } 
    
    // validate the phone number
    if (phone === "") { 
        $("phone_Error").innerHTML = "This field is required.";
        isValid = false;
    } else if (phoneValidation(phone)===false) {
       $("phone_Error").innerHTML = "Phone number has non numerics.";
        isValid = false;
    } else {
        $("phone_Error").innerHTML = "";
    } 

    // validate the email address
    if (emailAddress1 === "") { 
        $("emailAddress1_Error").innerHTML = "This field is required.";
        isValid = false;
    } else if (emailValidation(emailAddress1)===false) {
       $("emailAddress1_Error").innerHTML = "Invalid email address";
        isValid = false;
    } else {
        $("emailAddress1_Error").innerHTML = "";
    } 
    
    if (emailAddress2 === "") { 
        $("emailAddress2_Error").innerHTML = "This field is required.";
        isValid = false;
    } else if (emailAddress2 !== emailAddress1) {
       $("emailAddress2_Error").innerHTML = "Emails don't match.";
        isValid = false;
    } else {
        $("emailAddress2_Error").innerHTML = "";
    } 
    
    if (address1 === ""){
        $("address1_Error").innerHTML = "This field is required.";
        isValid = false;
    } else {
        $("address1_Error").innerHTML = "";
    }
    
    if(town === ""){
        $("town_Error").innerHTML = "This field is required.";
        isValid = false;
    } else {
        $("town_Error").innerHTML = "";
    }
    
    if(county === ""){
        $("county_Error").innerHTML = "This field is required.";
        isValid = false;
    } else {
        $("county_Error").innerHTML = "";
    }
    
    if(eircode === ""){
        $("eircode_Error").innerHTML = "This field is required.";
        isValid = false;
    } else {
        $("eircode_Error").innerHTML = "";
    }
    
    if(password === ""){
        $("password_Error").innerHTML = "This field is required.";
        isValid = false;
    }else {
        $("password_Error").innerHTML = "";
    }
        
    if (isValid) {
        // submit the form
        $("regForm").submit(); 
    }
};

window.onload = function () {
    $("registerButton").onclick = Reserve;
    $("email").focus();
};

function firstLetterCapital(name){
    var letter = name[0];
    if (letter !== letter.toUpperCase()){
        return false;
    }         
    return true;
}

function phoneValidation(phoneNo){  
    var numbers="0123456789";
    for (i=0;i<phoneNo.length;i++){
        if(numbers.indexOf(phoneNo.charAt(i))===-1){     
            return false;
        }
    }
    return true;
}

function emailValidation(email){
    var lastapos=email.lastIndexOf("@");
    apos=email.indexOf("@");
    dotpos=email.lastIndexOf(".");
    if (apos<1 || dotpos-apos<2){ 
        return false;
    }
    else if(email.length===dotpos+1){  
        return false;
    }	
    else if (apos!==lastapos){
        return false;
    }
    return true;}

var $ = function(id) {
    return document.getElementById(id);
};

var Login = function () {
    var emailAddress1 = $("email").value;
    var password = $("password").value;


    if (emailAddress1 === "") {
        $("emailAddress1_Error").innerHTML = "This field is required.";
        isValid = false;
    } else if (emailValidation(emailAddress1) === false) {
        $("emailAddress1_Error").innerHTML = "Invalid email address";
        isValid = false;
    } else {
        $("emailAddress1_Error").innerHTML = "";
    }

    if (password === "") {
        $("password_Error").innerHTML = "This field is required.";
        isValid = false;
    } else {
        $("password_Error").innerHTML = "";
    }
    
    if (isValid){
         $("logForm").submit(); 
    }
};

window.onload = function () {
    $("loginButton").onclick = Login;
    $("fName").focus();
};

function firstLetterCapital(name) {
    var letter = name[0];
    if (letter !== letter.toUpperCase()) {
        return false;
    }
    return true;
}

function emailValidation(email) {
    var lastapos = email.lastIndexOf("@");
    apos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if (apos < 1 || dotpos - apos < 2) {
        return false;
    } else if (email.length === dotpos + 1) {
        return false;
    } else if (apos !== lastapos) {
        return false;
    }
    return true;
}
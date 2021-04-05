function submitInfo() {
    var user = document.getElementById("user").value;
    var passWord = document.getElementById("pin").value;
    var userMail = document.getElementById("email").value;
    var userPhone = document.getElementById("phone").value;
    var userAge = document.getElementById("age").value;
    var coyTerms = document.getElementById("terms").value;
    if (passWord.length <= 4 || userPhone.length < 11 || userAge < 18) {
        if (passWord.length < 4) {
            var chechUser = document.getElementById("checkPin").textContent = "Must be more than 4 characters";
            checkPin.style.color = "red"
        } else {
            chechUser = document.getElementById("checkPin").textContent = "";
        }


        if (userAge < 18) {
            var checkAge = document.getElementById("checksAge").textContent = "Must be older than 18yrs to access this site"
            checksAge.style.color = "red"
        } else {
            checkAge = document.getElementById("checksAge").textContent = "";
        }


    } else {
        alert("SIGN UP SUCCESSFUL \nWELCOME");
        location.href = 'index2.html';
    }

}
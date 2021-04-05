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
        location.href = 'index/index2.html';
    }
};

function adjust() {
    let side = document.getElementById("aside");
    let main = document.getElementById("main");
    let x = document.getElementById("cancel");
    let y = document.getElementById("cancelOne");

    if (side.style.maxWidth > "16%") {
        side.style.maxWidth = "10%"


    } else {
        side.style.maxWidth = "18%"
        main.style.maxWidth = "100%"

    }

    if (document.body.style.width < "440px") {
        side.style.display = "block"
        x.style.transform = "scale(1)"
        y.style.display = "none"
    }




}

function adjustTwo() {
    let side = document.getElementById("aside");
    let main = document.getElementById("main");
    let y = document.getElementById("cancelOne");
    let x = document.getElementById("cancel");
    if (x.style.transform = "scale(1)") {
        x.style.transform = "scale(0)"
        side.style.display = "none"
        y.style.display = "block"




    }
}
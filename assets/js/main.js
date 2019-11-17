/*
 Your Header Here
 */

"use strict";

function validEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function clearForm() {
    /*
     * add your code here
     */
}

function validate() {
    var errorMessage = "";

    /*
     * add your code here
     */

    return errorMessage;
}

$("#email-send").click(function () {
    //uncomment this to test back-end validation
    /*
     $("#email-form").submit();
     return false;
     */

    var msg = validate();
    console.log(msg);
    if (msg) {
        $("#msg").html(msg);
    } else {
        $("#email-form").submit();
    }
    return false;
});

$("#email-clear").click(function () {
    clearForm();
    return false;
});


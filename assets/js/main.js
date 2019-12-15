/**************************************************************
 Name: Yolanda Gunter
 Assignment: Final Project
 Purpose: CodeIgniter, jQuery and Boostrap
 Notes: Pulling everything I've learned together for my Final Project
 **************************************************************/


"use strict";

$(document).ready(function () {

    // Body element styling as parent
    $('body').css("width", "90%");
    $('body').css("margin", "0", "auto");
    $('body').css("text-align", "justify");
    $('body').css("position", "relative");
    $('body').css("float", "left");
    $('body').css("margin-left", "50%");
    $('body').css("left", "-45%");

    // Container element styling for content readability
    $('.container').css("float", "none");
    $('.container-home').css("background-color", "white");
    $('.container-gallery').css("background-color", "#F9AD81");
    $('.container-about').css("background-color", "white");
    $('.container-contact').css("background-color", "#7DA7D9");

    // Header element with id header
    $('#header').css("text-align", "center");
    $('#header').css("width", "90%");
    $('#header').css("background-color", "white");

    // Navigation styling
    $('.navbar').css("color", "black");
    $('.navbar').css("background-color", "transparent");
    $('.navbar').css("border-radius", "7px");
    $('.navbar-brand').css("width", "100%");

    // Home feature section styling
    $('#feature').css("text-align", "center");
    $('#feature').css("width", "90%");
    $('#feature').css("background-color", "yellow");

    $('.col-lg-4').css("text-align", "center");

    // Heading paragraph elements
    $('h1').css("text-align", "center");
    $('h2').css("text-align", "center");
    $('h3').css("text-align", "center");

    // About Image styling
    $('#about').css("verticle-align", "middle");
    $('#about').css("width", "100%");
    $('#about').css("text-align", "center");

    //

    // Footer section styling
    $('.footer-section').css("background-color", "#b5dacd");
    $('.footer-section').css("horizontal-align", "center");

    // Form client-side validation
    function clearForm() {

        $('#name').value = "";
        $('#email').value = "";
        $('#email2').value = "";
        $('#subject').value = "";
        $('#message').value = "";
        $('#msg').innerHTML = "<br>";
    }

    function validEmail(email) {
        /* do not modify this fucntion, just use it as is */
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validate() {
        var errorMessage = "";

        //all the elements into the function
        var nameInput = $('#name');
        var emailInput = $('#email');
        var email2Input = $('#email2');
        var subjectInput = $('#subject');
        var messgeInput = $('#message');

        //all the strings in the elements trimmed
        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var email2 = email2Input.value.trim();
        var subject = subjectInput.value.trim();
        var message = messgeInput.value.trim();

        //trimmed versions back into form for good UX
        nameInput.value = name;
        emailInput.value = email;
        email2Input.value = email2;
        subjectInput.value = subject;
        messgeInput.value = message;

        //test strings from form and store errors
        if (name === "") {
            errorMessage += "Name cannot be empty.<br>";
        }

        if (email === "") {
            errorMessage += "First email is not valid.<br>";
        }

        if (email2 === "") {
            errorMessage += "Second email is not valid.<br>";
        }

        if (email2 !== email) {
            errorMessage += "Emails must match.<br>";
        }

        if (subject === "") {
            errorMessage += "Subject cannot be empty.<br>";
        }

        if (message === "") {
            errorMessage += "Message cannot be empty.<br>";
        }
        return errorMessage;
    }
    $("email-form").submit(function (event) {
    var sendBtn = $('#contact-send');
    sendBtn.onclick = function () {
        var msgArea = $('#msg');
        var msg = validate();
        if (msg === "") {
            document.forms["email-form"].submit();
        } else {
            msgArea.innerHTML = msg;
            event.preventDefault();
        }
    };

    var clearBtn = $('#email-clear');
    clearBtn.onclick = function () {
        clearForm();
    };

    $("form").submit(function (event) {
        var regex = /^[a-zA-Z]+$/;
        var currentValue = $("#newsletter").val ();
        if(regex.test(currentValue) == false) {
            $("#result").html('<p class="error">Not Valid!</p>').show();
            event.preventDefault();
        }
    });
});




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
    $('body').css("background-color", "yellow");
    $('body').css("position", "relative");
    $('body').css("float", "left");
    $('body').css("margin-left", "50%");
    $('body').css("left", "-45%");

    // Container element styling for content readability
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
    $('#email-form').validate(
        {
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email1: {
                    required: true,
                    email: true
                },
                email2: {
                    required: true,
                    email: true,
                    equalTo: "#email1"
                },
                subject: {
                    required: true,
                    minlength: 5
                },
                message: {
                    required: true,
                    minlength: 20
                },
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "Minimum length is 2 characters"
                },
                email1: {
                    required: "Please enter a valid email",
                },
                email2: {
                    required: "Please re-enter your email",
                    equalTo: "Your emails must match"
                },
                subject: {
                    required: "Please enter a subject",
                    minlength: "Minimum length is 5 characters"
                },
                message: {
                    required: "Please enter your message",
                    minlength: "Minimum length is 20 characters"
                },

                highlight: function(element) {
                    $(element).closest('.control-group').removeClass('success').addClass('error');
                },

                success: function(element) {
                element
                    .text('OK!').addClass('valid')
                    .closest('.control-group').removeClass('error').addClass('success');
                }
        });


    $('#email-send').click(function () {
        $('#email-form').submit();
        var msg = validate();
        console.log(msg);
        if (msg) {
            $("#msg").html(msg);
        } else {
            $('#email-form').submit();
        }
    });

    $('#email-clear').click(function () {
        clearForm();
    });

    $('#newsletter').validate(
        {
            rules: {
                email: {
                    required: true,
                    emai: true
                },
            },
            message: {
                email: {
                    required: "Please enter a valid email"
                },
            },
        });

    $('#newsletter-send').click(function () {
        $('newsletter').submit();
    });

});


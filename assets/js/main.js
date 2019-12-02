/**************************************************************
 Name: Yolanda Gunter
 Assignment: Final Project
 Purpose: CodeIgniter, jQuery and Boostrap
 Notes: Pulling everything I've learned together for my Final Project
 **************************************************************/


"use strict";

$(document).ready(function () {
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


    $("#email-send").click(function () {
        //uncomment this to test back-end validation
        $("#email-form").submit();
        var msg = validate();
        console.log(msg);
        if (msg ) {
            $("#msg").html(msg);
        } else {
            $("#email-form").submit();
        }
    });

    $("#email-clear").click(function () {
        clearForm();
    });
});


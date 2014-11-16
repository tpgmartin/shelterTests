
// When the browser is ready...
$(document).ready(function() {

  // Setup form validation on the #register-form element
  $("#register-form").validate({

    // Specify the validation rules
    rules: {
        firstname: "required",
        lastname: "required",
        email: {
            required: true,
            email: true
        },
        postcode: "required",
        agree: "required",
    },

    // Specify the validation error messages
    messages: {
        firstname: "Please enter your first name",
        lastname: "Please enter your last name",
        email: "Please enter a valid email address",
        postcode: "Please enter your postcode",
        agree: "Please accept our policy"
    },  

    submitHandler: function(form) {
      alert('Thanks for signing up!');
      return false;
    }

  });

  $('.form-elem:odd').css('background-color', '#f3f3f3 ');
});  
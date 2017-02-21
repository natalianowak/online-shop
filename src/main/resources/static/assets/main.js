$(function() {

$.ajax({
    url: '/hello',
    success: function(response) {
	     console.log(response);
      }
    });

    $("#form-email").submit(function(e){
        e.preventDefault();
        return false;
      });

    var button = $('#button-send');

    button.click(function() {
      //alert( "Handler for .click() called." );
        var email= document.getElementById('email-input');
        var message= document.getElementById('message-input');
        console.log(email.value);

      if(!email.value || !message.value){
        alert.error('Please check your entries');
      }else {
        $.ajax({
          url: "https://formspree.io/"+email.value,
          method: "POST",
          data: {message: "hello!"},
          dataType: "json"
        });
      }
});
});

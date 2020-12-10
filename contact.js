$(document).ready(function() {

  var form = $('#form'),
      username = $('#username'),
      lastname = $('#lastname'),
	  info = $('#info'),
      email = $('#email'),
      city = $('#city'),
      bus = $('#bus'),
      submit = $("#submit");
  
  form.on('input', '#username, #lastname, #email, #city, #bus', function() {
    $(this).css('border-color', '');
    info.html('').slideUp();
  });
  
  submit.on('click', function(e) {
    e.preventDefault();
    if(validate()) {
      $.ajax({
        type: "POST",
        url: "mailer.php",
        data: form.serialize(),
        dataType: "json"
      }).done(function(data) {
        if(data.success) {
          username.val('');
          email.val('');
          lastname.val('');
          city.val('');
          info.html('Su mensaje ha sido enviado.').css('color', 'green').slideDown();
        } else {
          info.html('Lo sentimos, su mensaje no se pudo enviar.').css('color', 'red').slideDown();
        }
      });
    }
  });
  
  function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(!regex.test(email.val())) {
      email.css('border-color', 'red');
      valid = false;
    }
    if($.trim(lastname.val()) === "") {
      lastname.css('border-color', 'red');
      valid = false;
    }
    if($.trim(username.val()) === "") {
      username.css('border-color', 'red');
      valid = false;
    }
    if($.trim(city.val()) === "") {
      city.css('border-color', 'red');
      valid = false;
    }
    if($.trim(bus.val()) === "") {
      bus.css('border-color', 'red');
      valid = false;
    }
    
    return valid;
  }

});
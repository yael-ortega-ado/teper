$(document).ready(function() {

  var form = $('#newsletter'),
	  newsletterinfo = $('#newsletterinfo'),
      newsletterMail = $('#newsletterMail'),
      submit = $("#send");
	  
  
  form.on('input', '#newsletterMail', function() {
    $(this).css('border-color', '');
    newsletterinfo.html('').slideUp();
  });
  
  submit.on('click', function(e) {
    e.preventDefault();
    if(validate()) {
      $.ajax({
        type: "POST",
        url: "newslatter.php",
        data: form.serialize(),
        dataType: "json"
      }).done(function(data) {
        if(data.success) {
          newsletterMail.val('');
          newsletterinfo.html('¡Enviado!').css('color', 'green').slideDown();
        } else {
          newsletterinfo.html('Lo sentimos, su mensaje no se pudo enviar!').css('color', 'red').slideDown();
        }
      });
    }
  });
  
  function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(!regex.test(newsletterMail.val())) {
      newsletterMail.css('border-color', 'red');
      valid = false;
    }
    return valid;
  }

});
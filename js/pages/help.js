const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_gwusf2z';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      document.getElementById("errorMail").innerHTML += '<p class="errorMail success">Email enviado </p>';
      /*alert('Sent!');*/
    }, (err) => {
        document.getElementById("errorMail").innerHTML += '<p class="errorMail error">Error: El email no se envió correctamente. Verifique sus datos. </p>';
        btn.value = 'Enviar';
        /*alert(JSON.stringify(err));*/
    });
});
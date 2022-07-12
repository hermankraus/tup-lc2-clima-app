const btn = document.getElementById('button');
const cargando = document.getElementById("loadingSymbol");

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   cargando.style.display = 'block';
   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_gwusf2z';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      cargando.style.display = 'none';
      document.getElementById("errorMail").innerHTML += '<p class="errorMail success">Email enviado </p>';
      /*alert('Sent!');*/
    }, (err) => {
        document.getElementById("errorMail").innerHTML += '<p class="errorMail error">Error: El email no se envió correctamente. Verifique sus datos. </p>';
        btn.value = 'Enviar';
        /*alert(JSON.stringify(err));*/
    });
});

function limpiarFormulario() {
  document.getElementById("form").reset();
}
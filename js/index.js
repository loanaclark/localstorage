const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

buttonText.addEventListener('click', () => {
    const texto = inputText.value;

   /* localStorage.setItem('textoUsuario', texto);
    alert('Texto guardado'); */

    if(texto === '') {
        alert('Debe ingresar un dato antes de guardar');
    } else {
        localStorage.setItem('textoUsuario', texto);
        alert('Guardado');
    }
});

const spanData = document.getElementById('data');
const textoGuardado = localStorage.getItem('textoUsuario');

spanData.textContent = textoGuardado;

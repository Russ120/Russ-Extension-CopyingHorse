//api

// const URL_API = 'http://localhost:1212';
// function Search(){
//   fetch(URL_API + '/mostrar')
//     .then(response => response.json())
//     .then(data => {
//       document.getElementById('texto').innerText = data.text;
//       readText(data.text)
//       console.log('Texto copiado:', data.text);
//     })
//     .catch(error => {
//       console.error('Error al obtener datos de la API:', error);
//     });
// }

// // Asigna el evento al botón una vez que se cargue el DOM
// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('mostrarTextoBtn').addEventListener('click', Search);
//   });





  // Asigna el evento al botón una vez que se cargue el DO
  let isButtonActivated = false;

  console.clear();

  document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('play-pause').addEventListener('click', revisar);
});




function revisar(){
      // Verificamos el estado actual
      if (isButtonActivated) {
        // Si está activado, hacemos algo y cambiamos el estado a desactivado
        stopReading();
        isButtonActivated = false;
      } else {
        // Si está desactivado, hacemos algo diferente y cambiamos el estado a activado
        Search();
        isButtonActivated = true;
      }
}





async function Search() {
  try {
    const textoCopiado = await navigator.clipboard.readText();

    
    console.log("textoCopiado");
    // document.getElementById('texto').innerText = textoCopiado;
    readText(textoCopiado);
    

  } catch (error) {
    
    alert('Error al leer el portapapeles ('+ error + " )\n\n" +
    "Probablemente eEsta extensión requiere que le permita acceder a la papelera:\n\n" +
  "   - Entra a Administración de extensiones\n" +
  "   - En esta extensión, selecciona Detalles\n" +
  "   - Selecciona Configuración del sitio\n" +
  "   - Portapapeles (permitir)");

    console.error('Error al leer el portapapeles:', error);

  }
}



function readText(textToRead) {
  // Verificar si el navegador es compatible con la API de síntesis de voz
  if ('speechSynthesis' in window) {
    // Inicializando lo que lo leerá, viendo si está esa propiedad en la configuración del navegador
    var synthesis = window.speechSynthesis;

    // Crear un objeto de síntesis de voz, esto es como lo que se leerá
    var utterance = new SpeechSynthesisUtterance(textToRead);

    // Obtener la lista de voces disponibles
    var voices = synthesis.getVoices();

    // Seleccionar una voz específica (en este caso, la primera voz de la lista)
    utterance.voice = voices[1];

    // Leer el texto en voz alta, pasarle a lo que lo leerá lo que se leerá y decirle que lo diga
    synthesis.speak(utterance);

    // Retornar el objeto de síntesis de voz para que pueda ser utilizado para detener la síntesis
    return utterance;

  } else {
    alert('Tu navegador no es compatible con la síntesis de voz.');
    return null;
  }
}



// Función para detener la síntesis de voz
function stopReading() {
  // Verificar si el navegador es compatible con la API de síntesis de voz
  if ('speechSynthesis' in window) {
    // Detener la síntesis de voz
    window.speechSynthesis.cancel();
  } else {
    alert('Tu navegador no es compatible con la síntesis de voz.');
  }
}





  const buttons = Array.from(document.querySelectorAll("button"));
  
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      btn.classList.toggle("active");
      detener();
      
    });
  });


  // function detener(){
  //   if (play == false){
  //     setTimeout(function() {
  //       utterance.cancel();
  //     }, 1000);
  //   }
  // }
  
























  // chrome.runtime.onInstalled.addListener(function() {
  //   chrome.contextMenus.create({
  //     id: "miExtensionMenu",
  //     title: "Mi Opción de Menú",
  //     contexts: ["all"] // Puedes especificar en qué contextos aparecerá el menú (por ejemplo, ["selection"])
  //   });
  // });
  
  // chrome.contextMenus.onClicked.addListener(function(info, tab) {
  //   if (info.menuItemId === "miExtensionMenu") {
  //     // Tu código aquí para manejar la acción cuando se hace clic en el menú
  //     console.log("Opción de menú clickeada");
  //   }
  // });
  
















//   // Asigna el evento al botón una vez que se cargue el DOM
// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('mostrarTextoBtn').addEventListener('click', Search);
// });



// async function Search() {
//   try {
//     const textoCopiado = await navigator.clipboard.readText();

    
//     console.log(textoCopiado);
//     document.getElementById('texto').innerText = textoCopiado;
//     readText(textoCopiado);
    

//   } catch (error) {
//     console.error('Error al leer el portapapeles:', error);
//   }
// }
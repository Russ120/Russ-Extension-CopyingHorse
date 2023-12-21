  // document.addEventListener('mouseup', function () {
  //   // Obtener el texto seleccionado
  //   var textoSeleccionado = window.getSelection().toString();
  
  //   // Actualizar el contenido del h1 con el texto seleccionado
  //   document.getElementById('texto').innerText = textoSeleccionado;
  // });





// async function Search(){
//       try {
//           var url = URL_API + '/mostrar';
          
//           var response = await fetch(url, {
//               method: 'GET',
//               headers: {
//                   'Content-Type': 'application/json'
//               }
//           });
  
//           if (!response.ok) {
//               throw new Error(`Error en la llamada a la API: ${response.status}`);
//           }


//           console.log(response);
//           alert(response)
//           // var text = await response.json();
//           var text = await response;
//           // await mostrar(text);
//           document.getElementById('text').value = text;
      





//       } catch (error) {
//           console.error('Error en Search:', error);
//           // Muestra un mensaje de error al usuario, por ejemplo:
//           alert('Hubo un error al buscar. Por favor, inténtalo de nuevo.');
//       }
// }
















// function copiarTexto() {
//   // Obtener el texto seleccionado
//   var textoSeleccionado = window.getSelection().toString();

//   // Actualizar el contenido del h1 con el texto seleccionado
//   document.getElementById('texto').innerText = textoSeleccionado;
// }


//   {
//     "manifest_version": 3,
//     "name": "Russ Extension",
//     "version": "1.0",
//     "description": "Una extensión para leer texto seleccionado con voz",
//     "permissions": ["activeTab", "storage"],
//     "action":{
//       "default_popup": "popup.html"
//     },
//     "browser_action": {
//       "default_icon": "icon.jpg",
//       "default_popup": "popup.html"
//     },
//     "content_scripts": [
//       {
//         "matches": ["<all_urls>"],
//         "js": ["content.js"]
//       }
//     ]
//   }
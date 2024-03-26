const apiKey = 'igVkGpDSozkTUTJbeSgShx2MKGwgbEOo'; // Reemplaza 'tu_clave_de_api' con tu propia clave de API
const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;

console.log(url); // Esta línea imprimirá la URL completa con la clave de API correctamente concatenada

window.onload = function() {
  const apiKey = 'igVkGpDSozkTUTJbeSgShx2MKGwgbEOo'; // Reemplaza 'TuClaveDeAPI' con tu clave de API de Giphy
  const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=15`;

  fetch(trendingUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener los GIFs en tendencia:', response.status);
      }
      return response.json();
    })
    .then(data => {
      displayGifs(data.data);
    })
    .catch(error => {
      console.error('Error al obtener los GIFs en tendencia:', error);
    });

  function displayGifs(gifs) {
    const gifsContainer = document.getElementById('grid-container');
    gifsContainer.innerHTML = ''; // Clear existing GIFs

    gifs.forEach(gif => {
      const gifItem = document.createElement('div');
      gifItem.classList.add('gif-item');

      const gifImage = document.createElement('img');
      gifImage.src = gif.images.fixed_height.url;
      gifImage.alt = gif.title;

      gifItem.appendChild(gifImage);
      gifsContainer.appendChild(gifItem);
    });
  }
};


for (let i = 0; i < 36; i++) {
  const emptyDiv = document.createElement('div');
  emptyDiv.classList.add('grid-item');
  document.getElementById('gifscontainer').appendChild(emptyDiv);
}




  // Función para buscar GIFs por término

  function searchGifs() {
    const searchTerm = document.getElementById('searchterm').value; // Obtener el término de búsqueda del campo de entrada
    const apiKey = 'LTb6bfRtbw8boTKLBN0la2rdyJjIQS8i'; // Tu clave de API de Giphy
  
    // Construir la URL de búsqueda con el término de búsqueda y la clave de API
    const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=20`;
  
    // Llamar a la función fetchGifs() para obtener y mostrar los GIFs
    fetchGifs(searchUrl);
  }
  
  // Función para hacer la solicitud a la API y mostrar los GIFs
  function fetchGifs(url) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los GIFs:', response.status);
        }
        return response.json();
      })
      .then(data => {
        displayGifs(data.data);
      })
      .catch(error => {
        console.error('Error al obtener los GIFs:', error);
      });
  }

// Agregar un event listener para el evento submit del formulario
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('searchForm');

  if (searchForm) {
      searchForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Evitar que el formulario se envíe

          // Llamar a la función de búsqueda de GIFs
          searchGifs();
      });
  } else {
      console.error("El formulario 'searchForm' no fue encontrado en el DOM.");
  }
});

const searchForm = document.createElement('form');
searchForm.id = 'searchForm';
// Configurar otros atributos y contenido del formulario si es necesario
document.body.appendChild(searchForm);

  
// Funciones para manejar las páginas
let currentPage = 0;

function nextPage() {
    currentPage++;
    // Aquí puedes implementar la lógica para cargar la siguiente página de GIFs
    // Por ejemplo, puedes llamar a una función para cargar los GIFs de la página actual
    // y actualizar la grilla de GIFs
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        // Aquí puedes implementar la lógica para cargar la página anterior de GIFs
        // Por ejemplo, puedes llamar a una función para cargar los GIFs de la página actual
        // y actualizar la grilla de GIFs
    }
}


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
  window.onload = function() {
    const apiKey = ''; // Reemplaza 'TuClaveDeAPI' con tu clave de API de Giphy
    const trendingUrl = `https://api.giphy.com/v1/gifs/search?api_key=${LTb6bfRtbw8boTKLBN0la2rdyJjIQS8i}&limit=15`;
  }


  function searchgifs() {
    const searchTerm = document.getElementById('searchterm').value;
    const searchUrl = `api.giphy.com/v1/gifs/search?api_key=${LTb6bfRtbw8boTKLBN0la2rdyJjIQS8i}&q=${searchTerm}&limit=20`;
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

  

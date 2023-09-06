document.getElementById('data-formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma convencional
  
    const url = 'https://jsonplaceholder.typicode.com/users';
    const formData = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      fechaNacimiento: document.getElementById('fechaNacimiento').value,
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        // Puedes realizar otras acciones con la respuesta aquí
        console.log('Hola desde no Narnia', data);
      })
      .catch(error => console.error('Error:', error));

      this.reset();
  });
  

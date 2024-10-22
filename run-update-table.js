const http = require('http');

const options = {
  hostname: 'localhost',
  port: 4321,
  path: '/api/update-table',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  console.log('Headers:', res.headers);

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Respuesta completa:');
    console.log(data);
    try {
      const jsonResponse = JSON.parse(data);
      console.log('Respuesta JSON:', jsonResponse);
    } catch (error) {
      console.error('La respuesta no es JSON válido.');
    }
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.end();
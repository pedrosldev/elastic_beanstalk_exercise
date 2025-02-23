const express = require('express');
const app = express();
const path = require('path');

// Usa el puerto proporcionado por Elastic Beanstalk o 3000 como valor por defecto
const PORT = process.env.PORT || 3000;

// Sirve los archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});

// Inicia el servidor en el puerto configurado y permite conexiones desde cualquier IP
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor en http://0.0.0.0:${PORT}`);
});

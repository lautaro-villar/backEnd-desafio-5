//realTimeProducts.handlebars//


const products = []; // Array para almacenar los productos

// Manejador de conexión de sockets
io.on('connection', (socket) => {
  console.log(`Cliente conectado: ${socket.id}`);

  // Enviar lista de productos al cliente al conectarse
  socket.emit('updateList', products);

  // Manejador de eventos "addProduct"
  socket.on('addProduct', (product) => {
    products.push(product);
    io.emit('updateList', products); // Enviar lista actualizada a todos los clientes conectados
  });
});

const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/saludar") {
     sendHello(res);
  } else {
    sendDefault(res);
  }
});
server.listen(8080, "127.0.0.1", () => {
  console.log("Escuchando en localhost:8080");
});

function sendHello(res) {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write('<meta charset="utf-8" />');
  res.write("<title>Saludar</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>Hola Mundo!</h1>");
  res.write('<a href="/">Inicio</a>');
  res.write('<a href="/saludar">Saludar</a>');
  res.write("</body>");
  res.write("</html>");
  return res.end();
}

function sendDefault(res) {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write('<meta charset="utf-8" />');
  res.write("<title>Inicio</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>Inicio</h1>");
  res.write('<a href="/">Inicio</a>');
  res.write('<a href="/saludar">Saludar</a>');
  res.write("</body>");
  res.write("</html>");
  res.end();
}

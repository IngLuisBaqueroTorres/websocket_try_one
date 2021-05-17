const app = require('express')();
const appWs = require('express-ws')(app);
app.ws('/echo', ws => {
    ws.on('este es un mensaje', msg => {
        console.log('mensaje recibido por el esp:', msg);
        ws.send(msg);
    });
});

app.listen(1337, () => console.log('server iniciado'));
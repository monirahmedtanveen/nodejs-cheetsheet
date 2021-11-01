const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // process.exit();

    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter a Message</title></head>')
        res.write('<body><form action="/messages" method="POST"><input type="text" name="message"><button type="submit">Sent</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/messages' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });

        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Node APP</title></head>')
    res.write('<body><h1>My First Node App</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
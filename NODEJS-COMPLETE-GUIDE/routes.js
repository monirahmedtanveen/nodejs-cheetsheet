const fs = require('fs');

const requestHandler = (req, res) => {
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
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Node APP</title></head>')
    res.write('<body><h1>My First Node App</h1></body>');
    res.write('</html>');
    res.end();
};

// module.exports = {
//     handler: requestHandler,
//     someText: "Some Hardcoded Text"
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Some Hardcoded Text";

exports.handler = requestHandler;
exports.someText = "Some Hardcoded Text";